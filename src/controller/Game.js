const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const SizeValidation = require('../validation/SizeValidation');
const BridgeMaker = require('../BridgeMaker');
const generator = require('../BridgeRandomNumberGenerator').generate;
const MovingValidation = require('../validation/MovingValidation');
const BridgeGame = require('./BridgeGame');
const Player = require('../model/Player');
const CommandValidation = require('../validation/CommandValidation');

class Game {
  constructor() {
    OutputView.printStart();
    this.player = new Player();
  }

  start() {
    InputView.readBridgeSize(this.handleBridgeSize.bind(this));
  }

  handleBridgeSize(sizeInput) {
    try {
      SizeValidation.validateSizeInput(sizeInput);
      this.size = Number(sizeInput);
      this.canWalkBridge = BridgeMaker.makeBridge(this.size, generator);
      this.getMoving();
    } catch (err) {
      OutputView.printError(err.message);
      this.start();
    }
  }

  getMoving() {
    InputView.readMoving(this.handleMoving.bind(this));
  }

  handleMoving(moving) {
    try {
      MovingValidation.validateMoving(moving);
      this.calculateMoving(moving);
    } catch (err) {
      OutputView.printError(err.messages);
      this.getMoving();
    }
  }

  calculateMoving(moving) {
    const currentBridge = this.player.getCurrentBridge();
    const correctMoving = BridgeGame.move(
      this.canWalkBridge,
      moving,
      currentBridge,
    );

    this.player.updateBridgeState(moving, correctMoving);
    const bridgeState = this.player.getBridgeState();

    OutputView.printMap(bridgeState);

    if (!correctMoving) {
      return this.getCommand();
    }

    if (currentBridge === this.size) {
      this.player.updateGameSuccess();
      const gameSuccess = this.player.getGameSuccess();
      const tryingCount = this.player.getTryingCount();

      return OutputView.printResult(bridgeState, gameSuccess, tryingCount);
    }

    this.player.updateCurrentBridge();
    this.getMoving();
  }

  getCommand() {
    InputView.readGameCommand(this.handleCommand.bind(this));
  }

  handleCommand(command) {
    try {
      CommandValidation.validateCommand(command);
      const isRestart = BridgeGame.retry(command);

      if (!isRestart) {
        return OutputView.printResult();
      }

      this.player.resetState();
      this.getMoving();
    } catch (err) {
      OutputView.printError(err.message);
      this.getCommand();
    }
  }
}

module.exports = Game;

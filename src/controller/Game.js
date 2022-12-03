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
      OutputView.printEmpty();
      SizeValidation.validateSizeInput(sizeInput);
      this.handleValidSizeInput(sizeInput);
    } catch (err) {
      this.handleSizeError(err);
    }
  }

  handleValidSizeInput(sizeInput) {
    this.size = Number(sizeInput);
    this.canWalkBridge = BridgeMaker.makeBridge(this.size, generator);
    this.getMoving();
  }

  handleSizeError(err) {
    OutputView.printError(err.message);
    this.start();
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

    this.updateState(moving, correctMoving);
    this.checkCorrectMoving(currentBridge, correctMoving);
  }

  updateState(moving, correctMoving) {
    this.player.updateBridgeState(moving, correctMoving);
    this.bridgeState = this.player.getBridgeState();

    OutputView.printMap(this.bridgeState);
  }

  checkCorrectMoving(currentBridge, correctMoving) {
    if (!correctMoving) {
      return this.getCommand();
    }

    return this.checkGameSuccess(currentBridge);
  }

  checkGameSuccess(currentBridge) {
    if (currentBridge === this.size) {
      this.player.updateGameSuccess();
      const { gameSuccess, tryingCount } = this.getGameState();

      return OutputView.printResult(this.bridgeState, gameSuccess, tryingCount);
    }

    this.player.updateCurrentBridge();
    return this.getMoving();
  }

  getGameState() {
    const gameSuccess = this.player.getGameSuccess();
    const tryingCount = this.player.getTryingCount();

    return { gameSuccess, tryingCount };
  }

  getCommand() {
    InputView.readGameCommand(this.handleCommand.bind(this));
  }

  handleCommand(command) {
    try {
      CommandValidation.validateCommand(command);
      this.handleValidCommand(command);
    } catch (err) {
      OutputView.printError(err.message);
      this.getCommand();
    }
  }

  handleValidCommand(command) {
    const isRestart = BridgeGame.retry(command);

    this.checkRestart(isRestart);
  }

  checkRestart(isRestart) {
    if (!isRestart) {
      const { gameSuccess, tryingCount } = this.getGameState();

      return OutputView.printResult(this.bridgeState, gameSuccess, tryingCount);
    }

    this.player.resetState();
    return this.getMoving();
  }
}

module.exports = Game;

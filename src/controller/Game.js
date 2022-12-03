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
    this.bridgeGame = new BridgeGame();
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
    const correctMoving = this.bridgeGame.move(this.canWalkBridge, moving);

    this.player.updateBridgeState(moving, correctMoving);
    const bridgeState = this.player.getBridgeState();

    OutputView.printMap(bridgeState);

    if (correctMoving && bridgeState.length !== this.size) {
      this.getMoving();
    }

    if (correctMoving && bridgeState.length === this.size) {
    }

    if (!correctMoving) {
      this.getCommand();
    }
  }

  getCommand() {
    InputView.readGameCommand(this.handleCommand.bind(this));
  }

  handleCommand(command) {
    try {
      CommandValidation.validateCommand(command);
    } catch (err) {
      OutputView.printError(err.message);
    }
  }
}

module.exports = Game;

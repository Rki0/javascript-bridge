const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const BridgeSize = require('../model/BridgeSize');
const BridgeMaker = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');
const BridgeGame = require('../model/BridgeGame');
const Player = require('../model/Player');

class Game {
  constructor() {
    OutputView.printStart();
  }

  start() {
    InputView.readBridgeSize(this.handleBridgeSize);
  }

  handleBridgeSize = (sizeInput) => {
    try {
      OutputView.printEmpty();
      const bridgeSize = new BridgeSize(sizeInput);
      const size = bridgeSize.getBridgeSize();
      this.handleValidSizeInput(size);
    } catch (err) {
      this.handleSizeError(err);
    }
  };

  handleValidSizeInput(size) {
    this.canWalkBridge = BridgeMaker.makeBridge(size, generate);

    this.player = new Player(this.canWalkBridge);
    this.askMoving();
  }

  handleSizeError(err) {
    OutputView.printError(err.message);
    this.start();
  }

  askMoving() {
    InputView.readMoving(this.handleMoving);
  }

  handleMoving = (moving) => {
    try {
      const currentBridge = this.player.getCurrentBridge();
      this.player.updateMovingCount();
      const isCorrectMoving = BridgeGame.move(moving, currentBridge);
      this.handleValidMovingInput(moving, isCorrectMoving);
    } catch (err) {
      this.handleMovingError(err);
    }
  };

  handleValidMovingInput(moving, isCorrectMoving) {
    this.player.updateBridgeState(moving, isCorrectMoving);
    this.bridgeState = this.player.getBridgeState();
    this.isSuccess = this.player.getGameSuccess();

    OutputView.printMap(this.bridgeState);

    this.checkCorrectMoving(isCorrectMoving);
  }

  checkCorrectMoving(isCorrectMoving) {
    if (!isCorrectMoving) {
      return this.askCommand();
    }

    this.checkGameSuccess();
  }

  checkGameSuccess() {
    if (!this.isSuccess) {
      return this.askMoving();
    }

    const tryingCount = this.player.getTryingCount();
    OutputView.printResult(this.bridgeState, this.isSuccess, tryingCount);
  }

  handleMovingError(err) {
    OutputView.printError(err.message);
    this.askMoving();
  }

  askCommand() {
    InputView.readGameCommand(this.handleCommand);
  }

  handleCommand = (commandInput) => {
    try {
      const isRestart = BridgeGame.retry(commandInput);
      this.checkRestart(isRestart);
    } catch (err) {
      this.handleCommandError(err);
    }
  };

  checkRestart(isRestart) {
    if (isRestart) {
      this.player.reset();
      return this.askMoving();
    }

    const tryingCount = this.player.getTryingCount();
    OutputView.printResult(this.bridgeState, this.isSuccess, tryingCount);
  }

  handleCommandError(err) {
    OutputView.printError(err.message);
    this.askCommand();
  }
}

module.exports = Game;

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
      const bridgeSize = new BridgeSize(sizeInput);
      this.size = bridgeSize.getBridgeSize();
      this.canWalkBridge = BridgeMaker.makeBridge(this.size, generate);
      this.startMoving();
    } catch (err) {
      OutputView.printError(err.message);
      this.start();
    }
  };

  startMoving() {
    this.player = new Player();
    this.askMoving();
  }

  askMoving() {
    InputView.readMoving(this.handleMoving);
  }

  handleMoving = (moving) => {
    try {
      this.tryMoving(moving);
    } catch (err) {
      OutputView.printError(err.message);
      this.askMoving();
    }
  };

  tryMoving(moving) {
    const currentIndex = this.player.getCurrentIndex();
    const bridgeGame = new BridgeGame();
    const canMove = bridgeGame.move(this.canWalkBridge, currentIndex, moving);

    this.manipulateMoving(moving, canMove);

    this.checkCorrectMoving(canMove);
  }

  manipulateMoving(moving, canMove) {
    this.player.calculateProperty(moving, canMove);
    this.bridgeState = this.player.getBridgeState();
    OutputView.printMap(this.bridgeState);
  }

  checkCorrectMoving(canMove) {
    if (!canMove) {
      return this.askRestart();
    }

    return this.checkGameSuccess();
  }

  checkGameSuccess() {
    this.player.updateGameSuccess(this.size);
    const isSuccess = this.player.getGameSuccess();
    const tryingCount = this.player.getTryingCount();

    if (!isSuccess) {
      return this.askMoving();
    }

    return OutputView.printResult(this.bridgeState, isSuccess, tryingCount);
  }

  askRestart() {
    InputView.readGameCommand(this.handleCommand);
  }

  handleCommand = (command) => {
    try {
      const bridgeGame = new BridgeGame();
      const isRestart = bridgeGame.retry(command);
      this.checkRestart(isRestart);
    } catch (err) {
      OutputView.printError(err.message);
      this.askRestart();
    }
  };

  checkRestart(isRestart) {
    if (!isRestart) {
      const isSuccess = this.player.getGameSuccess();
      const tryingCount = this.player.getTryingCount();
      return OutputView.printResult(this.bridgeState, isSuccess, tryingCount);
    }

    this.player.restart();
    return this.askMoving();
  }
}

module.exports = Game;

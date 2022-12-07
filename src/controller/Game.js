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
      const size = bridgeSize.getBridgeSize();
      this.canWalkBridge = BridgeMaker.makeBridge(size, generate);
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
    const bridgeState = this.player.getBridgeState();
    OutputView.printMap(bridgeState);
  }

  checkCorrectMoving(canMove) {
    if (!canMove) {
      return this.askRestart();
    }

    return this.askMoving();
  }

  askRestart() {
    InputView.readGameCommand(this.handleCommand);
  }

  handleCommand = (command) => {};
}

module.exports = Game;

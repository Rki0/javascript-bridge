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
      this.askMoving();
    } catch (err) {
      OutputView.printError(err.message);
      this.start();
    }
  };

  askMoving() {
    InputView.readMoving(this.handleMoving);
  }

  handleMoving = (moving) => {
    try {
      const player = new Player(this.canWalkBridge);
      const currentBridge = player.getCurrentBridge();
      player.updateMovingCount();
      const bridgeGame = new BridgeGame();
      const correctMoving = bridgeGame.move(moving, currentBridge);
    } catch (err) {
      OutputView.printError(err.message);
      this.askMoving();
    }
  };
}

module.exports = Game;

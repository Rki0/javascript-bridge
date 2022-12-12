const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const BridgeSize = require('../model/BridgeSize');
const BridgeMaker = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');
const BridgeGame = require('../model/BridgeGame');

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
      const canWalkBridge = BridgeMaker.makeBridge(size, generate);
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
      const bridgeGame = new BridgeGame();
      bridgeGame.move(moving);
    } catch (err) {
      OutputView.printError(err.message);
      this.askMoving();
    }
  };
}

module.exports = Game;

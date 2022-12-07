const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const BridgeSize = require('../model/BridgeSize');
const BridgeMaker = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');

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
    } catch (err) {
      OutputView.printError(err.message);
      this.start();
    }
  };

  askMoving() {
    InputView.readMoving(this.handleMoving);
  }

  handleMoving = (moving) => {};
}

module.exports = Game;

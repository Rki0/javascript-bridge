const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const BridgeSize = require('../model/BridgeSize');

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
    } catch (err) {
      OutputView.printError(err.message);
      this.start();
    }
  };
}

module.exports = Game;

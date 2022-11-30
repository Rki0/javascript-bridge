const OutputView = require('./view/OutputView');
const InputView = require('./view/InputView');
const SizeValidation = require('./validation/SizeValidation');
const BridgeMaker = require('./BridgeMaker');
const generator = require('./BridgeRandomNumberGenerator').generate;

class Game {
  constructor() {
    OutputView.printStart();
  }

  decideSize() {
    InputView.readBridgeSize(this.handleSize.bind(this));
  }

  handleSize(sizeInput) {
    try {
      this.validateSize(sizeInput);
      const size = Number(sizeInput);
      const canWalkBridge = BridgeMaker.makeBridge(size, generator);
    } catch (err) {
      OutputView.printError(err.message);
      InputView.readBridgeSize(this.handleSize.bind(this));
    }
  }

  validateSize(sizeInput) {
    const sizeValidation = new SizeValidation(sizeInput);
    sizeValidation.checkError();
  }
}

module.exports = Game;

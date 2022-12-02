const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const SizeValidation = require('../validation/SizeValidation');

class Game {
  constructor() {
    OutputView.printStart();
  }

  start() {
    InputView.readBridgeSize(this.handleBridgeSize.bind(this));
  }

  handleBridgeSize(sizeInput) {
    try {
      SizeValidation.validateSizeInput(sizeInput);
    } catch (err) {
      OutputView.printError(err.message);
      this.start();
    }
  }
}

module.exports = Game;

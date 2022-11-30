const OutputView = require('./view/OutputView');
const InputView = require('./view/InputView');
const SizeValidation = require('./validation/SizeValidation');

class Game {
  constructor() {
    OutputView.printStart();
  }

  decideSize() {
    InputView.readBridgeSize(this.handleSize.bind(this));
  }

  handleSize(sizeInput) {
    try {
      const sizeValidation = new SizeValidation(sizeInput);
      sizeValidation.checkError();
    } catch (err) {
      OutputView.printError(err.message);
      InputView.readBridgeSize(this.handleSize.bind(this));
    }
  }
}

module.exports = Game;

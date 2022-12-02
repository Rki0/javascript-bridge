const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');

class Game {
  constructor() {
    OutputView.printStart();
  }

  start() {
    InputView.readBridgeSize(this.handleBridgeSize.bind(this));
  }

  handleBridgeSize(sizeInput) {}
}

module.exports = Game;

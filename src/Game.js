const OutputView = require('./view/OutputView');
const InputView = require('./view/InputView');

class Game {
  constructor() {
    OutputView.printStart();
  }

  decideSize() {
    InputView.readBridgeSize(this.handleSize.bind(this));
  }

  handleSize() {}
}

module.exports = Game;

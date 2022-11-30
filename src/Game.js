const OutputView = require('./view/OutputView');
const InputView = require('./view/InputView');
const SizeValidation = require('./validation/SizeValidation');
const BridgeMaker = require('./BridgeMaker');
const generator = require('./BridgeRandomNumberGenerator').generate;
const MovingValidation = require('./validation/MovingValidation');

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
      this.decideSize();
    }
  }

  validateSize(sizeInput) {
    const sizeValidation = new SizeValidation(sizeInput);
    sizeValidation.checkError();
  }

  decideMoving() {
    InputView.readMoving(this.handleMoving.bind(this));
  }

  handleMoving(moving) {
    try {
      const movingValidation = new MovingValidation(moving);
      movingValidation.checkError();
    } catch (err) {
      OutputView.printError(err.message);
      this.decideMoving();
    }
  }
}

module.exports = Game;

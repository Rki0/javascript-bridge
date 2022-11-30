const OutputView = require('./view/OutputView');
const InputView = require('./view/InputView');
const SizeValidation = require('./validation/SizeValidation');
const BridgeMaker = require('./BridgeMaker');
const generator = require('./BridgeRandomNumberGenerator').generate;
const MovingValidation = require('./validation/MovingValidation');
const Result = require('./Result');

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
      this.canWalkBridge = BridgeMaker.makeBridge(size, generator);
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
      this.validateMoving(moving);
      this.checkMoving(moving);
    } catch (err) {
      OutputView.printError(err.message);
      this.decideMoving();
    }
  }

  validateMoving(moving) {
    const movingValidation = new MovingValidation(moving);
    movingValidation.checkError();
  }

  checkMoving(moving) {
    const correctMoving = Result.checkCorrectMoving(this.canWalkBridge, moving);
  }
}

module.exports = Game;

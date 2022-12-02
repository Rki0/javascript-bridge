const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const SizeValidation = require('../validation/SizeValidation');
const BridgeMaker = require('../model/BridgeMaker');
const generator = require('../BridgeRandomNumberGenerator').generate;
const MovingValidation = require('../validation/MovingValidation');

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
      const size = Number(sizeInput);
      const canWalkBridge = BridgeMaker.makeBridge(size, generator);
      this.getMoving();
    } catch (err) {
      OutputView.printError(err.message);
      this.start();
    }
  }

  getMoving() {
    InputView.readMoving(this.handleMoving.bind(this));
  }

  handleMoving(moving) {
    try {
      MovingValidation.validateMoving(moving);
    } catch (err) {
      OutputView.printError(err.messages);
      this.getMoving();
    }
  }
}

module.exports = Game;

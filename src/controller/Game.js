const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const SizeValidation = require('../validation/SizeValidation');
const BridgeMaker = require('../BridgeMaker');
const generator = require('../BridgeRandomNumberGenerator').generate;
const MovingValidation = require('../validation/MovingValidation');
const BridgeGame = require('./BridgeGame');

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
      this.canWalkBridge = BridgeMaker.makeBridge(size, generator);
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
      const bridgeGame = new BridgeGame();
      const correctMoving = bridgeGame.move(this.canWalkBridge, moving);
    } catch (err) {
      OutputView.printError(err.messages);
      this.getMoving();
    }
  }
}

module.exports = Game;

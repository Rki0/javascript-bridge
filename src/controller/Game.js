const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const SizeValidation = require('../validation/SizeValidation');
const BridgeMaker = require('../BridgeMaker');
const generator = require('../BridgeRandomNumberGenerator').generate;
const MovingValidation = require('../validation/MovingValidation');
const BridgeGame = require('./BridgeGame');
const Player = require('../model/Player');

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
      this.calculateMoving(moving);
    } catch (err) {
      OutputView.printError(err.messages);
      this.getMoving();
    }
  }

  calculateMoving(moving) {
    const bridgeGame = new BridgeGame();
    const correctMoving = bridgeGame.move(this.canWalkBridge, moving);

    const player = new Player();
    player.updateBridgeState(moving, correctMoving);
  }
}

module.exports = Game;

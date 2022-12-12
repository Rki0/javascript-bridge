const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const BridgeSize = require('../model/BridgeSize');
const BridgeMaker = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');
const BridgeGame = require('../model/BridgeGame');
const Player = require('../model/Player');
const Command = require('../model/Command');

class Game {
  constructor() {
    OutputView.printStart();
  }

  start() {
    InputView.readBridgeSize(this.handleBridgeSize);
  }

  handleBridgeSize = (sizeInput) => {
    try {
      const bridgeSize = new BridgeSize(sizeInput);
      const size = bridgeSize.getBridgeSize();
      this.canWalkBridge = BridgeMaker.makeBridge(size, generate);
      this.askMoving();
    } catch (err) {
      OutputView.printError(err.message);
      this.start();
    }
  };

  askMoving() {
    InputView.readMoving(this.handleMoving);
  }

  handleMoving = (moving) => {
    try {
      const player = new Player(this.canWalkBridge);
      const currentBridge = player.getCurrentBridge();
      player.updateMovingCount();

      const bridgeGame = new BridgeGame();
      const isCorrectMoving = bridgeGame.move(moving, currentBridge);

      player.updateBridgeState(moving, isCorrectMoving);
      const { lowerBridge, upperBridge } = player.getBridgeState();

      OutputView.printMap(lowerBridge, upperBridge);

      if (!isCorrectMoving) {
        this.askCommand();
      }
    } catch (err) {
      OutputView.printError(err.message);
      this.askMoving();
    }
  };

  askCommand() {
    InputView.readGameCommand(this.handleCommand);
  }

  handleCommand = (commandInput) => {
    try {
      const command = new Command(commandInput);
    } catch (err) {
      OutputView.printError(err.message);
      this.askCommand();
    }
  };
}

module.exports = Game;

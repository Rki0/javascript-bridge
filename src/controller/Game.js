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

      this.player = new Player(this.canWalkBridge);
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
      const currentBridge = this.player.getCurrentBridge();
      this.player.updateMovingCount();

      const bridgeGame = new BridgeGame();
      const isCorrectMoving = bridgeGame.move(moving, currentBridge);

      this.player.updateBridgeState(moving, isCorrectMoving);
      this.bridgeState = this.player.getBridgeState();
      this.isSuccess = this.player.getGameSuccess();

      OutputView.printMap(this.bridgeState);

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
      const bridgeGame = new BridgeGame();
      const isRestart = bridgeGame.retry(commandInput);

      if (isRestart) {
        this.player.reset();
        return this.askMoving();
      }

      const tryingCount = this.player.getTryingCount();
      OutputView.printResult(this.bridgeState, this.isSuccess, tryingCount);
    } catch (err) {
      OutputView.printError(err.message);
      this.askCommand();
    }
  };
}

module.exports = Game;

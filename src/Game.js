const OutputView = require('./view/OutputView');
const InputView = require('./view/InputView');
const SizeValidation = require('./validation/SizeValidation');
const BridgeMaker = require('./BridgeMaker');
const generator = require('./BridgeRandomNumberGenerator').generate;
const MovingValidation = require('./validation/MovingValidation');
const Player = require('./Player');
const CommandValidation = require('./validation/CommandValidation');
const BridgeGame = require('./BridgeGame');

class Game {
  constructor() {
    OutputView.printStart();
  }

  decideSize() {
    InputView.readBridgeSize(this.handleSize.bind(this));
  }

  handleSize(sizeInput) {
    try {
      OutputView.printEmpty();
      this.validateSize(sizeInput);
      this.makeRandomBridge(sizeInput);
      this.decideMoving();
    } catch (err) {
      OutputView.printError(err.message);
      this.decideSize();
    }
  }

  validateSize(sizeInput) {
    const sizeValidation = new SizeValidation(sizeInput);
    sizeValidation.checkError();
  }

  makeRandomBridge(sizeInput) {
    const size = Number(sizeInput);
    this.canWalkBridge = BridgeMaker.makeBridge(size, generator);
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
    const correctMoving = BridgeGame.move(
      this.canWalkBridge,
      moving,
      Player.movingCount,
    );
    Player.updateBridgeState(moving, correctMoving);
    OutputView.printMap(Player.bridgeState);
    this.checkCorrect(correctMoving);
  }

  checkCorrect(correctMoving) {
    if (!correctMoving) {
      Player.resetMovingCount();
      return this.decideRestart();
    }

    Player.increaseMovingCount();
    Player.checkGameSuccess(this.canWalkBridge);
    return this.checkSuccess();
  }

  checkSuccess() {
    if (!Player.success) {
      return this.decideMoving();
    }

    return OutputView.printResult();
  }

  decideRestart() {
    InputView.readGameCommand(this.handleCommand.bind(this));
  }

  handleCommand(command) {
    try {
      this.validateCommand(command);
      this.checkRestart(command);
    } catch (err) {
      OutputView.printError(err.message);
      this.decideRestart();
    }
  }

  validateCommand(command) {
    const commandValidation = new CommandValidation(command);
    commandValidation.checkError();
  }

  checkRestart(command) {
    const gameRestart = BridgeGame.retry(command);
    this.restartOrQuit(gameRestart);
  }

  restartOrQuit(gameRestart) {
    if (!gameRestart) {
      return OutputView.printResult();
    }

    Player.restart();
    return this.decideMoving();
  }
}

module.exports = Game;

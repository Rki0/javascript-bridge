// 파일 경로 변경 가능
// 메서드 인자 변경 가능
// 메서드 추가 가능
const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constant/Constants');
const SizeValidation = require('../validation/SizeValidation');
const BridgeMaker = require('../BridgeMaker');
const generator = require('../BridgeRandomNumberGenerator').generate;
const MovingValidation = require('../validation/MovingValidation');
const BridgeGame = require('../BridgeGame');
const Player = require('../Player');
const OutputView = require('./OutputView');
const CommandValidation = require('../validation/CommandValidation');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(MESSAGE.ASK_BRIDGE_LENGTH, (sizeInput) => {
      try {
        this.handleSize(sizeInput);
      } catch (err) {
        Console.print(err);
        this.readBridgeSize();
      }
    });
  },

  handleSize(sizeInput) {
    this.validateSizeInput(sizeInput);

    const size = Number(sizeInput);
    this.canWalkBridge = BridgeMaker.makeBridge(size, generator);

    this.readMoving();
  },

  validateSizeInput(sizeInput) {
    const sizeValidation = new SizeValidation(sizeInput);
    sizeValidation.validateSize();
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(MESSAGE.ASK_WHERE_WANT_TO_GO, (moving) => {
      try {
        this.handleMoving(moving);
      } catch (err) {
        Console.print(err);
        this.readMoving();
      }
    });
  },

  handleMoving(moving) {
    this.validateMoving(moving);

    const isCorrectMove = BridgeGame.move(this.canWalkBridge, moving);
    Player.updateBridgeState(this.canWalkBridge, moving);
    OutputView.printMap();

    this.handleCorrectMoving(isCorrectMove);
    this.handleWrongMoving(isCorrectMove);
  },

  validateMoving(moving) {
    const movingValidation = new MovingValidation(moving);
    movingValidation.validateMoving();
  },

  handleCorrectMoving(isCorrectMove) {
    this.handleGameSuccess(isCorrectMove);

    this.handleNotYetSuccess(isCorrectMove);
  },

  handleGameSuccess(isCorrectMove) {
    if (isCorrectMove && Player.movingCount === this.canWalkBridge.length - 1) {
      Player.setGameSuccess();
      OutputView.printResult();
    }
  },

  handleNotYetSuccess(isCorrectMove) {
    if (isCorrectMove && Player.movingCount !== this.canWalkBridge.length - 1) {
      Player.increaseMovingCount();
      this.readMoving(this.canWalkBridge);
    }
  },

  handleWrongMoving(isCorrectMove) {
    if (!isCorrectMove) {
      this.readGameCommand();
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(MESSAGE.ASK_RESTART_OR_QUIT, (command) => {
      try {
        this.hadleCommand(command);
      } catch (err) {
        Console.print(err);
        this.readGameCommand();
      }
    });
  },

  hadleCommand(command) {
    this.validateCommand(command);

    this.decideRetry(command);
  },

  validateCommand(command) {
    const commandValidation = new CommandValidation(command);
    commandValidation.validateCommand();
  },

  decideRetry(command) {
    const wantReTry = BridgeGame.retry(command);

    this.handleRetry(wantReTry);
    this.handleQuit(wantReTry);
  },

  handleRetry(wantReTry) {
    if (wantReTry) {
      Player.retry();
      this.readMoving(this.canWalkBridge);
    }
  },

  handleQuit(wantReTry) {
    if (!wantReTry) {
      OutputView.printResult();
    }
  },
};

module.exports = InputView;

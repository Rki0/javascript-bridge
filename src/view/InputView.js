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
    const canWalkBridge = BridgeMaker.makeBridge(size, generator);

    this.readMoving(canWalkBridge);
  },

  validateSizeInput(sizeInput) {
    const sizeValidation = new SizeValidation(sizeInput);
    sizeValidation.validateSize();
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(canWalkBridge) {
    Console.readLine(MESSAGE.ASK_WHERE_WANT_TO_GO, (moving) => {
      try {
        this.handleMoving(canWalkBridge, moving);
      } catch (err) {
        Console.print(err);
        this.readMoving(canWalkBridge);
      }
    });
  },

  handleMoving(canWalkBridge, moving) {
    this.validateMoving(moving);

    const bridgeGame = new BridgeGame();
    const isCorrectMove = bridgeGame.move(canWalkBridge, moving);
    Player.updateBridgeState(canWalkBridge, moving);
    OutputView.printMap();

    this.handleCorrectMoving(canWalkBridge, isCorrectMove);
    this.handleWrongMoving(isCorrectMove);
  },

  validateMoving(moving) {
    const movingValidation = new MovingValidation(moving);
    movingValidation.validateMoving();
  },

  handleCorrectMoving(canWalkBridge, isCorrectMove) {
    if (isCorrectMove) {
      Player.increaseMovingCount();
      this.readMoving(canWalkBridge);
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
  readGameCommand() {},
};

module.exports = InputView;

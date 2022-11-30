// readLine은 여기서만 사용 가능
// 파일 경로 변경 가능
// 메서드의 인자 변경 가능
// 메서드 추가 가능
const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constant/Constants');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine(MESSAGE.ASK_BRIDGE_LENGTH, (sizeInput) => {
      callback(sizeInput);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    Console.readLine(MESSAGE.ASK_WHERE_WANT_TO_GO, (moving) => {
      callback(moving);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;

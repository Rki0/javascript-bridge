// 파일 경로 변경 가능
// 메서드 인자 변경 가능
// 메서드 추가 가능
// 메서드 명 변경 불가능
const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constant/Constants');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(state) {
    Console.print(MESSAGE.BRIDGE_STATE(state[1]));
    Console.print(`${MESSAGE.BRIDGE_STATE(state[0])}\n`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(state, success, count) {
    Console.print(MESSAGE.NOTIFY_RESULT);
    this.printMap(state);
    Console.print(MESSAGE.SUCCESS_STATE(success));
    Console.print(MESSAGE.TRYING_STATE(count));
    Console.close();
  },

  printStart() {
    Console.print(MESSAGE.NOTIFY_START);
  },

  printError(errorMessage) {
    Console.print(errorMessage);
  },
};

module.exports = OutputView;

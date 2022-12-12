const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, GAME } = require('../constant/Constants');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  // printMap(lower, upper) {
  //   Console.print(MESSAGE.NOTIFY_BRIDGE_STATE(upper));
  //   Console.print(MESSAGE.NOTIFY_BRIDGE_STATE(lower));
  // },

  printMap(bridgeState) {
    Console.print(MESSAGE.NOTIFY_BRIDGE_STATE(bridgeState[1]));
    Console.print(MESSAGE.NOTIFY_BRIDGE_STATE(bridgeState[0]));
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeState, isSuccess, tryingCount) {
    Console.print(MESSAGE.NOTIFY_RESULT);
    this.printMap(bridgeState);
    Console.print(
      MESSAGE.SHOW_GAME_SUCCESS_STATE(
        isSuccess ? GAME.SUCCESS_STRING : GAME.FAIL_STRING,
      ),
    );
    Console.print(MESSAGE.SHOW_TRYING_COUNT(tryingCount));
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

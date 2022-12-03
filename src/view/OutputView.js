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
  printMap(birdgeState) {
    Console.print(MESSAGE.SHOW_BRIDGE(birdgeState[GAME.UPPER_BRIDGE_NUMBER]));
    Console.print(
      `${MESSAGE.SHOW_BRIDGE(birdgeState[GAME.LOWER_BRIDGE_NUMBER])}\n`,
    );
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(birdgeState, success, count) {
    Console.print(MESSAGE.NOTIFY_RESULT);
    this.printMap(birdgeState);
    Console.print(MESSAGE.SHOW_SUCCESS(success));
    Console.print(MESSAGE.SHOW_TRYING_COUNT(count));
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

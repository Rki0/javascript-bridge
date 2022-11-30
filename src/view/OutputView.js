const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constant/Constants');
const Player = require('../Player');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap() {
    Console.print(MESSAGE.BRIDGE_STATE(Player.bridgeState[1]));
    Console.print(`${MESSAGE.BRIDGE_STATE(Player.bridgeState[0])}\n`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {
    Console.print(MESSAGE.NOTIFY_RESULT);
    this.printMap();
    Console.print(MESSAGE.SUCCESS_STATE(Player.success));
    Console.print(MESSAGE.TRYING_STATE(Player.tryingCount));
    Console.close();
  },

  printStart() {
    Console.print(MESSAGE.NOTIFY_START);
  },

  printError(errorMessage) {
    Console.print(errorMessage);
  },

  printEmpty() {
    Console.print('');
  },
};

module.exports = OutputView;

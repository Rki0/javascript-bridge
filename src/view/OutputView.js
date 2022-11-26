// 파일 경로 변경 가능
// 인자 추가 및 변경 가능
// 메서드 추가 가능
// 주어진 메서드명 변경 불가능
const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, STATE, RESULT } = require('../constant/Constants');
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
    Console.print(STATE.BRIDGE_SATE(Player.bridgeState[1]));
    Console.print(STATE.BRIDGE_SATE(Player.bridgeState[0]));
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {
    Console.print(MESSAGE.NOTIFY_GAME_RESULT);
    this.printMap();
    Console.print(RESULT.GAME_SUCCESS_STATE(Player.gameSuccess));
    Console.print(RESULT.GAME_TRYING_COUNT(Player.gameTryingCount));
    Console.close();
  },

  printStart() {
    Console.print(MESSAGE.NOTIFY_GAME_SATRT);
  },
};

module.exports = OutputView;

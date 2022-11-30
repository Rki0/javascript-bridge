const { GAME } = require('./constant/Constants');
const Player = require('./Player');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  static move(canWalkBridge, moving) {
    if (canWalkBridge[Player.movingCount] !== moving) {
      return false;
    }

    return true;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  static retry(command) {
    if (command !== GAME.RESTART_COMMAND) {
      return false;
    }

    return true;
  }
}

module.exports = BridgeGame;

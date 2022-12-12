const { GAME } = require('../constant/Constants');

class Player {
  #canWalkBridge;

  #movingCount;

  #bridgeState;

  constructor(bridge) {
    this.#movingCount = 0;
    this.#canWalkBridge = bridge;
    this.#bridgeState = {
      lower: [],
      upper: [],
    };
  }

  updateMovingCount() {
    this.#movingCount += 1;
  }

  getCurrentBridge() {
    return this.#canWalkBridge[this.#movingCount];
  }

  updateBridgeState(moving, correct) {
    const isLowerBridge = this.checkLowerBrige(moving);
    const state = correct ? GAME.CORRECT_BRIDGE : GAME.WRONG_BRIDGE;

    this.updateEachBridge(isLowerBridge, state);
  }

  checkLowerBrige(moving) {
    if (moving !== GAME.LOWER_BRIDGE_STRING) {
      return false;
    }

    return true;
  }

  updateEachBridge(isLowerBridge, state) {
    if (!isLowerBridge) {
      this.#bridgeState.lower.push(GAME.NOT_CHOICED_BRIDGE);
      this.#bridgeState.upper.push(state);
      return;
    }

    this.#bridgeState.lower.push(state);
    this.#bridgeState.upper.push(GAME.NOT_CHOICED_BRIDGE);
  }

  getBridgeState() {
    const lowerBridge = this.#bridgeState.lower.join(GAME.BRIDGE_SEPARATOR);
    const upperBridge = this.#bridgeState.upper.join(GAME.BRIDGE_SEPARATOR);

    return { lowerBridge, upperBridge };
  }
}

module.exports = Player;

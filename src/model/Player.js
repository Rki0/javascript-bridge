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
    if (moving === GAME.LOWER_BRIDGE_STRING && correct) {
      this.#bridgeState.lower.push(GAME.CORRECT_BRIDGE);
      this.#bridgeState.upper.push(GAME.NOT_CHOICED_BRIDGE);
    }

    if (moving === GAME.LOWER_BRIDGE_STRING && !correct) {
      this.#bridgeState.lower.push(GAME.WRONG_BRIDGE);
      this.#bridgeState.upper.push(GAME.NOT_CHOICED_BRIDGE);
    }

    if (moving === GAME.UPPER_BRIDGE_STRING && correct) {
      this.#bridgeState.lower.push(GAME.NOT_CHOICED_BRIDGE);
      this.#bridgeState.upper.push(GAME.CORRECT_BRIDGE);
    }

    if (moving === GAME.UPPER_BRIDGE_STRING && !correct) {
      this.#bridgeState.lower.push(GAME.NOT_CHOICED_BRIDGE);
      this.#bridgeState.upper.push(GAME.WRONG_BRIDGE);
    }
  }

  getBridgeState() {
    const lowerBridge = this.#bridgeState.lower.join(GAME.BRIDGE_SEPARATOR);
    const upperBridge = this.#bridgeState.upper.join(GAME.BRIDGE_SEPARATOR);

    return { lowerBridge, upperBridge };
  }
}

module.exports = Player;

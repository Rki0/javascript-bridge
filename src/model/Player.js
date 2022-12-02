const { GAME, RESULT } = require('../constant/Constants');

class Player {
  #bridgeState;

  constructor() {
    this.#bridgeState = [[], []];
  }

  updateBridgeState(moving, correct) {
    this.calculateLowerBridge(moving, correct);
    this.calculateUpperBridge(moving, correct);
  }

  calculateLowerBridge(moving, correct) {
    if (moving === GAME.LOWER_BRIDGE_STRING && correct) {
      this.#bridgeState[GAME.LOWER_BRIDGE_NUMBER].push(RESULT.CORRECT_MOVING);
      this.#bridgeState[GAME.UPPER_BRIDGE_NUMBER].push(RESULT.NOT_CHOICED);
    }

    if (moving === GAME.LOWER_BRIDGE_STRING && !correct) {
      this.#bridgeState[GAME.LOWER_BRIDGE_NUMBER].push(RESULT.WRONG_MOVING);
      this.#bridgeState[GAME.UPPER_BRIDGE_NUMBER].push(RESULT.NOT_CHOICED);
    }
  }

  calculateUpperBridge(moving, correct) {
    if (moving === GAME.UPPER_BRIDGE_STRING && correct) {
      this.#bridgeState[GAME.UPPER_BRIDGE_NUMBER].push(RESULT.CORRECT_MOVING);
      this.#bridgeState[GAME.LOWER_BRIDGE_NUMBER].push(RESULT.NOT_CHOICED);
    }

    if (moving === GAME.UPPER_BRIDGE_STRING && !correct) {
      this.#bridgeState[GAME.UPPER_BRIDGE_NUMBER].push(RESULT.WRONG_MOVING);
      this.#bridgeState[GAME.LOWER_BRIDGE_NUMBER].push(RESULT.NOT_CHOICED);
    }
  }
}

module.exports = Player;

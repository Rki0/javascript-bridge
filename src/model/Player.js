const { GAME, RESULT } = require('../constant/Constants');

class Player {
  #bridgeState;

  #currentBridge;

  #gameSuccess;

  #tryingCount;

  constructor() {
    this.#bridgeState = [[], []];
    this.#currentBridge = 1;
    this.#gameSuccess = false;
    this.#tryingCount = 1;
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

  getBridgeState() {
    return this.#bridgeState;
  }

  getCurrentBridge() {
    return this.#currentBridge;
  }

  getGameSuccess() {
    return this.#gameSuccess;
  }

  getTryingCount() {
    return this.#tryingCount;
  }

  updateCurrentBridge() {
    this.#currentBridge += 1;
  }

  updateGameSuccess() {
    this.#gameSuccess = true;
  }

  resetState() {
    this.#bridgeState = [[], []];
    this.#currentBridge = 1;
    this.#tryingCount += 1;
  }
}

module.exports = Player;

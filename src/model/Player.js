const { GAME } = require('../constant/Constants');

class Player {
  #currentIndex;

  #bridgeState;

  #tryingCount;

  constructor() {
    this.#currentIndex = 0;
    this.#bridgeState = [[], []];
    this.#tryingCount = 1;
  }

  getCurrentIndex() {
    return this.#currentIndex;
  }

  getBridgeState() {
    return this.#bridgeState;
  }

  increaseCurrentIndex() {
    this.#currentIndex += 1;
  }

  calculateProperty(moving, canMove) {
    const choicedBridge = this.calculateChoicedBridge(moving);
    const notChoicedBridge = this.calculateNotChoidedBridge(moving);
    const answer = this.checkCorrectMoving(canMove);

    this.updateBridgeState(choicedBridge, notChoicedBridge, answer);
    this.increaseCurrentIndex();
  }

  calculateChoicedBridge(moving) {
    if (moving !== GAME.LOWER_BRIDGE_STRING) {
      return GAME.UPPER_BRIDGE_INDEX;
    }

    return GAME.LOWER_BRIDGE_INDEX;
  }

  calculateNotChoidedBridge(moving) {
    if (moving === GAME.LOWER_BRIDGE_STRING) {
      return GAME.UPPER_BRIDGE_INDEX;
    }

    return GAME.LOWER_BRIDGE_INDEX;
  }

  checkCorrectMoving(canMove) {
    if (!canMove) {
      return GAME.WRONG_MOVING;
    }

    return GAME.CORRECT_MOVING;
  }

  updateBridgeState(choicedBridge, notChoicedBridge, answer) {
    this.#bridgeState[choicedBridge].push(answer);
    this.#bridgeState[notChoicedBridge].push(GAME.NOT_CHOICED);
  }

  restart() {
    this.#bridgeState = [[], []];
    this.#currentIndex = 0;
    this.#tryingCount += 1;
  }
}

module.exports = Player;

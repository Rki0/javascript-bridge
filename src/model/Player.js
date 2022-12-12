class Player {
  #canWalkBridge;

  #movingCount;

  constructor(bridge) {
    this.#movingCount = 0;
    this.#canWalkBridge = bridge;
  }

  updateMovingCount() {
    this.#movingCount += 1;
  }

  getCurrentBridge() {
    return this.#canWalkBridge[this.#movingCount];
  }
}

module.exports = Player;

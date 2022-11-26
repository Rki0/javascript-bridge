const { GAME } = require('./constant/Constants');

const Player = {
  bridgeState: [[], []],
  movingCount: 0,

  updateBridgeState(canWalkBridge, moving) {
    this.checkMovingCorrect(canWalkBridge, moving);

    this.checkMovingWrong(canWalkBridge, moving);
  },

  checkMovingCorrect(canWalkBridge, moving) {
    if (canWalkBridge[this.movingCount] === moving) {
      this.checkLowerCorrect(moving);

      this.checkUpperCorrect(moving);
    }
  },

  checkLowerCorrect(moving) {
    if (moving === GAME.LOWER_BRIDGE_STRING) {
      this.bridgeState[0].push(GAME.CORRECT_BRIDGE);
      this.bridgeState[1].push(GAME.EMPTY_BRIDGE);
    }
  },

  checkUpperCorrect(moving) {
    if (moving === GAME.UPPER_BRIDGE_STRING) {
      this.bridgeState[0].push(GAME.EMPTY_BRIDGE);
      this.bridgeState[1].push(GAME.CORRECT_BRIDGE);
    }
  },

  checkMovingWrong(canWalkBridge, moving) {
    if (canWalkBridge[this.movingCount] !== moving) {
      this.checkLowerWrong(moving);

      this.checkUpperWrong(moving);
    }
  },

  checkLowerWrong(moving) {
    if (moving === GAME.LOWER_BRIDGE_STRING) {
      this.bridgeState[0].push(GAME.WRONG_BRIDGE);
      this.bridgeState[1].push(GAME.EMPTY_BRIDGE);
    }
  },

  checkUpperWrong(moving) {
    if (moving === GAME.UPPER_BRIDGE_STRING) {
      this.bridgeState[0].push(GAME.EMPTY_BRIDGE);
      this.bridgeState[1].push(GAME.WRONG_BRIDGE);
    }
  },

  increaseMovingCount() {
    this.movingCount += 1;
  },
};

module.exports = Player;

const { GAME, RESULT } = require('./constant/Constants');

const Result = {
  movingCount: 0,
  bridgeState: [[], []],
  tryingCount: 1,
  success: false,

  increaseMovingCount() {
    this.movingCount += 1;
  },

  resetMovingCount() {
    this.movingCount = 0;
  },

  updateBridgeState(moving, correct) {
    this.updateCorrect(moving, correct);
    this.updateWrong(moving, correct);
  },

  updateCorrect(moving, correct) {
    this.updateLowerCorrect(moving, correct);

    this.updateUpperCorrect(moving, correct);
  },

  updateLowerCorrect(moving, correct) {
    if (correct && moving === GAME.LOWER_BRIDGE_STRING) {
      this.bridgeState[0].push(RESULT.CORRECT_BRIDGE);
      this.bridgeState[1].push(RESULT.EMPTY_BRIDGE);
    }
  },

  updateUpperCorrect(moving, correct) {
    if (correct && moving === GAME.UPPER_BRIDGE_STRING) {
      this.bridgeState[1].push(RESULT.CORRECT_BRIDGE);
      this.bridgeState[0].push(RESULT.EMPTY_BRIDGE);
    }
  },

  updateWrong(moving, correct) {
    this.updateLowerWrong(moving, correct);

    this.updateUpperWrong(moving, correct);
  },

  updateLowerWrong(moving, correct) {
    if (!correct && moving === GAME.LOWER_BRIDGE_STRING) {
      this.bridgeState[0].push(RESULT.WRONG_BRIDGE);
      this.bridgeState[1].push(RESULT.EMPTY_BRIDGE);
    }
  },

  updateUpperWrong(moving, correct) {
    if (!correct && moving === GAME.UPPER_BRIDGE_STRING) {
      this.bridgeState[1].push(RESULT.WRONG_BRIDGE);
      this.bridgeState[0].push(RESULT.EMPTY_BRIDGE);
    }
  },

  checkGameSuccess(canWalkBridge) {
    if (this.movingCount === canWalkBridge.length) {
      this.success = true;
    }
  },

  restart() {
    this.movingCount = 0;
    this.bridgeState = [[], []];
    this.tryingCount += 1;
  },
};

module.exports = Result;

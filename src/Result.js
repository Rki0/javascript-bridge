const { GAME, RESULT } = require('./constant/Constants');

const Result = {
  movingCount: 1,
  bridgeState: [[], []],

  checkCorrectMoving(canWalkBridge, moving) {
    if (canWalkBridge[this.movingCount - 1] !== moving) {
      this.movingCount = 1;
      return false;
    }

    this.movingCount += 1;
    return true;
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
};

module.exports = Result;

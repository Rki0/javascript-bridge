const { ANSWER, COMMAND, PLAYER } = require("./constant/Constants");

const Player = {
  size: null,
  movingArray: [],
  bridgeStateArray: [[], []],
  playerAns: [],
  tryingCount: PLAYER.INITIAL_TRY_NUMBER,
  gameSuccess: PLAYER.GMAE_FAIL,

  updateMovingArray(moving) {
    this.movingArray.push(moving);
  },

  updateBridgeStateArray(moving, isCorrect) {
    this.calculateBridgeState(moving, isCorrect);
    this.playerAns.push(isCorrect);

    this.checkGameSuccess();
  },

  calculateBridgeState(moving, isCorrect) {
    this.checkUpperBridgeCorrect(moving, isCorrect);

    this.checkUpperBridgeWrong(moving, isCorrect);

    this.checkLowerBridgeCorrect(moving, isCorrect);

    this.checkLowerBridgeWrong(moving, isCorrect);
  },

  checkUpperBridgeCorrect(moving, isCorrect) {
    if (moving === COMMAND.UPPER_BRIDGE_STRING && isCorrect) {
      this.bridgeStateArray[0].push(ANSWER.CORRECT_ANSWER);
      this.bridgeStateArray[1].push(ANSWER.EMPTY_ANSWER);
    }
  },

  checkUpperBridgeWrong(moving, isCorrect) {
    if (moving === COMMAND.UPPER_BRIDGE_STRING && !isCorrect) {
      this.bridgeStateArray[0].push(ANSWER.WRONG_ANSWER);
      this.bridgeStateArray[1].push(ANSWER.EMPTY_ANSWER);
    }
  },

  checkLowerBridgeCorrect(moving, isCorrect) {
    if (moving === COMMAND.LOWER_BRIDGE_STRING && isCorrect) {
      this.bridgeStateArray[0].push(ANSWER.EMPTY_ANSWER);
      this.bridgeStateArray[1].push(ANSWER.CORRECT_ANSWER);
    }
  },

  checkLowerBridgeWrong(moving, isCorrect) {
    if (moving === COMMAND.LOWER_BRIDGE_STRING && !isCorrect) {
      this.bridgeStateArray[0].push(ANSWER.EMPTY_ANSWER);
      this.bridgeStateArray[1].push(ANSWER.WRONG_ANSWER);
    }
  },

  setSize(size) {
    this.size = size;
  },

  getGameSuccess() {
    return this.gameSuccess;
  },

  getMovingArray() {
    return this.movingArray;
  },

  getBridgeStateArray() {
    return this.bridgeStateArray;
  },

  getTryingCount() {
    return this.tryingCount;
  },

  checkGameSuccess() {
    if (
      this.playerAns.length === this.size &&
      !this.playerAns.includes(false)
    ) {
      this.gameSuccess = PLAYER.GAME_SUCCESS;
    }
  },

  reset() {
    this.bridgeStateArray = [[], []];
    this.movingArray = [];
    this.playerAns = [];
    this.tryingCount += PLAYER.INCREASE_TRY_NUMBER;
  },
};

module.exports = Player;

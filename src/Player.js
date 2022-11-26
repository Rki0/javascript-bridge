const { GAME } = require('./constant/Constants');

const Player = {
  bridgeState: [[], []],
  movingCount: 0,

  updateBridgeState(canWalkBridge, moving) {
    this.checkMovingCorrect(canWalkBridge, moving);

    this.checkMovingWrong(canWalkBridge, moving);
  },

  checkMovingCorrect(canWalkBridge, moving) {
    if (canWalkBridge[movingCount] === moving) {
      if (moving === GAME.LOWER_BRIDGE_STRING) {
        this.bridgeState[0].push(GAME.CORRECT_BRIDGE);
        this.bridgeState[1].push(GAME.EMPTY_BRIDGE);
      }

      if (moving === GAME.UPPER_BRIDGE_STRING) {
        this.bridgeState[0].push(GAME.EMPTY_BRIDGE);
        this.bridgeState[1].push(GAME.CORRECT_BRIDGE);
      }
    }
  },

  checkMovingWrong(canWalkBridge, moving) {
    if (canWalkBridge[Player.movingCount] !== moving) {
      if (moving === GAME.LOWER_BRIDGE_STRING) {
        this.bridgeState[0].push(GAME.WRONG_BRIDGE);
        this.bridgeState[1].push(GAME.EMPTY_BRIDGE);
      }

      if (moving === GAME.UPPER_BRIDGE_STRING) {
        this.bridgeState[0].push(GAME.EMPTY_BRIDGE);
        this.bridgeState[1].push(GAME.WRONG_BRIDGE);
      }
    }
  },
};

module.exports = Player;

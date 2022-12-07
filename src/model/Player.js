const { GAME } = require('../constant/Constants');

const Player = {
  currentIndex: 0,
  bridgeState: [[], []],

  getCurrentIndex() {
    return this.currentIndex;
  },

  increaseCurrentIndex() {
    this.currentIndex += 1;
  },

  calculateProperty(moving, canMove) {
    const choicedBridge = this.calculateChoicedBridge(moving);
    const notChoicedBridge = this.calculateNotChoidedBridge(moving);
    const answer = this.checkCorrectMoving(canMove);

    this.updateBridgeState(choicedBridge, notChoicedBridge, answer);
  },

  calculateChoicedBridge(moving) {
    if (moving !== GAME.LOWER_BRIDGE_STRING) {
      return GAME.UPPER_BRIDGE_INDEX;
    }

    return GAME.LOWER_BRIDGE_INDEX;
  },

  calculateNotChoidedBridge(moving) {
    if (moving === GAME.LOWER_BRIDGE_STRING) {
      return GAME.UPPER_BRIDGE_INDEX;
    }

    return GAME.LOWER_BRIDGE_INDEX;
  },

  checkCorrectMoving(canMove) {
    if (!canMove) {
      return GAME.WRONG_MOVING;
    }

    return GAME.CORRECT_MOVING;
  },

  updateBridgeState(choicedBridge, notChoicedBridge, answer) {
    this.bridgeState[choicedBridge].push(answer);
    this.bridgeState[notChoicedBridge].push(GAME.NOT_CHOICED);
  },
};

module.exports = Player;

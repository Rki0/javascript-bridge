const Result = {
  movingCount: 0,

  checkCorrectMoving(canWalkBridge, moving) {
    if (canWalkBridge[this.movingCount] !== moving) {
      return false;
    }

    return true;
  },
};

module.exports = Result;

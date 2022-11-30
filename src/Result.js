const Result = {
  movingCount: 0,

  checkCorrectMoving(canWalkBridge, moving) {
    if (canWalkBridge[this.movingCount] !== moving) {
      this.movingCount = 0;
      return false;
    }

    this.movingCount += 1;
    return true;
  },
};

module.exports = Result;

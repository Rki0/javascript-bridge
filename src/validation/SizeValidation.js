const SizeError = require('../error/SizeError');
const { ERROR, GAME } = require('../constant/Constants');

const SizeValidation = {
  validateSize(size) {
    this.checkOnlyNumber(size);
    this.checkStartWithZero(size);
    this.checkRange(size);
  },

  checkOnlyNumber(size) {
    const regex = /^\d+$/g;

    if (!regex.test(size)) {
      throw new SizeError(ERROR.NOT_ONLY_NUMBER);
    }
  },

  checkStartWithZero(size) {
    if (size[0] === GAME.STRING_ZERO) {
      throw new SizeError(ERROR.DONT_START_WITH_ZERO);
    }
  },

  checkRange(size) {
    const bridgeSize = Number(size);

    if (bridgeSize < GAME.MINIMUM_RANGE || bridgeSize > GAME.MAXIMUM_RANGE) {
      throw new SizeError(ERROR.OUT_OF_RANGE);
    }
  },
};

module.exports = SizeValidation;

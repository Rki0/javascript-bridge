const SizeError = require('../error/SizeError');
const { ERROR, GAME } = require('../constant/Constants');

const SizeValidation = {
  validateSize(sizeInput) {
    this.checkOnlyNumber(sizeInput);
    this.checkStartWithZero(sizeInput);
    this.checkRange(Number(sizeInput));
  },

  checkOnlyNumber(sizeInput) {
    const regex = /^\d+$/g;

    if (!regex.test(sizeInput)) {
      throw new SizeError(ERROR.NOT_ONLY_NUMBER);
    }
  },

  checkStartWithZero(sizeInput) {
    if (sizeInput[0] === GAME.STRING_ZERO) {
      throw new SizeError(ERROR.DONT_START_WITH_ZERO);
    }
  },

  checkRange(sizeInput) {
    if (sizeInput < GAME.MINIMUM_RANGE || sizeInput > GAME.MAXIMUM_RANGE) {
      throw new SizeError(ERROR.OUT_OF_RANGE);
    }
  },
};

module.exports = SizeValidation;

const SizeError = require('../error/SizeError');
const { ERROR, GAME } = require('../constant/Constants');

const SizeValidation = {
  validateSizeInput(sizeInput) {
    this.checkOnlyNumber(sizeInput);
    this.checkStartWithZero(sizeInput);
    this.checkRange(sizeInput);
  },

  checkOnlyNumber(sizeInput) {
    const regex = /^\d+$/g;

    if (!regex.test(sizeInput)) {
      throw new SizeError(ERROR.NOT_ONLY_NUMBER);
    }
  },

  checkStartWithZero(sizeInput) {
    if (sizeInput[0] === GAME.STRING_ZERO) {
      throw new SizeError(ERROR.DONT_START_ZERO);
    }
  },

  checkRange(sizeInput) {
    const size = Number(sizeInput);

    if (size < GAME.MINIMUM_RANGE || size > GAME.MAXIMUM_RANGE) {
      throw new SizeError(ERROR.OUT_OF_RANGE);
    }
  },
};

module.exports = SizeValidation;

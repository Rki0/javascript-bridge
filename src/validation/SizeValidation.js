const SizeError = require('../error/SizeError');
const { ERROR, GAME } = require('../constant/Constants');

class SizeValidation {
  #size;

  constructor(size) {
    this.#size = size;
  }

  checkError() {
    this.checkRange();
    this.checkStartWithZero();
    this.checkOnlyNumber();
  }

  checkRange() {
    const sizeNumber = Number(this.#size);

    if (sizeNumber < GAME.MINIMUM_RANGE || sizeNumber > GAME.MAXIMUM_RANGE) {
      throw new SizeError(ERROR.OUT_OF_RANGE);
    }
  }

  checkStartWithZero() {
    if (this.#size[0] === GAME.STRING_ZERO) {
      throw new SizeError(ERROR.START_WITH_ZERO);
    }
  }

  checkOnlyNumber() {
    const regex = /^\d+$/g;

    if (!regex.test(this.#size)) {
      throw new SizeError(ERROR.NOT_ONLY_NUMBER);
    }
  }
}

module.exports = SizeValidation;

const { ERROR, GAME } = require('../constant/Constants');

class SizeError {
  #size;

  constructor(size) {
    this.#size = size;
  }

  checkOnlyNumber() {
    const regex = /^\d+$/g;

    if (!regex.test(this.#size)) {
      throw new Error(ERROR.ERROR_NOT_ONLY_NUMBER);
    }
  }

  checkNumberRange() {
    const sizeTypeofNumber = Number(this.#size);

    if (
      sizeTypeofNumber < GAME.MINIMUM_RANGE_OF_SIZE ||
      sizeTypeofNumber > GAME.MAXIMUM_RANGE_OF_SIZE
    ) {
      throw new Error(ERROR.ERROR_OUT_OF_RANGE);
    }
  }

  checkStartWithZero() {
    if (this.#size[0] === GAME.STARTING_STRING_OF_NUMBER) {
      throw new Error(ERROR.ERROR_START_WITH_ZERO);
    }
  }
}

module.exports = SizeError;

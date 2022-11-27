const { ERROR, GAME } = require('../constant/Constants');

class MovingError {
  #moving;

  constructor(moving) {
    this.#moving = moving;
  }

  checkUorD() {
    if (
      this.#moving !== GAME.LOWER_BRIDGE_STRING
      && this.#moving !== GAME.UPPER_BRIDGE_STRING
    ) {
      throw new Error(ERROR.ERROR_NOT_U_OR_D);
    }
  }
}

module.exports = MovingError;

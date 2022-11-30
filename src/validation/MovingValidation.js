const MovingError = require('../error/MovingError');
const { ERROR, GAME } = require('../constant/Constants');

class MovingValidation {
  #moving;

  constructor(moving) {
    this.#moving = moving;
  }

  checkError() {
    this.checkCommand();
  }

  checkCommand() {
    if (
      this.#moving !== GAME.LOWER_BRIDGE_STRING
      && this.#moving !== GAME.UPPER_BRIDGE_STRING
    ) {
      throw new MovingError(ERROR.NOT_U_OR_D);
    }
  }
}

module.exports = MovingValidation;

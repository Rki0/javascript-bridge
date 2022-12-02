const MovingError = require('../error/MovingError');
const { GAME, ERROR } = require('../constant/Constants');

const MovingValidation = {
  validateMoving(moving) {
    if (
      moving !== GAME.LOWER_BRIDGE_STRING
      || moving !== GAME.UPPER_BRIDGE_STRING
    ) {
      throw new MovingError(ERROR.NOT_VALID_MOVING);
    }
  },
};

module.exports = MovingValidation;

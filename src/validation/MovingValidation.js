const MovingError = require('../error/MovingError');

class MovingValidation {
	#moving;

	constructor(moving) {
		this.#moving = moving;
	}

	validateMoving() {
		const movingError = new MovingError();
		movingError.checkUorD();
	}
}

module.exports = MovingValidation;

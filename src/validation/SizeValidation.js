const SizeError = require('../error/SizeError');

class SizeValidation {
	#size;

	constructor(size) {
		this.#size = size;
	}

	validateSize() {
		const sizeError = new SizeError(this.#size);
		sizeError.checkOnlyNumber();
		sizeError.checkNumberRange();
	}
}

module.exports = SizeValidation;

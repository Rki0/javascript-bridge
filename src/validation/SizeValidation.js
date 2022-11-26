const SizeError = require('../error/SizeError');

class SizeValidation {
	#size;

	constructor(size) {
		this.#size = size;
	}

	validateSize() {
		const sizeError = new SizeError(this.#size);
		sizeError.checkOnlyNumber();
	}
}

module.exports = SizeValidation;

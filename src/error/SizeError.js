const { ERROR } = require('../constant/Constants');

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
}

module.exports = SizeError;

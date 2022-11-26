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

	checkNumberRange() {
		const sizeTypeofNumber = Number(this.#size);

		if (sizeTypeofNumber < 3 || sizeTypeofNumber > 20) {
			throw new Error(ERROR.ERROR_OUT_OF_RANGE);
		}
	}
}

module.exports = SizeError;

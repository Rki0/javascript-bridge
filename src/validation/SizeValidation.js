const SizeError = require('../error/SizeError');
const { ERROR } = require('../constant/Constants');

const SizeValidation = {
  validateSize(size) {
    this.checkOnlyNumber(size);
  },

  checkOnlyNumber(size) {
    const regex = /^\d+$/g;

    if (!regex.test(size)) {
      throw new SizeError(ERROR.NOT_ONLY_NUMBER);
    }
  },
};

module.exports = SizeValidation;

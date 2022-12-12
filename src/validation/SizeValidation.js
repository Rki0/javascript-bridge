const SizeError = require('../error/SizeError');
const { ERROR } = require('../constant/Constants');

const SizeValidation = {
  validateSize(sizeInput) {
    this.checkOnlyNumber(sizeInput);
  },

  checkOnlyNumber(sizeInput) {
    const regex = /^\d+$/g;

    if (!regex.test(sizeInput)) {
      throw new SizeError(ERROR.NOT_ONLY_NUMBER);
    }
  },
};

module.exports = SizeValidation;

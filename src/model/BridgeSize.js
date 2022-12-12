const SizeValidation = require('../validation/SizeValidation');

class BridgeSize {
  #size;

  constructor(sizeInput) {
    SizeValidation.validateSize(sizeInput);
    this.#size = Number(sizeInput);
  }
}

module.exports = BridgeSize;

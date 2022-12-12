const SizeValidation = require('../validation/SizeValidation');

class BridgeSize {
  #size;

  constructor(sizeInput) {
    SizeValidation.validateSize(sizeInput);
    this.#size = sizeInput;
  }

  getBridgeSize() {
    return Number(this.#size);
  }
}

module.exports = BridgeSize;

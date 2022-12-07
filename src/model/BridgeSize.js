const SizeValidation = require('../validation/SizeValidation');

class BridgeSize {
  #size;

  constructor(size) {
    SizeValidation.validateSize(size);
    this.#size = size;
  }
}

module.exports = BridgeSize;

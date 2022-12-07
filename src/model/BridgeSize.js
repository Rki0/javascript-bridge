const SizeValidation = require('../validation/SizeValidation');

class BridgeSize {
  #size;

  constructor(size) {
    SizeValidation.validateSize(size);
    this.#size = size;
  }

  getBridgeSize() {
    return Number(this.#size);
  }
}

module.exports = BridgeSize;

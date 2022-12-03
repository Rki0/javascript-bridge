const ValidationError = require('./ValidationError');

class SizeError extends ValidationError {
  constructor(message) {
    super(message);
    this.name = 'SizeError';
  }
}

module.exports = SizeError;

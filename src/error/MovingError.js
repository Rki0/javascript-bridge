const ValidationError = require('./ValidationError');

class MovingError extends ValidationError {
  constructor(message) {
    super(message);
    this.name = 'MovingError';
  }
}

module.exports = MovingError;

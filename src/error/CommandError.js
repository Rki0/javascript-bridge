const ValidationError = require('./ValidationError');

class CommandError extends ValidationError {
  constructor(message) {
    super(message);
    this.name = 'CommandError';
  }
}

module.exports = CommandError;

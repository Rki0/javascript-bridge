const CommandError = require('../error/CommandError');

class CommandValidation {
  #command;

  constructor(command) {
    this.#command = command;
  }

  validateCommand() {
    const commandError = new CommandError(this.#command);
    commandError.checkOnlyRorQ();
  }
}

module.exports = CommandValidation;

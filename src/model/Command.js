const CommandValidation = require('../validation/CommandValidation');

class Command {
  #command;

  constructor(commandInput) {
    CommandValidation.validateCommand(commandInput);
    this.#command = commandInput;
  }
}

module.exports = Command;

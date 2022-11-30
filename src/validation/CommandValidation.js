const CommandError = require('../error/CommandError');
const { ERROR, GAME } = require('../constant/Constants');

class CommandValidation {
  #command;

  constructor(command) {
    this.#command = command;
  }

  checkError() {
    this.checkCommand();
  }

  checkCommand() {
    if (
      this.#command !== GAME.RESTART_COMMAND
      && this.#command !== GAME.QUIT_COMMAND
    ) {
      throw new CommandError(ERROR.NOT_R_OR_Q);
    }
  }
}

module.exports = CommandValidation;

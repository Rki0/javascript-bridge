const { ERROR, GAME } = require('../constant/Constants');

class CommandError {
  #command;

  constructor(command) {
    this.#command = command;
  }

  checkOnlyRorQ() {
    if (
      this.#command !== GAME.RESTART_COMMAND
      && this.#command !== GAME.QUIT_COMMAND
    ) {
      throw new Error(ERROR.ERROR_NOT_R_OR_Q);
    }
  }
}

module.exports = CommandError;

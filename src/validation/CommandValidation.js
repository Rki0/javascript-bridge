const CommandError = require('../error/CommandError');
const { GAME, ERROR } = require('../constant/Constants');

const CommandValidation = {
  validateCommand(command) {
    if (command !== GAME.RESTART_COMMND && command !== GAME.QUIT_COMMAND) {
      throw new CommandError(ERROR.NOT_VALID_COMMAND);
    }
  },
};

module.exports = CommandValidation;

const GAME = Object.freeze({
  STRING_ZERO: '0',
  MINIMUM_RANGE: 3,
  MAXIMUM_RANGE: 20,
  LOWER_BRIDGE_STRING: 'D',
  UPPER_BRIDGE_STRING: 'U',
  LOWER_BRIDGE_INDEX: 0,
  UPPER_BRIDGE_INDEX: 1,
  CORRECT_MOVING: ' O ',
  WRONG_MOVING: ' X ',
  NOT_CHOICED: '   ',
  BRIDGE_SEPARATOR: '|',
  RESTART_COMMND: 'R',
  QUIT_COMMAND: 'Q',
});

const MESSAGE = Object.freeze({
  NOTIFY_START: '다리 건너기 게임을 시작합니다.\n',
  ASK_BRIDGE_LENGTH: '다리의 길이를 입력해주세요.\n',
  ASK_WHERE_WANT_TO_GO: `이동할 칸을 선택해주세요. (위: ${GAME.UPPER_BRIDGE_STRING}, 아래: ${GAME.LOWER_BRIDGE_STRING})\n`,
  BRIDGE_STATE: (bridge) => `[${bridge.join(GAME.BRIDGE_SEPARATOR)}]`,
  ASK_RESTART: `게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${GAME.RESTART_COMMND}, 종료: ${GAME.QUIT_COMMAND})\n`,
});

const ERROR = Object.freeze({
  NOT_ONLY_NUMBER: '[ERROR] 숫자만 입력할 수 있습니다.\n',
  DONT_START_WITH_ZERO: `[ERROR] ${GAME.STRING_ZERO}으로 시작하는 값은 입력할 수 없습니다.\n`,
  OUT_OF_RANGE: `[ERROR] 다리 길이는 ${GAME.MINIMUM_RANGE}부터 ${GAME.MAXIMUM_RANGE} 사이의 숫자여야 합니다.\n`,
  NOT_VALID_MOVING: `[ERROR] ${GAME.LOWER_BRIDGE_STRING} 혹은 ${GAME.UPPER_BRIDGE_STRING}만 입력할 수 있습니다.\n`,
  NOT_VALID_COMMAND: `[ERROR] ${GAME.RESTART_COMMND} 혹은 ${GAME.QUIT_COMMAND}만 입력할 수 있습니다.\n`,
});

module.exports = { MESSAGE, ERROR, GAME };

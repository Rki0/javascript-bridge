const GAME = Object.freeze({
  STRING_ZERO: '0',
  MINIMUM_RANGE: 3,
  MAXIMUM_RANGE: 20,
  LOWER_BRIDGE_NUMBER: 0,
  UPPER_BRIDGE_NUMBER: 1,
  LOWER_BRIDGE_STRING: 'D',
  UPPER_BRIDGE_STRING: 'U',
  RESTART_COMMAND: 'R',
  QUIT_COMMAND: 'Q',
});

const RESULT = Object.freeze({
  CORRECT_MOVING: ' O ',
  WRONG_MOVING: ' X ',
  NOT_CHOICED: '   ',
  SEPARATOR: '|',
});

const MESSAGE = Object.freeze({
  NOTIFY_START: '다리 건너기 게임을 시작합니다.\n',
  ASK_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  ASK_MOVING: `이동할 칸을 선택해주세요. (위: ${GAME.UPPER_BRIDGE_STRING}, 아래: ${GAME.LOWER_BRIDGE_STRING})\n`,
  SHOW_BRIDGE: (state) => `[${state.join(RESULT.SEPARATOR)}]`,
  ASK_RESTART_OR_QUIT: `게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${GAME.RESTART_COMMAND}, 종료: ${GAME.QUIT_COMMAND})\n`,
  NOTIFY_RESULT: '최종 게임 결과\n',
  SHOW_SUCCESS: (success) => `게임 성공 여부: ${success ? '성공' : '실패'}`,
  SHOW_TRYING_COUNT: (count) => `총 시도한 횟수: ${count}`,
});

const ERROR = Object.freeze({
  NOT_ONLY_NUMBER: '[ERROR] 숫자만 입력 가능합니다.\n',
  DONT_START_ZERO: `[ERROR] ${GAME.STRING_ZERO}으로 시작하는 숫자는 입력할 수 없습니다.\n`,
  OUT_OF_RANGE: `[ERROR] 다리 길이는 ${GAME.MINIMUM_RANGE}부터 ${GAME.MAXIMUM_RANGE} 사이의 숫자여야 합니다.\n`,
  NOT_VALID_MOVING: `[ERROR] ${GAME.LOWER_BRIDGE_STRING} 혹은 ${GAME.UPPER_BRIDGE_STRING}만 입력할 수 있습니다.\n`,
  NOT_VALID_COMMAND: `[ERROR] ${GAME.RESTART_COMMAND} 혹은 ${GAME.QUIT_COMMAND}만 입력할 수 있습니다.\n`,
});

module.exports = { MESSAGE, ERROR, GAME, RESULT };

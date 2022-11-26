const MESSAGE = {
  NOTIFY_GAME_SATRT: '다리 건너기 게임을 시작합니다.\n',
  ASK_BRIDGE_LENGTH: '다리의 길이를 입력해주세요.\n',
  ASK_WHERE_WANT_TO_GO: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  NOTIFY_GAME_RESULT: '최종 게임 결과\n',
  ASK_RESTART_OR_QUIT:
    '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
};

const ERROR = {
  ERROR_NOT_ONLY_NUMBER: '[ERROR] 다리 길이는 숫자만 입력할 수 있습니다.\n',
  ERROR_OUT_OF_RANGE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.\n',
  ERROR_START_WITH_ZERO: '[ERROR] 0으로 시작하는 숫자는 입력할 수 없습니다.\n',
  ERROR_NOT_U_OR_D: '[ERROR] U 혹은 D만 입력 가능합니다.\n',
  ERROR_NOT_R_OR_Q: '[ERROR] R 혹은 Q만 입력 가능합니다.\n',
};

const GAME = {
  MINIMUM_RANGE_OF_SIZE: 3,
  MAXIMUM_RANGE_OF_SIZE: 20,
  STARTING_STRING_OF_NUMBER: '0',
  LOWER_BRIDGE_STRING: 'D',
  UPPER_BRIDGE_STRING: 'U',
  CORRECT_BRIDGE: ' O ',
  WRONG_BRIDGE: ' X ',
  EMPTY_BRIDGE: '   ',
  RESTART_COMMAND: 'R',
  QUIT_COMMAND: 'Q',
};

const STATE = {
  BRIDGE_SATE: (state) => `[${state.join('|')}]`,
};

const RESULT = {
  GAME_SUCCESS_STATE: (state) => `게임 성공 여부: ${state ? '성공' : '실패'}`,
  GAME_TRYING_COUNT: (count) => `총 시도한 횟수: ${count}`,
};

module.exports = { MESSAGE, ERROR, GAME, STATE, RESULT };

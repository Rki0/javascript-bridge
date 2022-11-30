const MESSAGE = {
  NOTIFY_START: '다리 건너기 게임을 시작합니다.\n',
  ASK_BRIDGE_LENGTH: '다리의 길이를 입력해주세요.\n',
  ASK_WHERE_WANT_TO_GO: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  ASK_RESTART_OR_QUIT:
    '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  BRIDGE_STATE: (state) => `[${state.join('|')}]`,
  NOTIFY_RESULT: '최종 게임 결과',
  SUCCESS_STATE: (success) => `게임 성공 여부: ${success ? '성공' : '실패'}`,
  TRYING_STATE: (count) => `총 시도한 횟수: ${count}`,
};

const ERROR = {
  OUT_OF_RANGE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.\n',
  START_WITH_ZERO: '[ERROR] 0으로 시작하는 숫자는 입력할 수 없습니다.\n',
  NOT_ONLY_NUMBER: '[ERROR] 오직 숫자만 입력할 수 있습니다.\n',
  NOT_U_OR_D: '[ERROR] U 혹은 D만 입력할 수 있습니다.\n',
  NOT_R_OR_Q: '[ERROR] R 혹은 Q만 입력할 수 있습니다.\n',
};

const GAME = {
  MAXIMUM_RANGE: 20,
  MINIMUM_RANGE: 3,
  STRING_ZERO: '0',
  LOWER_BRIDGE_NUMBER: 0,
  UPPER_BRIDGE_NUMBER: 1,
  LOWER_BRIDGE_STRING: 'D',
  UPPER_BRIDGE_STRING: 'U',
  RESTART_COMMAND: 'R',
  QUIT_COMMAND: 'Q',
};

const RESULT = {
  CORRECT_BRIDGE: ' O ',
  WRONG_BRIDGE: ' X ',
  EMPTY_BRIDGE: '   ',
};

module.exports = { MESSAGE, ERROR, GAME, RESULT };

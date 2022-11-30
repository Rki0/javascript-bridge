const MESSAGE = {
  NOTIFY_START: '다리 건너기 게임을 시작합니다.\n',
  ASK_BRIDGE_LENGTH: '다리의 길이를 입력해주세요.\n',
};

const ERROR = {
  OUT_OF_RANGE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.\n',
  START_WITH_ZERO: '[ERROR] 0으로 시작하는 숫자는 입력할 수 없습니다.\n',
};

const GAME = {
  MAXIMUM_RANGE: 20,
  MINIMUM_RANGE: 3,
  STRING_ZERO: '0',
};

module.exports = { MESSAGE, ERROR, GAME };

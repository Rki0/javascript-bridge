const GAME = Object.freeze({
  STRING_ZERO: '0',
});

const MESSAGE = Object.freeze({
  NOTIFY_START: '다리 건너기 게임을 시작합니다.\n',
  ASK_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
});

const ERROR = Object.freeze({
  NOT_ONLY_NUMBER: '[ERROR] 숫자만 입력 가능합니다.\n',
  DONT_START_ZERO: '[ERROR] 0으로 시작하는 숫자는 입력할 수 없습니다.\n',
});

module.exports = { MESSAGE, ERROR, GAME };

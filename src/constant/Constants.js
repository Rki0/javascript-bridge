const GAME = Object.freeze({
  STRING_ZERO: '0',
});

const MESSAGE = Object.freeze({
  NOTIFY_START: '다리 건너기 게임을 시작합니다.\n',
  ASK_BRIDGE_LENGTH: '다리의 길이를 입력해주세요.\n',
});

const ERROR = Object.freeze({
  NOT_ONLY_NUMBER: '[ERROR] 숫자만 입력할 수 있습니다.',
  DONT_START_WITH_ZERO: `[ERROR] ${GAME.STRING_ZERO}으로 시작하는 값은 입력할 수 없습니다.`,
});

module.exports = { MESSAGE, ERROR, GAME };

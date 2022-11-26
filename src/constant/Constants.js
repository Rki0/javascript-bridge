const MESSAGE = {
	NOTIFY_GAME_SATRT: '다리 건너기 게임을 시작합니다.\n',
	ASK_BRIDGE_LENGTH: '다리의 길이를 입력해주세요.\n',
};

const ERROR = {
	ERROR_NOT_ONLY_NUMBER: '[ERROR] 다리 길이는 숫자만 입력할 수 있습니다.\n',
	ERROR_OUT_OF_RANGE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.\n',
	ERROR_START_WITH_ZERO: '[ERROR] 0으로 시작하는 숫자는 입력할 수 없습니다.\n',
};

const GAME = {
	MINIMUM_RANGE_OF_SIZE: 3,
	MAXIMUM_RANGE_OF_SIZE: 20,
	STARTING_STRING_OF_NUMBER: '0',
};

module.exports = { MESSAGE, ERROR, GAME };

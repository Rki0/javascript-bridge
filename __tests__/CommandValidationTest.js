const CommandValidation = require('../src/validation/CommandValidation');

describe('게임 커맨드 검증 테스트', () => {
  test('게임 커맨드는 R 혹은 Q만 입력할 수 있다.', () => {
    expect(() => {
      CommandValidation.validateCommand('A');
    }).toThrow();
  });
});

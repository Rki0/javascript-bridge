const CommandValidation = require('../src/validation/CommandValidation');

describe('커맨드 검증 테스트', () => {
  test('커맨드는 R 혹은 Q만 입력 가능하다.', () => {
    expect(() => {
      CommandValidation.validateCommand('A');
    }).toThrow();
  });
});

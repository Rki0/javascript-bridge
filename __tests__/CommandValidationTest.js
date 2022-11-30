const CommandValidation = require('../src/validation/CommandValidation');

describe('재시작, 종료 입력 테스트', () => {
  test('재시작은 R, 종료는 Q를 입력해야한다.', () => {
    expect(() => {
      const commandValidation = new CommandValidation('D');
      commandValidation.checkError();
    }).toThrow();
  });
});

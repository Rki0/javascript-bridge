const SizeValidation = require('../src/validation/SizeValidation');
const MovingValidation = require('../src/validation/MovingValidation');
const CommandValidation = require('../src/validation/CommandValidation');

describe('검증 메서드 테스트', () => {
  test.each(['5 ', '03', '2', '21'])(
    '다리 길이 입력값 검증 테스트',
    (sizeInput) => {
      expect(() => {
        SizeValidation.validateSize(sizeInput);
      }).toThrow();
    },
  );

  test('이동할 칸 입력값 검증 테스트', () => {
    expect(() => {
      MovingValidation.validateMoving('A');
    }).toThrow();
  });

  test('커맨드 입력값 검증 테스트', () => {
    expect(() => {
      CommandValidation.validateCommand('A');
    }).toThrow();
  });
});

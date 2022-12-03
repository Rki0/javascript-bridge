const MovingValidation = require('../src/validation/MovingValidation');

describe('이동할 칸 입력 검증 테스트', () => {
  test('이동할 칸은 U 혹은 D로 결정한다.', () => {
    expect(() => {
      MovingValidation.validateMoving('A');
    }).toThrow();
  });
});

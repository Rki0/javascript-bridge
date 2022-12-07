const MovingValidation = require('../src/validation/MovingValidation');

describe('이동할 칸 검증 테스트', () => {
  test('U 혹은 D만 입력할 수 있다.', () => {
    expect(() => {
      MovingValidation.validateMoving('A');
    }).toThrow();
  });
});

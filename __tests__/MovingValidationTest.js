const MovingValidation = require('../src/validation/MovingValidation');

describe('이동할 칸 입력 테스트', () => {
  test('이동할 수 있는 칸은 U와 D 뿐이다.', () => {
    expect(() => {
      const movingValidation = new MovingValidation('A');
      movingValidation.checkError();
    }).toThrow();
  });
});

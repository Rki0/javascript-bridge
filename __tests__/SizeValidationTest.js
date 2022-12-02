const SizeValidation = require('../src/validation/SizeValidation');

describe('다리 길이 입력값 검증 테스트', () => {
  test.each(['3.2', '05', '21', '2'])('예외 상황 처리 테스트', (sizeInput) => {
    expect(() => {
      SizeValidation.validateSizeInput(sizeInput);
    }).toThrow();
  });
});

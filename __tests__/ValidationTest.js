const SizeValidation = require('../src/validation/SizeValidation');

describe('검증 메서드 테스트', () => {
  test.each(['5 ', '03', '2', '21'])(
    '다리 길이 입력값 검증 테스트',
    (sizeInput) => {
      expect(() => {
        SizeValidation.validateSize(sizeInput);
      }).toThrow();
    },
  );
});

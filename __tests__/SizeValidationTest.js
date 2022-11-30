const SizeValidation = require('../src/validation/SizeValidation');

describe('다리 길이 검증 테스트', () => {
  test.each(['2', '21', '04', '3 '])(
    '다리 길이는 제한 조건을 만족해야한다.',
    (sizeInput) => {
      expect(() => {
        const sizeValidation = new SizeValidation(sizeInput);
        sizeValidation.checkError();
      }).toThrow();
    },
  );
});

const SizeValidation = require('../src/validation/SizeValidation');

describe('다리 길이 검증 테스트', () => {
  test.each(['3.5', '05', '2', '21'])(
    '3 이상 20 이하의 숫자만 사용할 수 있다. 0으로 시작해서도 안된다.',
    (size) => {
      expect(() => {
        SizeValidation.validateSize(size);
      }).toThrow();
    },
  );
});

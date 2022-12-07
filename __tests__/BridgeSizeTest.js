const BridgeSize = require('../src/model/BridgeSize');

describe('다리 길이 모델 테스트', () => {
  test('다리 길이 getter 구현', () => {
    const bridgeSize = new BridgeSize('3');
    const size = bridgeSize.getBridgeSize();
    expect(size).toBe(3);
  });
});

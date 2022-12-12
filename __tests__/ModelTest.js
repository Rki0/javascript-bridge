const BridgeSize = require('../src/model/BridgeSize');

describe('모델 테스트', () => {
  test('다리 길이 모델 테스트', () => {
    const bridgeSize = new BridgeSize('3');
    const size = bridgeSize.getBridgeSize();
    expect(size).toBe(3);
  });
});

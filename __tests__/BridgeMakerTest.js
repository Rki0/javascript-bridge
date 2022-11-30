const BridgeMaker = require('../src/BridgeMaker');
const generator = require('../src/BridgeRandomNumberGenerator').generate;

describe('건널 수 있는 다리 생성 테스트', () => {
  test('입력된 다리 길이만큼의 칸을 가진 다리를 생성한다.', () => {
    const bridge = BridgeMaker.makeBridge(3, generator);
    expect(bridge.length).toBe(3);
  });
});

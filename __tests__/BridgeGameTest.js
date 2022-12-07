const BridgeGame = require('../src/model/BridgeGame');

describe('게임 진행 테스트', () => {
  test('이동할 칸 테스트', () => {
    expect(() => {
      const bridgeGame = new BridgeGame();
      bridgeGame.move(['U', 'D', 'D'], 0, 'U');
    }).toBeTruthy();
  });

  test('재시작 테스트', () => {
    const bridgeGame = new BridgeGame();
    const isRestart = bridgeGame.retry('R');

    expect(isRestart).toBeTruthy();
  });

  test('종료 테스트', () => {
    const bridgeGame = new BridgeGame();
    const isRestart = bridgeGame.retry('Q');

    expect(isRestart).toBeFalsy();
  });
});

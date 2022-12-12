const BridgeSize = require('../src/model/BridgeSize');
const BridgeGame = require('../src/model/BridgeGame');
const Player = require('../src/model/Player');

describe('모델 테스트', () => {
  test('다리 길이 모델 테스트', () => {
    const bridgeSize = new BridgeSize('3');
    const size = bridgeSize.getBridgeSize();
    expect(size).toBe(3);
  });

  test('게임 진행 모델 테스트', () => {
    const bridgeGame = new BridgeGame();

    expect(bridgeGame.move('U', 'U')).toBeTruthy();

    expect(bridgeGame.move('U', 'D')).toBeFalsy();

    expect(bridgeGame.retry('R')).toBeTruthy();

    expect(bridgeGame.retry('Q')).toBeFalsy();
  });

  test('사용자 모델 테스트', () => {
    const player = new Player(['U', 'D', 'D']);
    player.updateBridgeState('U', true);

    expect(player.getCurrentBridge()).toBe('U');
    expect(player.getBridgeState()).toStrictEqual(['   ', ' O ']);
    expect(player.getGameSuccess()).toBeFalsy();
    expect(player.getTryingCount()).toBe(1);
  });
});

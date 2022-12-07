const Player = require('../src/model/Player');

describe('플레이어 모델 테스트', () => {
  test('다리 상태 업데이트 테스트', () => {
    const player = new Player();
    player.calculateProperty('U', true);

    expect(player.getBridgeState()).toStrictEqual([['   '], [' O ']]);
    expect(player.getCurrentIndex()).toBe(1);
  });

  test('재시작 시 플레이어 모델 상태 테스트', () => {
    const player = new Player();
    player.calculateProperty('U', true);
    player.restart();

    expect(player.getBridgeState()).toStrictEqual([[], []]);
    expect(player.getCurrentIndex()).toBe(0);
    expect(player.getTryingCount()).toBe(2);
  });
});

const Player = require('../src/model/Player');

describe('사용자 정보 테스트', () => {
  test('현재 다리 상태 업데이트', () => {
    const player = new Player();
    player.updateBridgeState('U', true);

    expect(player.getBridgeState()).toStrictEqual([['   '], [' O ']]);
  });

  test('건넌 칸이 맞는 칸이면 다음 칸을 준비한다.', () => {
    const player = new Player();
    player.updateCurrentBridge();

    expect(player.getCurrentBridge()).toBe(2);
  });

  test('게임이 완전히 성공한 경우.', () => {
    const player = new Player();
    player.updateGameSuccess();

    expect(player.getGameSuccess()).toBeTruthy();
  });

  test('게임을 재시작하는 경우', () => {
    const player = new Player();
    player.updateBridgeState('U', true);
    player.updateCurrentBridge();
    player.resetState();

    expect(player.getBridgeState()).toStrictEqual([[], []]);
    expect(player.getCurrentBridge()).toBe(1);
    expect(player.getTryingCount()).toBe(2);
  });
});

const BridgeGame = require('../src/BridgeGame');

describe('다리 게임 운영 테스트', () => {
  const canWalkBridge = ['U', 'D', 'U'];

  test.each([
    [canWalkBridge, 'U', 0],
    [canWalkBridge, 'D', 1],
  ])('플레이어가 이동할 칸이 옳은지 판별한다.', (can, moving, count) => {
    expect(BridgeGame.move(can, moving, count)).toBeTruthy();
  });

  test('플레이어가 이동할 칸이 틀렸는지 판별한다.', () => {
    expect(BridgeGame.move(canWalkBridge, 'D', 2)).toBeFalsy();
  });

  test('재시작을 입력받으면 참이다.', () => {
    expect(BridgeGame.retry('R')).toBeTruthy();
  });

  test('종료를 입력받으면 참이다.', () => {
    expect(BridgeGame.retry('Q')).toBeFalsy();
  });
});

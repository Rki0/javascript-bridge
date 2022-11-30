const Player = require('../src/Player');

describe('플레이어 상태 테스트', () => {
  const result = [
    [['   '], [' O ']],
    [
      ['   ', ' O '],
      [' O ', '   '],
    ],
    [
      ['   ', ' O ', '   '],
      [' O ', '   ', ' O '],
    ],
  ];

  test.each([
    ['U', true, 0],
    ['D', true, 1],
    ['U', true, 2],
  ])('전부 맞는 칸을 갔을 때', (moving, correct, index) => {
    Player.updateBridgeState(moving, correct);
    expect(Player.bridgeState).toStrictEqual(result[index]);
  });

  test('이동한 횟수가 생성된 다리 길이와 같으면 게임 성공이다.', () => {
    Player.movingCount = 3;
    Player.checkGameSuccess(['U', 'D', 'U']);

    expect(Player.success).toBe(true);
  });

  test('재시작을 입력하면 시도 횟수는 증가하고, 움직인 횟수와 다리 상태는 초기화된다.', () => {
    Player.restart();
    expect(Player.movingCount).toBe(0);
    expect(Player.bridgeState).toStrictEqual([[], []]);
    expect(Player.tryingCount).toBe(2);
  });
});

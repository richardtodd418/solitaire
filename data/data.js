const userData = [
  {
    name: "Julie",
    times: ["00:06:47", "00:53:49", "00:08:21", "00:55:25", "00:09:05"],
    positions: [1, 3, 2, 1, 2],
    fastestSolves: 1
  },
  {
    name: "Jeremy",
    times: ["00:08:53", "00:20:38", "00:14:00", "00:09:45", "01:10:53"],
    positions: [3, 1, 3, 2, 3],
    fastestSolves: 1
  },
  {
    name: "Richard",
    times: ["00:08:24", "00:31:16", "00:07:50", "01:11:03", "00:08:37"],
    positions: [2, 2, 1, 3, 1],
    fastestSolves: 3
  }
];

const bonusData = [
  { spider: ["Richard", "00:00:40"] },
  { klondike: ["Julie", "00:01:09"] },
  { pyramid: ["Jeremy", "00:00:58"] },
  { tripeaks: ["Richard", "00:00:27"] },
  { freecell: ["Richard", "00:00:02"] }
];

const points = {
  1: 10,
  2: 6,
  3: 4,
  4: 3,
  5: 2,
  6: 1
};

export { userData, bonusData, points };

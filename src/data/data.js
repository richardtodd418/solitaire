const userData = [
  {
    name: "Richard",
    times: [
      "00:08:24", 
      "00:31:16", 
      "00:07:50", 
      "01:11:03", 
      "00:08:37",
      "00:24:33",
  ],
    positions: [
      3, 
      2, 
      1, 
      3, 
      2,
      1,
    ],
    fastestSolves: 4
  },
  {
    name: "Julie",
    times: [
      "00:06:47", 
      "00:53:49",
      "00:08:21",
      "00:55:25",
      "00:09:05", 
      "00:30:35"
    ],
    positions: [
      1,
      3, 
      2, 
      1, 
      3, 
      4,
    ],
    fastestSolves: 0
  },  
  {
    name: "Jason",
    times: [
      "00:06:53",
      "01:21:16",
      "00:10:38",
      "01:21:47",
      "00:08:02",
      "00:29:46",
    ],
    positions: [
      2, 
      3, 
      1, 
      3,
    ],
    fastestSolves: 0
  },
  {
    name: "Jeremy",
    times: [
      "00:08:53", 
      "00:20:38", 
      "00:14:00", 
      "00:09:45", 
      "01:10:53",
      "00:28:27",
    ],
    positions: [
      4, 
      1, 
      4, 
      2, 
      4,
      2,
    ],
    fastestSolves: 1
  },
];

const bonusData = [
  { spider: ["Richard", "00:00:40"] },
  { klondike: ["Richard", "00:00:21"] },
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

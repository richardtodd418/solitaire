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
      "01:04:05",
      "00:16:50",
      "01:07:12",
      "00:10:50",
      "00:13:13",
      "00:20:33",
      "00:07:25",
      "00:19:38",
      "00:50:00",
      "00:42:21",
      "00:24:08",
      "00:04:19",
      "00:29:21",
      "00:25:24",
      "00:27:25",    
      "00:33:34",
      "01:09:13",
      "00:02:36",
  ],
    positions: [
      3,
      2,
      1,
      3,
      2,
      1,
      4,
      1,
      3,
      3,
      2,
      4,
      3,
      3,
      3,
      4,
      2,
      3,
      2,
      4,
      2,
      4,
      1,
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
      "00:30:35",
      "00:44:44",
      "00:21:22",
      "01:14:54",
      "00:10:35",
      "00:22:49",
      "00:17:34",
      "00:08:28",
      "00:14:22",
      "01:04:26",
      "00:25:47",
      "00:22:09",
      "00:03:51",
      "00:40:06",
      "00:16:40",
      "00:28:33",
      "00:25:33",
      "01:55:26",      
      "00:03:19",
    ],
    positions: [
      1,
      3,
      2,
      1,
      3,
      4,
      3,
      4,
      4,
      2,
      4,
      2,
      4,
      1,
      4,
      3,
      1,
      2,
      3,
      2,
      3,
      3,
      4,
      4,
    ],
    fastestSolves: 1
  },  
  {
    name: "Jason",
    times: [
      "00:06:53",
      "01:21:16",
      "00:10:38",
      "01:47:17",
      "00:08:02",
      "00:29:46",
      "00:42:38",
      "00:17:29",
      "00:53:02",
      "00:09:19",
      "00:17:18",
      "00:15:26",
      "00:05:30",
      "00:24:07",
      "00:46:58",
      "00:19:11",
      "00:26:43",
      "00:03:17",
      "00:19:54",
      "00:11:38",
      "00:22:35",
      "00:21:49",
      "01:13:04",
      "00:02:42",
    ],
    positions: [
      2,
      3,
      1,
      3,
      2,
      2,
      1,
      1,
      3,
      1,
      1,
      4,
      2,
      1,
      4,
      1,
      1,
      1,
      1,
      2,
      3,
      2,
    ],
    fastestSolves: 1
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
      "00:27:12",
      "00:19:06",
      "01:02:30",
      "00:11:15",
      "00:11:01",
      "00:18:40",
      "00:06:00",
      "00:15:38",
      "00:36:09",
      "00:25:09",
      "00:24:40",
      "00:04:49",
      "00:44:31",
      "00:17:45",
      "00:29:44",
      "00:18:26",
      "01:10:20",
      "00:03:02",
    ],
    positions: [
      4,
      1,
      4,
      2,
      4,
      2,
      1,
      3,
      2,
      4,
      1,
      3,
      2,
      2,
      1,
      2,
      3,
      4,
      4,
      3,
      4,
      1,
      2,
      3,
    ],
    fastestSolves: 0
  },
];

const bonusData = [
  { spider: ["Julie", "00:00:39"] },
  { klondike: ["Richard", "00:00:11"] },
  { pyramid: ["Richard/Jason", "00:00:29"] },
  { tripeaks: ["Richard", "00:00:09"] },
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

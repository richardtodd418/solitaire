import React, { useCallback, useState } from "react";
import { DataTable } from "@shopify/polaris";

import { timeInSeconds, timeStringFromSeconds } from "../helpers/helpers";

const PointsTable = (props) => {
  const { data, points, sort } = props;
  const [sortedRows, setSortedRows] = useState(null);

  const getPositions = (positionArrays) => {
    return positionArrays.reduce((obj, b) => {
      obj[b] = ++obj[b] || 1;
      return obj;
    }, {});
  };

  const getTotalTime = (timeStringArray) => {
    const totalSeconds = timeStringArray.reduce(
      (a, b) => a + timeInSeconds(b),
      0
    );
    return timeStringFromSeconds(totalSeconds);
  };

  const getPoints = (positions) => {
    const totalPoints = Object.entries(positions).reduce(
      (a, b) => a + points[b[0]] * b[1],
      0
    );
    return totalPoints;
  };

  const generateRows = (users) => {
    const rows = users.map((user) => {
      const { name, positions, times } = user;
      const positionsArray = getPositions(positions);
      const totalTime = getTotalTime(times);
      const points = getPoints(positionsArray);
      const bonusPoints = user.fastestSolves * 3;
      const totalPoints = points + bonusPoints;
      const row = [
        name,
        positionsArray[1] == null ? 0 : positionsArray[1],
        positionsArray[2] == null ? 0 : positionsArray[2],
        positionsArray[3] == null ? 0 : positionsArray[3],
        positionsArray[4] == null ? 0 : positionsArray[4],
        totalTime,
        // points,
        totalPoints
      ];
      return row;
    });
    return rows.sort((a, b) => b[5] - a[5]);
  };

  const rows = sortedRows ? sortedRows : generateRows(data);

  const handleSort = useCallback(
    (index, direction) => {
      const time = index === 4 ? true : false;
      return setSortedRows(sort(rows, index, direction, time));
    },
    [rows, sort]
  );

  return (
    <DataTable
      columnContentTypes={[
        "text",
        "numeric",
        "numeric",
        "numeric",
        "numeric",
        "numeric",
        "numeric"
      ]}
      headings={["Name", "1", "2", "3", "4", "Time", "Total"]}
      rows={rows}
      sortable={[false, true, true, true, true, true, true]}
      defaultSortDirection="descending"
      initialSortColumnIndex={6}
      onSort={handleSort}
      hideScrollIndicator
    />
  );
};
export default PointsTable;

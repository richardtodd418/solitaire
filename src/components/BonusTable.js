import React, { useCallback, useState } from "react";
import { DataTable } from "@shopify/polaris";

import { capitalize } from "../../helpers/helpers";

const BonusTable = (props) => {
  const { data, sort } = props;
  const [sortedRows, setSortedRows] = useState(null);

  const generateRows = (rowdata) => {
    const rows = rowdata.map((row) => {
      const key = Object.keys(row)[0];
      return [capitalize(key), row[key][0], row[key][1]];
    });
    return rows;
  };

  const rows = sortedRows ? sortedRows : generateRows(data);

  const handleTableSort = useCallback(
    (index, direction) => {
      const time = index === 2 ? true : false;
      return setSortedRows(sort(rows, index, direction, time));
    },
    [rows, sort]
  );

  return (
    <DataTable
      columnContentTypes={["text", "text", "text"]}
      headings={["Game", "Name", "Time"]}
      rows={rows}
      sortable={[false, false, true]}
      defaultSortDirection="descending"
      initialSortColumnIndex={2}
      onSort={handleTableSort}
    />
  );
};
export default BonusTable;

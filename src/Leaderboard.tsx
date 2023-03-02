import { Box } from "@mantine/core";
import { DataTableSortStatus, DataTable } from "mantine-datatable";
import { useState, useEffect } from "react";
import sampleData from "./sampleData";
import { sortBy } from "lodash";

export const Leaderboard = () => {
  const { leaderboard } = sampleData;
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
    columnAccessor: "shifts",
    direction: "asc",
  });
  const [records, setRecords] = useState(sortBy(leaderboard, "shifts"));

  useEffect(() => {
    const data = sortBy(leaderboard, sortStatus.columnAccessor);
    setRecords(sortStatus.direction === "desc" ? data.reverse() : data);
  }, [sortStatus]);

  return (
    <DataTable
      withBorder
      withColumnBorders
      records={records}
      columns={[
        { accessor: "name", width: "80%", sortable: true },
        { accessor: "shifts", width: "20%", sortable: true },
      ]}
      sortStatus={sortStatus}
      onSortStatusChange={setSortStatus}
    />
  );
};

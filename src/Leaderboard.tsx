import { Text } from "@mantine/core";
import { DataTableSortStatus, DataTable } from "mantine-datatable";
import { useState, useEffect } from "react";
import sampleData from "./sampleData";
import { sortBy } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { primaryColor } from "./theme";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { BubbleWithText } from "./BubbleWithText";

export const Leaderboard = () => {
  const { leaderboard } = sampleData;
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
    columnAccessor: "rank",
    direction: "asc",
  });
  const [records, setRecords] = useState(sortBy(leaderboard, "rank"));

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
        {
          accessor: "rank",
          title: "",
          render: (item) => {
            let color = primaryColor;
            if (item.rank === 1) color = "gold";
            if (item.rank === 2) color = "grey";
            if (item.rank === 3) color = "#C4A484";

            return <BubbleWithText color={color} text={item.rank} />;
          },
        },
        { accessor: "name", width: "80%", sortable: true },
        { accessor: "company", width: "20%", sortable: true },
        { accessor: "shifts", width: "20%", sortable: true },
      ]}
      sortStatus={sortStatus}
      onSortStatusChange={setSortStatus}
    />
  );
};

import { Text } from "@mantine/core";
import { DataTableSortStatus, DataTable } from "mantine-datatable";
import { useState, useEffect } from "react";
import sampleData from "./sampleData";
import { sortBy } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { primaryColor } from "./theme";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

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
        {
          accessor: "place",
          title: "",
          render: (item) => {
            let color = primaryColor;
            if (item.place === 1) color = "gold";
            if (item.place === 2) color = "grey";
            if (item.place === 3) color = "#C4A484";

            return (
              <span className="fa-layers">
                <FontAwesomeIcon icon={faCircle} color={color} size="lg" />
                <Text className="fa-layers-text" color="white">
                  {item.place}
                </Text>
              </span>
            );
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

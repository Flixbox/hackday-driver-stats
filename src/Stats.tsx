import { Stack } from "@mantine/core";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Line,
  ComposedChart,
  ReferenceLine,
} from "recharts";
import sampleData from "./sampleData";
import { primaryColor } from "./theme";

export const Stats = () => {
  return (
    <Stack>
      <BarChart width={510} height={250} data={sampleData.shiftsPerMonth}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="shifts" fill={primaryColor} />
      </BarChart>
      <ComposedChart width={510} height={250} data={sampleData.shiftsPerMonth}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="setupTimes" fill={primaryColor} />
        <Line
          type="monotone"
          dataKey="averageSetupTime"
          stroke="#8884d8"
          strokeWidth={3}
        />
        <ReferenceLine y={10} stroke="red" />
      </ComposedChart>
    </Stack>
  );
};

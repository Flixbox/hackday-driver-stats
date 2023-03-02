import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import sampleData from "./sampleData";

export const Stats = () => {
  return (
    <BarChart width={510} height={250} data={sampleData.shiftsPerMonth}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="shifts" fill="#8884d8" />
    </BarChart>
  );
};

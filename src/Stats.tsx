import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

const generateData = () => {
  const data = [];
  const months = new Array(12).fill(0).map((_, i) => {
    return new Date(`${i + 1}/1`).toLocaleDateString(undefined, {
      month: "long",
    });
  });
  console.log(months);
  for (let i = 0; i < 12; i++) {
    data.push({
      month: months[i],
      shifts: Math.floor(Math.random() * 100),
    });
  }
  return data;
};

export const Stats = () => {
  return (
    <BarChart width={510} height={250} data={generateData()}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="shifts" fill="#8884d8" />
    </BarChart>
  );
};

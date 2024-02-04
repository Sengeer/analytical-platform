import './Chart.scss';
import {
  LineChart,
  Line, XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

function Chart({ chartValues, unit }) {
  const nextData = chartValues.filter((i) => i[unit] !== undefined);

  const data = [];

  for (let c = 0; c < nextData.length; c++) {
    const obj = {};

    obj[unit] = +nextData[c][unit];
    data.push(obj);
  }

  return (
    <ResponsiveContainer
      width="100%"
      height={200}>
      <LineChart
        width={600}
        height={200}
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 70,
          bottom: 0
        }}>
        <CartesianGrid
          strokeDasharray="3 3" />
        <XAxis
          dataKey="name" />
        <YAxis
          type="number" />
        <Tooltip />
        <Legend
          align="right"
          verticalAlign="top"
          height={20} />
        <Line
          type="monotone"
          dataKey={unit}
          stroke="var(--main-accent)"
          activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart;
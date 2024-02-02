import './Charts.scss';
import Chart from "../Chart/Chart"

function Charts({ unit, chartValues }) {
  return (
    <div
      className="charts">
      <h2
        className="charts__title">
          Графики
      </h2>
      {unit.map((item, index) => (
        <Chart
          chartValues={chartValues}
          unit={item}
          key={index} />
      ))}
    </div>
  );
}

export default Charts;

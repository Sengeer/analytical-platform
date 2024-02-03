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
      <div
        className="charts__container">
        {unit.map((item, index) => (
          <Chart
            chartValues={chartValues}
            unit={item}
            key={index} />
        ))}
      </div>
    </div>
  );
}

export default Charts;

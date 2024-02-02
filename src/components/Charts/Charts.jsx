import './Charts.scss';
import Chart from "../Chart/Chart"

function Charts({ unit, chartValues }) {
  return (
    <div
      className='charts'>
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

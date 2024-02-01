import './Charts.scss';
import Chart from "../Chart/Chart"

function Charts({
  pressure,
  temperature,
  volume
}) {
  return (
    <div
      className='charts'>
      <Chart
        data={pressure}
        unit="Па" />
      <Chart
        data={temperature}
        unit="°C" />
      <Chart
        data={volume}
        unit="м3" />
    </div>
  );
}

export default Charts;

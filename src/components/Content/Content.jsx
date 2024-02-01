import './Content.scss';
import React, { useState } from "react";
import Table from "../Table/Table";
import Charts from "../Charts/Charts"
import CSVReader from "../CSVReader/CSVReader"
import { usePapaParse, useCSVDownloader } from 'react-papaparse';

const Content = () => {
  const [rowsPressure, setRowsPressure] = useState([]);
  const [rowsTemperature, setRowsTemperature] = useState([]);
  const [rowsVolume, setRowsVolume] = useState([]);

  const { jsonToCSV } = usePapaParse();
  const { CSVDownloader, Type } = useCSVDownloader();

  const data = [...rowsPressure, ...rowsTemperature, ...rowsVolume]

  const saveResult = () => {
    const results = jsonToCSV(data, {
      skipEmptyLines: 'greedy',
      columns: ["Па", "°C", "м3"]
    });
    return results;
  }

  const handleGetValues = (csvString) => {
    let rowsPressureNext = [];
    let rowsTemperatureNext = [];
    let rowsVolumeNext = [];

    for (let c = 1; c < csvString.data.length; c++) {
      csvString.data[c].forEach((i, l) => {
        if (l === 0 && i) rowsPressureNext.push({ "Па": i });
        if (l === 1 && i) rowsTemperatureNext.push({ "°C": i });
        if (l === 2 && i) rowsVolumeNext.push({ "м3": i });
      });
    }

    setRowsPressure(rowsPressureNext);
    setRowsTemperature(rowsTemperatureNext);
    setRowsVolume(rowsVolumeNext);
  }

  return (
    <>
      <div className="csv-table">
        <Table
          name="Давление"
          unit="Па"
          rows={rowsPressure}
          onChange={i => setRowsPressure([...rowsPressure, i])}
          onUpdate={i => setRowsPressure(i)} />
        <Table
          name="Температура"
          unit="°C"
          rows={rowsTemperature}
          onChange={i => setRowsTemperature([...rowsTemperature, i])}
          onUpdate={i => setRowsTemperature(i)} />
        <Table
          name="Объем"
          unit="м3"
          rows={rowsVolume}
          onChange={i => setRowsVolume([...rowsVolume, i])}
          onUpdate={i => setRowsVolume(i)} />
        <CSVDownloader
          type={Type.Button}
          filename={'filename'}
          bom={true}
          data={saveResult}>
            Сохранить результат
        </CSVDownloader>
        <CSVReader
          data={handleGetValues} />
      </div>
      <Charts
        pressure={rowsPressure}
        temperature={rowsTemperature}
        volume={rowsVolume} />
    </>
  );
};

export default Content;
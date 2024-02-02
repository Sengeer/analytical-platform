import './Project.scss';
import React, { useState } from "react";
import Table from "../Table/Table";
import Charts from "../Charts/Charts"
import CSVReader from "../CSVReader/CSVReader"
import { usePapaParse, useCSVDownloader } from 'react-papaparse';

const Project = () => {
  const [rows, setRows] = useState([]);

  const nameUnit = ["Давление", "Температура", "Объем"]
  const unit = ["Па", "°C", "м3"];

  const { jsonToCSV } = usePapaParse();
  const { CSVDownloader, Type } = useCSVDownloader();

  const saveResult = () => {
    const results = jsonToCSV(rows, {
      skipEmptyLines: 'greedy',
      columns: unit
    });
    return results;
  }

  const handleGetValues = (csvString) => {
    let rowsNext = [];

    for (let c = 1; c < csvString.data.length; c++) {
      let obj = {};

      for (let i = 0; i < csvString.data[c].length; i++) {
        if (i === 0 && csvString.data[c][i]) obj[unit[i]] = csvString.data[c][i];
        if (i === 1 && csvString.data[c][i]) obj[unit[i]] = csvString.data[c][i];
        if (i === 2 && csvString.data[c][i]) obj[unit[i]] = csvString.data[c][i];
      }

      rowsNext.push(obj);
    }
    setRows(rowsNext);
  }

  return (
    <>
      <div className="csv-table">
        <Table
          nameUnit={nameUnit}
          unit={unit}
          rows={rows}
          onChange={i => setRows([...rows, i])}
          onUpdate={i => setRows(i)} />
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
        unit={unit}
        chartValues={rows} />
    </>
  );
};

export default Project;
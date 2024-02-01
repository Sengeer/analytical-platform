import './CsvTable.scss';
import React, { useState } from "react";
import Table from "../Table/Table";

const CsvTable = () => {
  const [rowsPressure, setRowsPressure] = useState([{}]);
  const [rowsTemperature, setRowsTemperature] = useState([{}]);
  const [rowsVolume, setRowsVolume] = useState([{}]);

  const postResults = () => {
    const table = ([rowsPressure, rowsTemperature, rowsVolume]);
    console.log(table)
  };

  return (
    <div className="csv-table">
      <Table
        name="Давление"
        unit="Па"
        rows={rowsPressure}
        onChange={r => setRowsPressure([...rowsPressure, r])}
        onUpdate={r => setRowsPressure(r)} />
      <Table
        name="Температура"
        unit="°C"
        rows={rowsTemperature}
        onChange={r => setRowsTemperature([...rowsTemperature, r])}
        onUpdate={r => setRowsTemperature(r)} />
      <Table
        name="Объем"
        unit="м3"
        rows={rowsVolume}
        onChange={r => setRowsVolume([...rowsVolume, r])}
        onUpdate={r => setRowsVolume(r)} />
      <button
        onClick={postResults}
        className="table__btn-save">
          Сохранить результат
      </button>
    </div>
  );
};

export default CsvTable;
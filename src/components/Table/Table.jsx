import './Table.scss';

const Table = ({nameUnit, unit, rows, onChange, onUpdate}) => {
  const handleAddRow = () => {
    const item = {};
    onChange(item);
  };

  const handleRemoveSpecificRow = () => {
    const tempRows = [...rows];
    tempRows.splice(-1);
    onUpdate(tempRows);
  };

  const updateState = (e) => {
    let prope = e.target.attributes.column.value;
    let index = e.target.attributes.index.value;
    let fieldValue = e.target.value;

    const tempRows = [...rows];
    const tempObj = rows[index];
    tempObj[prope] = fieldValue;

    tempRows[index] = tempObj;
    onUpdate(tempRows);
  };

  return (
    <div className="table">
      <h2 className="table__title">
          Ввод данных
      </h2>
      <div className="table__container">
        <button onClick={handleAddRow} className="table__btn-add">
          Добавить
        </button>
        <button
          className="table__btn-remove"
          onClick={() => handleRemoveSpecificRow()}>
            Удалить
        </button>
        {nameUnit.map((item, index) => (
          <div className="table__column" key={index}>
            <h2
              className="table__column-title">
                {item}
            </h2>
            <table id="tab_logic">
              <thead>
                <tr>
                  <th className="table__text">
                    #
                  </th>
                    <th className="table__text">
                      {unit[index]}
                    </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {rows.map((item, idx) => (
                  <tr key={idx}>
                    <td>
                      {idx + 1}
                    </td>
                    <td>
                      <input
                        type="number"
                        column={unit[index]}
                        value={rows[idx][unit[index]]}
                        index={idx}
                        className="table__input"
                        onChange={(e) => updateState(e)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
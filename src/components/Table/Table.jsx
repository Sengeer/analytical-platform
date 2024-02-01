import './Table.scss';

const Table = ({name, unit, rows, onChange, onUpdate}) => {
  const handleAddRow = () => {
    const item = {};
    onChange(item);
  };

  const handleRemoveSpecificRow = (idx) => {
    const tempRows = [...rows];
    tempRows.splice(idx, 1);
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
      <div className="table__container">
        <h2
          className="table__title">
            {name}
        </h2>
        <div className="table__column">
          <table id="tab_logic">
            <thead>
              <tr>
                <th className="table__text">
                  #
                </th>
                  <th className="table__text">
                    {unit}
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
                      type="text"
                      column={unit}
                      value={rows[idx][unit]}
                      index={idx}
                      className="form-control"
                      onChange={(e) => updateState(e)} />
                  </td>
                  <td>
                    <button
                      className="table__btn-remove"
                      onClick={() => handleRemoveSpecificRow(idx)}>
                      Удалить
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleAddRow} className="table__btn-add">
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
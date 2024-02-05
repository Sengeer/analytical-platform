import './Table.scss';
import MinusIcon from '../../images/icon/minus-btn';
import PlusIcon from '../../images/icon/plus-btn';

function Table ({
  nameUnit,
  unit,
  rows,
  onChange,
  onUpdate
}) {
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
    if (e.target.value.length <= 11) {
      let prope = e.target.attributes.column.value;
      let index = e.target.attributes.index.value;
      let fieldValue = e.target.value;

      const tempRows = [...rows];
      const tempObj = rows[index];
      tempObj[prope] = fieldValue;

      tempRows[index] = tempObj;
      onUpdate(tempRows);
    } else return;
  };

  return (
    <div className="table">
      <h2 className="table__title">
          Ввод данных
      </h2>
      <div className="table__container">
        <button onClick={handleAddRow} className="table__btn-add">
          <PlusIcon width="22px" height="22px" />
        </button>
        <button
          className="table__btn-remove"
          onClick={() => handleRemoveSpecificRow()}>
            <MinusIcon width="22px" height="22px" />
        </button>
        {nameUnit.map((item, index) => (
          <div className="table__column" key={index}>
            <h2
              className="table__column-title">
                {item}
            </h2>
            <table
              className="table__element"
              id="tab_logic">
              <thead>
                {index === 0
                  ? (
                    <tr>
                      <th className="table__hash">
                        #
                      </th>
                      <th className="table__text">
                        {unit[index]}
                      </th>
                    </tr>
                  ) : (
                    <tr>
                      <th className="table__text">
                        {unit[index]}
                      </th>
                    </tr>
                )}
              </thead>
              <tbody>
                {rows.map((item, idx) => (
                  <tr key={idx}>
                    {index === 0 &&
                      <td
                        className="table__text">
                        {idx + 1}
                      </td>
                    }
                    <td
                      className="table__input-container">
                      <input
                        type="number"
                        column={unit[index]}
                        value={rows[idx][unit[index]] || ''}
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
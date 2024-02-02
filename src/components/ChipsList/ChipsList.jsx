import { useCallback } from 'react';
import './ChipsList.scss';
import Chip from '../Chip/Chip';

function ChipsList({ chips, value, onChange }) {
  const onChipActivation = useCallback(
    (id) => {
      onChange(id);
    },
    [onChange]
  );

  return (
    <div className="chips-list" data-testid="chip-list">
      {chips.map((chip) => (
        <Chip
          key={chip.id}
          label={chip.label}
          disabled={chip.disabled}
          isActive={value === chip.id}
          setActive={() => onChipActivation(chip.id)}
        />
      ))}
    </div>
  );
}

export default ChipsList;

import './Chip.scss';

function Chip({ label, disabled, setActive, isActive }) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`chip ${isActive ? 'chip_active' : ''}`}
      onClick={() => setActive(true)}
    >
      {label}
    </button>
  );
}

Chip.defaultProps = {
  primary: false,
};

export default Chip;

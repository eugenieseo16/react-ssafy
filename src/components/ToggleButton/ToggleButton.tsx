import style from './ToggleButton.module.css';

interface ToggleButtonProps {
  onToggle?: () => void;
  toggleOn: string | number;
  toggleOff: string | number;
  toggle: boolean;
}

export function ToggleButton({
  toggle,
  toggleOn,
  toggleOff,
  onToggle,
  ...restProps
}: ToggleButtonProps): JSX.Element {
  return (
    <button
      className={style.Button}
      type="button"
      onClick={onToggle}
      {...restProps}
    >
      {toggle ? toggleOn : toggleOff}
    </button>
  );
}

ToggleButton.defaultProps = {
  toggle: false,
};

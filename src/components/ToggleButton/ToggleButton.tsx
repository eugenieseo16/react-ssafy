import style from './ToggleButton.module.css';

interface ToggleButtonProps {
  /** 토글 이벤트 핸들러(리스너) */
  onToggle?: () => void;
  /** 활성 상태에서 표시되는 텍스트 레이블 */
  toggleOn: string | number;
  /** 비활성 상태에서 표시되는 텍스트 레이블 */
  toggleOff: string | number;
  /** 활성 또는 비활성 상태 여부 */
  toggle?: boolean;
  /** 버튼 상호작용 여부 */
  disabled?: boolean;
}

export function ToggleButton({
  toggle,
  toggleOn,
  toggleOff,
  onToggle,
  disabled,
  ...restProps
}: ToggleButtonProps): JSX.Element {
  return (
    <button
      className={style.Button}
      disabled={disabled}
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
  disabled: false,
};

import * as React from 'react';

/* Button.Group ------------------------------------------------------------- */

interface ButtonGroupProps {
  direction?: 'col' | 'row';
  className?: string;
  children: React.ReactNode;
}

function ButtonGroup({
  direction,
  className,
  children,
}: ButtonGroupProps): JSX.Element {
  const dirClassName = direction === 'row' ? 'flex-row' : 'flex-col';
  return (
    <div className={`flex gap-2 ${dirClassName} ${className}`.trim()}>
      {children}
    </div>
  );
}

ButtonGroup.defaultProps = {
  direction: 'row',
  className: '',
};

export const MemoButtonGroup = React.memo(ButtonGroup);

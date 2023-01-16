interface Props {
  className?: string;
  [key: string]: unknown;
}

export function Button({ className, ...restProps }: Props): JSX.Element {
  return (
    <button
      className={`my-2 text-sm border border-gray-200 ${className}`.trim()}
      type="button"
      {...restProps}
    />
  );
}

Button.defaultProps = {
  className: '',
};

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

Button.Group = ButtonGroup;

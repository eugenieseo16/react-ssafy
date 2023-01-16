import * as React from 'react';

interface Props {
  className?: string;
  [key: string]: unknown;
}

function Button({ className, ...restProps }: Props): JSX.Element {
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

export const MemoButton = React.memo(Button);

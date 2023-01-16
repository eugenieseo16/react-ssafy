interface Props {
  className?: string;
  children: React.ReactNode;
}

export function Output({
  className,
  children,
  ...restProps
}: Props): JSX.Element {
  return (
    <output
      className={`my-4 text-5xl font-semibold ${className}`.trim()}
      {...restProps}
    >
      {children}
    </output>
  );
}

Output.defaultProps = {
  className: '',
};

/* eslint-disable jsx-a11y/anchor-has-content */

interface Props {
  href: string;
  isExternal?: boolean;
  [key: string]: unknown;
}

export function AppLink({
  href,
  isExternal,
  ...restProps
}: Props): JSX.Element {
  return (
    <a
      href={href}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      target={isExternal ? '_blank' : undefined}
      {...restProps}
    />
  );
}

AppLink.defaultProps = {
  isExternal: false,
};

import styles from './Logo.module.css';

interface Props {
  alt: string;
  src: string;
  showTitle?: boolean;
}

export function Logo({ alt, src, showTitle }: Props): JSX.Element {
  return (
    <img
      alt={alt}
      className={styles.Logo}
      src={src}
      title={showTitle ? alt : undefined}
    />
  );
}

Logo.defaultProps = {
  showTitle: false,
};

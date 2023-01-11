import styles from './AppNav.module.css';

interface AppNavProp {
  label: string;
  navList?: IAppNavItem[];
}

export function AppNav(props: AppNavProp) {
  return (
    <nav aria-label={props.label} className={styles.Nav}>
      {props.navList?.map(({ id, link, image }) => {
        return (
          <a
            key={id}
            href={link.href}
            rel={link.isExternal ? 'noopener noreferrer' : undefined}
            target={link.isExternal ? '_blank' : undefined}
          >
            <img
              alt={image.alt}
              className={styles.Logo}
              src={image.src}
              title={image.showTitle ? image.alt : undefined}
            />
          </a>
        );
      })}
    </nav>
  );
}

AppNav.defaultProps = {
  navList: [],
};

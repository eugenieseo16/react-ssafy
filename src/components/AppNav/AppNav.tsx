import styles from './AppNav.module.css';
import { AppLink, Logo } from '@/components';

interface AppNavProp {
  label: string;
  navList?: I_AppNavItem[];
}

export function AppNav(props: AppNavProp): JSX.Element {
  return (
    <nav aria-label={props.label} className={styles.Nav}>
      {props.navList?.map(({ id, link, image }) => {
        return (
          <AppLink key={id} href={link.href} isExternal={link.isExternal}>
            <Logo alt={image.alt} showTitle={true} src={image.src} />
          </AppLink>
        );
      })}
    </nav>
  );
}

AppNav.defaultProps = {
  navList: [],
};

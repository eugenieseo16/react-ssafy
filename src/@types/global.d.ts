interface IAppNavItem {
  id: string;
  link: {
    href: string;
    isExternal?: boolean;
  };
  image: {
    alt: string;
    src: string;
    showTitle?: boolean;
  };
}

interface I_AppNavItem {
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

interface I_AppInfo {
  title: {
    content: string;
    lang: string;
  };
  description: string;
}

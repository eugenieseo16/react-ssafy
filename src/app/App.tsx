import { useState } from 'react';

import styles from './App.module.css';
import nextLogo from '@/assets/next-js.svg';
import reactLogo from '@/assets/react.svg';
import { AppNav, Card } from '@/components';

const navigationList: I_AppNavItem[] = [
  {
    id: 'navitem-1',
    link: {
      href: 'https://vitejs.dev',
      isExternal: true,
    },
    image: {
      alt: 'Vite 공식 홈페이지',
      src: '/vite.svg',
    },
  },
  {
    id: 'navitem-2',
    link: {
      href: 'https://reactjs.org',
      isExternal: true,
    },
    image: {
      alt: 'React 공식 홈페이지',
      src: reactLogo,
      showTitle: true,
    },
  },
  {
    id: 'navitem-3',
    link: {
      href: 'https://nextjs.org',
      isExternal: true,
    },
    image: {
      alt: 'Next.js 공식 홈페이지',
      src: nextLogo,
      showTitle: true,
    },
  },
];

// Side Effects
// - [x] DOM 접근/조작 (useRef, 문서 객체 참조(ref))
// - [ ] 네트워크 요청/응답
// - [ ] 이벤트 구독/취소
function App() {
  const [navList] = useState<I_AppNavItem[]>(navigationList);

  const [appInfo] = useState<I_AppInfo>({
    title: {
      content: 'Vite + React',
      lang: 'en',
    },
    description: '자세히 알아보려면 Vite 및 React 로고(링크)를 클릭하세요.',
  });

  const [count, setCount] = useState<number>(0);

  return (
    <div className="text-gray-900">
      <AppNav
        label={'프론트엔드 인기 기술 홈페이지 내비게이션'}
        navList={navList}
      />
      <h1 lang={appInfo.title.lang}>{appInfo.title.content}</h1>
      <Card count={count} onIncrement={() => setCount((count) => count + 1)} />
      <p className={styles.ReadTheDocs}>{appInfo.description}</p>
    </div>
  );
}

export default App;

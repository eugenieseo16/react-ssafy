import { useState } from 'react';

import styles from './App.module.css';
import nextLogo from '@/assets/next-js.svg';
import reactLogo from '@/assets/react.svg';
import { AppNav, ToggleButton } from '@/components';

// Container Component
// Stateful Component
function App() {
  const [count, setCount] = useState<number>(0);
  const [navList] = useState<IAppNavItem[]>([
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
  ]);
  const [isToggle, setIsToggle] = useState<boolean>(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className="App">
      <AppNav
        label={'프론트엔드 인기 기술 홈페이지 내비게이션'}
        navList={navList}
      />
      <h1 lang="en">Vite + React</h1>
      <div className={styles.Card}>
        <ToggleButton
          toggle={isToggle}
          toggleOff={0}
          toggleOn={1}
          onToggle={handleToggle}
        />
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          카운트 {count}
        </button>
        <p>
          <code>src/App.tsx</code> 수정/저장 →{' '}
          <abbr title="Hot Module Replacement">HMR</abbr> 테스트
        </p>
      </div>
      <p className={styles.ReadTheDocs}>
        자세히 알아보려면 Vite 및 React 로고(링크)를 클릭하세요.
      </p>
    </div>
  );
}

export default App;

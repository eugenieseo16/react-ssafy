import { useState } from 'react';

import styles from './App.module.css';
import reactLogo from '@/assets/react.svg';

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <nav aria-label="Vite & React 공식 홈 내비게이션" className={styles.Nav}>
        <a href="https://vitejs.dev" rel="noopener noreferrer" target="_blank">
          <img
            alt="Vite 공식 홈페이지"
            className={styles.Logo}
            src="/vite.svg"
            title="Vite 공식 홈페이지"
          />
        </a>
        <a href="https://reactjs.org" rel="noopener noreferrer" target="_blank">
          <img
            alt="React 공식 홈페이지"
            className={`${styles.Logo} ${styles.React}`}
            src={reactLogo}
            title="React 공식 홈페이지"
          />
        </a>
      </nav>
      <h1 lang="en">Vite + React</h1>
      <div className={styles.Card}>
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

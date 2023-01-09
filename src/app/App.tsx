import { useState } from 'react';
import reactLogo from '@/assets/react.svg';
import './App.css';

// 상태를 가지는 컴포넌트
// stateful component
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <nav aria-label="Vite & React 공식 홈 내비게이션">
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img
            src="/vite.svg"
            className="logo"
            alt="Vite 공식 홈페이지"
            title="Vite 공식 홈페이지"
          />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <img
            src={reactLogo}
            className="logo react"
            alt="React 공식 홈페이지"
            title="React 공식 홈페이지"
          />
        </a>
      </nav>
      <h1 lang="en">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          카운트 {count}
        </button>
        <p>
          <code>src/App.tsx</code> 수정/저장 →{' '}
          <abbr title="Hot Module Replacement">HMR</abbr> 테스트
        </p>
      </div>
      <p className="read-the-docs">
        자세히 알아보려면 Vite 및 React 로고(링크)를 클릭하세요.
      </p>
    </div>
  );
}

export default App;

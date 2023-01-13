import { useState, useEffect, useRef } from 'react';

import styles from './App.module.css';
import nextLogo from '@/assets/next-js.svg';
import reactLogo from '@/assets/react.svg';
import { AppNav, ToggleButton } from '@/components';

// Side Effects
// 1. DOM 접근/조작 (useRef, 문서 객체 참조(ref))
// 2. 네트워크 요청/응답
// 3. 이벤트 구독/취소
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

  // 관심사 실제 문서 객체 참조 - 접근/조작
  // 참조 훅
  const cardRef = useRef<HTMLDivElement | null>(null); // { current: null }
  // 사이드 이펙트 처리 훅
  // 1. [*] 사이드 이펙트 처리 콜백 함수
  // 2. [ ] 이펙트 함수가 실행되기 위한 조건 (dependenciesList[state, state, ...])
  // 3. [ ] 클린업 함수
  useEffect(() => {
    // print ref object
    // console.log(cardRef);

    // Thinking in React
    if (cardRef.current) {
      // cardRef.current.style.cssText = `
      //   border: 3px solid currentColor;
      // `;

      cardRef.current = null;
    }

    // DOM API
    // const card = document.querySelector(`.${styles.Card}`);
    // eslint-disable-next-line no-console
    // console.log(card);
  }, []);

  // [] : mounted , componentDidMount
  // undefined : mounted + updated , componentDidMount + componentDidUpdate

  // ref object가 변경되더라도 React는 다시 렌더링 하지 않습니다.
  const countRef = useRef<number>(100);

  // 사이드 이펙트 처리
  useEffect(() => {
    // 타이머 이벤트 구독
    const clearId = setInterval(() => {
      countRef.current += 7; // 100, 107, ...
      // eslint-disable-next-line no-console
      console.log('현재 카운트 값:', countRef.current);
    }, 1000 / 60);

    // 정리 cleanup
    return () => clearInterval(clearId);
  }, []);
  // 이벤트의 구독과 취소

  return (
    <div className="App">
      <AppNav
        label={'프론트엔드 인기 기술 홈페이지 내비게이션'}
        navList={navList}
      />
      <h1 lang="en">Vite + React</h1>
      <div ref={cardRef} className={styles.Card}>
        <ToggleButton
          toggle={isToggle}
          toggleOff={countRef.current}
          toggleOn={countRef.current + 1}
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

// React Component Type (2018)
// 1. class component (stateful : container / Lifecycle Methods)
// 2. function component (stateless : presentational / 2019 React Hooks API)

const {
  React: { StrictMode, createElement: h },
  ReactDOM: { createRoot },
} = globalThis;

// React 컴포넌트 (재사용) → React 요소 생성
// PascalCase
const Headline = ({ className, ...restProps }) =>
  h(
    'h1',
    { className: `headline ${className}`, ...restProps },
  );

const Abbrebiation = ({ title, ...restProps }) =>
  h(
    'abbr',
    { title, ...restProps },
  );

const Catchphrise = ({ className, ...restProps }) =>
  h(
    'p',
    {
      className: `catchphrise ${className}`,
      ...restProps
    }
  );

function App() {
  return h(
    React.Fragment,
    null,
    h(
      Headline,
      { className: 'point' },
      'React 라이브러리',
      ' 활용하기',
      ' ',
      '🥹'
    ),
    h(Catchphrise, 
      null, 
      'React는 컴포넌트 주도 개발이 가능한 환경을 제공하는 ',
      h(Abbrebiation, { title: 'User Interface' }, 'UI'),
      ' 라이브러리입니다.'
    ),
  );
}
  

const container = document.getElementById('root');
const reactDomRoot = createRoot(container);
reactDomRoot.render(
  h(React.StrictMode, null, 
    h(App)
  )
);

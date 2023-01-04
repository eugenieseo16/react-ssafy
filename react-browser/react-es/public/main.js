const {
  React: { StrictMode, createElement: h, useState },
  ReactDOM: { createRoot },
} = globalThis;

const Headline = ({ className, ...restProps }) =>
  h('h1', { className: `headline ${className}`, ...restProps });

const Abbrebiation = ({ title, ...restProps }) =>
  h('abbr', { title, ...restProps });

const Catchphrise = ({ className, ...restProps }) =>
  h('p', {
    className: `catchphrise ${className}`,
    ...restProps,
  });

// [client] V [server] MC

function DataItem(props) {
  return h('li', props /* { children } */);
}

function Button(props) {
  return h('button', props);
}

function DataList() {
  // 2019, React Hooks API
  // state, side effect, dom ref, ... context, reducer, ...
  const [list, setList] = useState([
    { id: 'item-1', content: 'React 학습하기' },
    { id: 'item-2', content: 'ReactDOM을 활용한 SSR' },
    { id: 'item-3', content: 'Tailwind CSS 유틸리티 퍼스트 프레임워크 활용' },
  ]);

  const handleUpdateList = () => {
    setList([
      ...list,
      { id: `item-${list.length + 1}`, content: '새로운 학습 주제 선정' },
    ]);
  };

  return h(
    'div',
    { role: 'group' },
    h(
      Button,
      { type: 'button', onClick: handleUpdateList },
      '데이터 아이템 추가'
    ),
    h(
      'ul',
      { className: 'DataList' },
      list.map((item) => h(DataItem, { key: item.id }, item.content))
    )
  );
}

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
    h(
      Catchphrise,
      null,
      'React는 컴포넌트 주도 개발이 가능한 환경을 제공하는 ',
      h(Abbrebiation, { title: 'User Interface' }, 'UI'),
      ' 라이브러리입니다.'
    ),
    h(DataList, {})
  );
}

const container = document.getElementById('root');
const reactDomRoot = createRoot(container);
reactDomRoot.render(h(React.StrictMode, null, h(App)));

import { MemoButton, MemoButtonGroup, Output } from '@/components';
import { useCounter } from '@/contexts/Counter';

export function Card(): JSX.Element {
  const { count, increment, decrement } = useCounter();

  return (
    <div className="p-5">
      <div className="flex flex-col items-center">
        <MemoButtonGroup>
          <MemoButton onClick={increment}>카운트 +</MemoButton>
          <MemoButton onClick={decrement}>카운트 -</MemoButton>
        </MemoButtonGroup>
        <Output>{count}</Output>
      </div>
      <p className="mt-2">
        <code>src/App.tsx</code> 수정/저장 →{' '}
        <abbr title="Hot Module Replacement">HMR</abbr> 테스트
      </p>
    </div>
  );
}

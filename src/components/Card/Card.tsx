import { Button, Output } from '@/components';

interface Props {
  count: number;
  onIncrement: () => void;
}

export function Card({ count, onIncrement }: Props): JSX.Element {
  return (
    <div className="p-5">
      <div className="flex flex-col items-center">
        <Button onClick={onIncrement}>카운트 +</Button>
        <Output>{count}</Output>
      </div>
      <p className="mt-2">
        <code>src/App.tsx</code> 수정/저장 →{' '}
        <abbr title="Hot Module Replacement">HMR</abbr> 테스트
      </p>
    </div>
  );
}

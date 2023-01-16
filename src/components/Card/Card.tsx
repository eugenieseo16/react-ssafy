import { useMemo } from 'react';

import { MemoButton, MemoButtonGroup, Output } from '@/components';

interface Props {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function Card({ count, onIncrement, onDecrement }: Props): JSX.Element {
  // const renderButtonGroup = useMemo(
  //   () => (
  //     <Button.Group>
  //       <Button onClick={onIncrement}>카운트 +</Button>
  //       <Button onClick={onDecrement}>카운트 -</Button>
  //     </Button.Group>
  //   ),
  //   [onDecrement, onIncrement]
  // );

  return (
    <div className="p-5">
      <div className="flex flex-col items-center">
        {/* {renderButtonGroup} */}
        <MemoButtonGroup>
          <MemoButton onClick={onIncrement}>카운트 +</MemoButton>
          <MemoButton onClick={onDecrement}>카운트 -</MemoButton>
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

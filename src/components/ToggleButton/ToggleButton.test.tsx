import { render, screen, cleanup } from '@testing-library/react';

import { ToggleButton } from './ToggleButton';

describe('ToggleButton 컴포넌트', () => {
  test('ToggleButton 컴포넌트의 toggle 기본 상태는 false', () => {
    render(<ToggleButton toggleOff={0} toggleOn={1} />);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('0');

    cleanup();
  });

  test("활성 상태인 경우 'ON'으로 표시", () => {
    // eslint-disable-next-line prefer-const
    let isToggle = true;

    render(
      <ToggleButton toggle={isToggle} toggleOff={'OFF'} toggleOn={'ON'} />
    );

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('ON');
  });
});

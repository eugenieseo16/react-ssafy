import { cleanup, render, screen } from '@testing-library/react';

import { AppNav } from './AppNav';

describe('AppNav 컴포넌트', () => {
  test('AppNav 컴포넌트 렌더링', () => {
    render(<AppNav label="테스트 코드 레이블" navList={[]} />);

    const navigation = screen.getByRole('navigation');
    expect(navigation).toHaveAccessibleName(/홈페이지 내비게이션/);

    cleanup();
  });
});

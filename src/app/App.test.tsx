import { cleanup, render, screen } from '@testing-library/react';

import App from './App';

test('nav 요소 레이블 설정', () => {
  render(<App />);

  const nav = screen.getByRole('navigation');
  expect(nav).toBeInTheDocument();
  expect(nav).toHaveAttribute('aria-label');

  cleanup();
});

test('nav 내부 이미지 요소 대체 텍스트 모두 설정', () => {
  render(<App />);

  const navImgs = screen.getAllByRole('img');
  navImgs.forEach((img) => expect(img).toHaveAccessibleName());

  cleanup();
});

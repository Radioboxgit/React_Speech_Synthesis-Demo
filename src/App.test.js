import { render, screen } from '@testing-library/react';
import App from './App';

test('check for title React Demo', () => {
  render(<App />);
  const linkElement = screen.getByText("React speech Synthesis Demo");
  expect(linkElement).toBeInTheDocument();
});

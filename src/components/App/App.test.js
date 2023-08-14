import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Git codespace link', () => {
  render(<App />);
  const linkElement = screen.getByText(/git codespace/i);
  expect(linkElement).toBeInTheDocument();
});

import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('counter increments, decrements, resets, and stays at zero', () => {
  render(<App />);

  const decrementButton = screen.getByRole('button', { name: /decrement/i });
  expect(screen.getByText('Minimum limit reached')).toBeInTheDocument();
  expect(decrementButton).toBeDisabled();

  fireEvent.click(screen.getByRole('button', { name: /increment/i }));
  expect(screen.getByText('1', { selector: '.counter-value' })).toBeInTheDocument();
  expect(screen.queryByText('Minimum limit reached')).not.toBeInTheDocument();

  fireEvent.click(decrementButton);
  expect(screen.getByText('Minimum limit reached')).toBeInTheDocument();
  fireEvent.click(decrementButton);
  expect(screen.getByText('0', { selector: '.counter-value' })).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /increment/i }));
  fireEvent.click(screen.getByRole('button', { name: /reset/i }));
  expect(screen.getByText('0', { selector: '.counter-value' })).toBeInTheDocument();
});

test('generates and displays a number between 1 and 100', () => {
  render(<App />);

  expect(screen.getByText('No number generated yet')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /generate random number/i }));

  const generatedNumber = Number(screen.getByText(/\d+/, { selector: '.random-value' }).textContent);
  expect(generatedNumber).toBeGreaterThanOrEqual(1);
  expect(generatedNumber).toBeLessThanOrEqual(100);
  expect(screen.queryByText('No number generated yet')).not.toBeInTheDocument();
});

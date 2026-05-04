import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header Component', () => {
  test('renders name heading', () => {
    render(<Header darkMode={false} toggleTheme={() => {}} />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Cesar Ramirez');
  });

  test('renders location', () => {
    render(<Header darkMode={false} toggleTheme={() => {}} />);
    expect(screen.getByText(/México/)).toBeInTheDocument();
  });

  test('renders Dark Mode button when darkMode is false', () => {
    render(<Header darkMode={false} toggleTheme={() => {}} />);
    expect(screen.getByRole('button')).toHaveTextContent('Dark Mode');
  });

  test('renders Light Mode button when darkMode is true', () => {
    render(<Header darkMode={true} toggleTheme={() => {}} />);
    expect(screen.getByRole('button')).toHaveTextContent('Light Mode');
  });

  test('calls toggleTheme when button is clicked', () => {
    const mockToggle = jest.fn();
    render(<Header darkMode={false} toggleTheme={mockToggle} />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockToggle).toHaveBeenCalledTimes(1);
  });

  test('renders hero badges', () => {
    render(<Header darkMode={false} toggleTheme={() => {}} />);
    expect(screen.getByText('SDET')).toBeInTheDocument();
    expect(screen.getByText('AI-Driven Testing')).toBeInTheDocument();
  });
});

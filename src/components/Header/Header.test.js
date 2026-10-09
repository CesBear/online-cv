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
    expect(screen.getByRole('button', { name: /dark mode/i })).toBeInTheDocument();
  });

  test('renders Light Mode button when darkMode is true', () => {
    render(<Header darkMode={true} toggleTheme={() => {}} />);
    expect(screen.getByRole('button', { name: /light mode/i })).toBeInTheDocument();
  });

  test('calls toggleTheme when theme button is clicked', () => {
    const mockToggle = jest.fn();
    render(<Header darkMode={false} toggleTheme={mockToggle} />);
    fireEvent.click(screen.getByRole('button', { name: /dark mode/i }));
    expect(mockToggle).toHaveBeenCalledTimes(1);
  });

  test('renders audio play button', () => {
    render(<Header darkMode={false} toggleTheme={() => {}} />);
    expect(screen.getByRole('button', { name: /play frequency/i })).toBeInTheDocument();
  });

  test('renders hero badges', () => {
    render(<Header darkMode={false} toggleTheme={() => {}} />);
    expect(screen.getByText('SDET')).toBeInTheDocument();
    expect(screen.getByText('AI-Driven Testing')).toBeInTheDocument();
  });

  test('shows the frequency explanation tooltip when the help button is clicked', () => {
    render(<Header darkMode={false} toggleTheme={() => {}} />);
    const help = screen.getByRole('button', { name: /why these frequencies/i });
    expect(help).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(help);
    expect(help).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('tooltip', { hidden: true })).toHaveTextContent(/cymatics is sound made visible/i);
  });
});

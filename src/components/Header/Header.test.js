// Header.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header Component', () => {
  test('renders name and title correctly', () => {
    render(<Header darkMode={false} toggleTheme={() => {}} />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Cesar Ramirez');
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Software Development Engineer in Test (SDET)');
    expect(screen.getByRole('paragraph')).toHaveTextContent("I'm based in the beautiful México");
  });

  test('renders the dark mode button correctly', () => {
    render(<Header darkMode={false} toggleTheme={() => {}} />);
    expect(screen.getByRole('button')).toHaveTextContent('Dark Mode');
  });

  test('renders the light mode button correctly', () => {
    render(<Header darkMode={true} toggleTheme={() => {}} />);
    expect(screen.getByRole('button')).toHaveTextContent('Light Mode');
  });

  test('toggles theme when button is clicked', () => {
    const mockToggleTheme = jest.fn();
    render(<Header darkMode={false} toggleTheme={mockToggleTheme} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });
});

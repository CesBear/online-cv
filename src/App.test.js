import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  test('defaults to dark mode when localStorage is empty', () => {
    render(<App />);
    expect(document.body.className).toBe('');
  });

  test('applies light mode when localStorage has theme=light', () => {
    localStorage.setItem('theme', 'light');
    render(<App />);
    expect(document.body.className).toBe('light');
  });

  test('toggles to light mode when theme button is clicked', () => {
    // App defaults to dark mode → button reads "Light Mode"
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /light mode/i }));
    expect(document.body.className).toBe('light');
  });

  test('toggles back to dark mode on second click', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /light mode/i }));
    fireEvent.click(screen.getByRole('button', { name: /dark mode/i }));
    expect(document.body.className).toBe('');
  });

  test('persists theme choice to localStorage', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /light mode/i }));
    expect(localStorage.getItem('theme')).toBe('light');
  });

  test('renders all main sections', () => {
    render(<App />);
    expect(document.getElementById('about')).toBeInTheDocument();
    expect(document.getElementById('skills')).toBeInTheDocument();
    expect(document.getElementById('experience')).toBeInTheDocument();
    expect(document.getElementById('certifications')).toBeInTheDocument();
    expect(document.getElementById('gamedev')).toBeInTheDocument();
    expect(document.getElementById('contact')).toBeInTheDocument();
  });
});

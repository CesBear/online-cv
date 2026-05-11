import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigation from './Navigation';

describe('Navigation Component', () => {
  test('renders all nav links', () => {
    render(<Navigation />);
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /skills/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /experience/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /certifications/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /game dev/i })).toBeInTheDocument();
  });

  test('nav links have correct href anchors', () => {
    render(<Navigation />);
    expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute('href', '#about');
    expect(screen.getByRole('link', { name: /skills/i })).toHaveAttribute('href', '#skills');
    expect(screen.getByRole('link', { name: /experience/i })).toHaveAttribute('href', '#experience');
    expect(screen.getByRole('link', { name: /game dev/i })).toHaveAttribute('href', '#gamedev');
    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute('href', '#contact');
  });
});

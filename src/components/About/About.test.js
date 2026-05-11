import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from './About';

describe('About Component', () => {
  test('renders section heading', () => {
    render(<About />);
    expect(screen.getByText(/About Me/i)).toBeInTheDocument();
  });

  test('renders SDET description', () => {
    render(<About />);
    expect(screen.getByText(/Software Development Engineer in Test/i)).toBeInTheDocument();
  });

  test('renders AI expertise paragraph', () => {
    render(<About />);
    expect(screen.getByText(/Claude/i)).toBeInTheDocument();
  });

  test('renders highlight tags', () => {
    render(<About />);
    expect(screen.getByText('14+ Years in IT')).toBeInTheDocument();
    expect(screen.getByText('AI-Driven Testing')).toBeInTheDocument();
    expect(screen.getByText('Agent Development')).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Skills from './Skills';

describe('Skills Component', () => {
  test('renders section heading', () => {
    render(<Skills />);
    expect(screen.getByRole('heading', { name: /skills/i })).toBeInTheDocument();
  });

  test('renders AI & Automation banner', () => {
    render(<Skills />);
    expect(screen.getByText(/AI & Automation/i)).toBeInTheDocument();
  });

  test('renders AI skill tags', () => {
    render(<Skills />);
    expect(screen.getByText('AI-Driven Testing')).toBeInTheDocument();
    expect(screen.getByText('Claude (Anthropic)')).toBeInTheDocument();
    expect(screen.getByText('GitHub Copilot')).toBeInTheDocument();
    expect(screen.getByText('Agent Development')).toBeInTheDocument();
  });

  test('renders skill categories', () => {
    render(<Skills />);
    expect(screen.getByText('Test Automation')).toBeInTheDocument();
    expect(screen.getByText('Languages & Frontend')).toBeInTheDocument();
    expect(screen.getByText('DevOps & Cloud')).toBeInTheDocument();
  });

  test('renders tech skill tags', () => {
    render(<Skills />);
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Playwright')).toBeInTheDocument();
    expect(screen.getByText('Docker')).toBeInTheDocument();
  });
});

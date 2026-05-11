import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Certifications from './Certifications';

describe('Certifications Component', () => {
  test('renders section heading', () => {
    render(<Certifications />);
    expect(screen.getByText(/Certifications/i)).toBeInTheDocument();
  });

  test('renders all certifications', () => {
    render(<Certifications />);
    expect(screen.getByText(/ISTQB Foundation Level/i)).toBeInTheDocument();
    expect(screen.getByText(/CIW JavaScript Specialist/i)).toBeInTheDocument();
    expect(screen.getByText(/QA Automation/i)).toBeInTheDocument();
    expect(screen.getByText(/FullStack Web Development/i)).toBeInTheDocument();
  });

  test('renders cert issuers', () => {
    render(<Certifications />);
    expect(screen.getByText('ISTQB')).toBeInTheDocument();
    expect(screen.getByText('CIW')).toBeInTheDocument();
    expect(screen.getByText(/Wizeline/i)).toBeInTheDocument();
  });

  test('certs with URLs render as links', () => {
    render(<Certifications />);
    expect(screen.getByRole('link', { name: /ISTQB/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /CIW/i })).toBeInTheDocument();
  });

  test('FullStack cert renders as plain text (no link)', () => {
    render(<Certifications />);
    const fullstack = screen.getByText(/FullStack Web Development/i);
    expect(fullstack.tagName).not.toBe('A');
  });
});

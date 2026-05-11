import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from './Contact';

describe('Contact Component', () => {
  test('renders section heading', () => {
    render(<Contact />);
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });

  test('renders email link', () => {
    render(<Contact />);
    const email = screen.getByRole('link', { name: /email/i });
    expect(email).toHaveAttribute('href', 'mailto:carr@cesbear.com');
  });

  test('renders LinkedIn link', () => {
    render(<Contact />);
    const linkedin = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedin).toHaveAttribute('href', expect.stringContaining('linkedin.com'));
    expect(linkedin).toHaveAttribute('target', '_blank');
    expect(linkedin).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('renders GitHub link', () => {
    render(<Contact />);
    const github = screen.getByRole('link', { name: /github/i });
    expect(github).toHaveAttribute('href', expect.stringContaining('github.com'));
    expect(github).toHaveAttribute('target', '_blank');
  });

  test('renders contact values', () => {
    render(<Contact />);
    expect(screen.getByText('carr@cesbear.com')).toBeInTheDocument();
    expect(screen.getByText('CesBear')).toBeInTheDocument();
  });
});

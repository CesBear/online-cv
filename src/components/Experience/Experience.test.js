import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Experience from './Experience';

describe('Experience Component', () => {
  test('renders section heading', () => {
    render(<Experience />);
    expect(screen.getByText(/Experience/i)).toBeInTheDocument();
  });

  test('renders current role at Zip.CO', () => {
    render(<Experience />);
    expect(screen.getByText(/Zip\.CO/i)).toBeInTheDocument();
    expect(screen.getByText(/Aug 2022 - Present/i)).toBeInTheDocument();
  });

  test('renders all expected companies', () => {
    render(<Experience />);
    expect(screen.getByText(/Salesforce/i)).toBeInTheDocument();
    expect(screen.getByText(/IBM/i)).toBeInTheDocument();
    expect(screen.getByText(/Globant/i)).toBeInTheDocument();
  });

  test('renders role descriptions', () => {
    render(<Experience />);
    expect(screen.getByText(/TypeScript and Cucumber/i)).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GameDev from './GameDev';

describe('GameDev Component', () => {
  test('renders section heading', () => {
    render(<GameDev />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Side Projects');
  });

  test('renders MaestroMusic with live links', () => {
    render(<GameDev />);
    expect(screen.getByText('MaestroMusic')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /visit/i })).toHaveAttribute('href', 'https://musicappgit.vercel.app');
    expect(screen.getByRole('link', { name: /source/i })).toHaveAttribute('href', 'https://github.com/CesBear/musicApp');
  });

  test('renders both platforms', () => {
    render(<GameDev />);
    expect(screen.getByText('2D Game Development')).toBeInTheDocument();
    expect(screen.getByText('Roblox Development')).toBeInTheDocument();
  });

  test('renders private status on all cards', () => {
    render(<GameDev />);
    const statuses = screen.getAllByText(/Private — In Development/i);
    expect(statuses).toHaveLength(2);
  });

  test('renders confidential notice on all cards', () => {
    render(<GameDev />);
    const notices = screen.getAllByText(/confidential/i);
    expect(notices).toHaveLength(2);
  });

  test('renders skill tags for each platform', () => {
    render(<GameDev />);
    expect(screen.getByText('Lua')).toBeInTheDocument();
    expect(screen.getByText('Roblox Studio')).toBeInTheDocument();
    expect(screen.getByText('Game Design')).toBeInTheDocument();
  });
});

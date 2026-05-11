import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GameDev from './GameDev';

describe('GameDev Component', () => {
  test('renders section heading', () => {
    render(<GameDev />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Game Development');
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

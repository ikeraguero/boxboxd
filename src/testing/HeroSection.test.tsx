import { describe, it, expect, beforeAll, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { HeroSection } from '@/components/HeroSection';

describe('HeroSection', () => {

  beforeAll(() => {
    render(<HeroSection onOpen={vi.fn()} />);
  })
  it('should render the hero image', () => {
    const image = screen.getByRole('img', {
      name: /hero section image/i,
    });

    expect(image).toBeInTheDocument();
  });

  it('should render the hero button', () => {
    const button = screen.getByRole('button', {
      name: /get started/i
    })

    expect(button).toBeInTheDocument();
  })

  it('should render the hero text', () => {
    expect(screen.getByText(/track races you've watched/i)).toBeInTheDocument();
    expect(screen.getByText(/unlock achievements/i)).toBeInTheDocument();
    expect(screen.getByText(/tell your friends what's good/i)).toBeInTheDocument();
  })
});

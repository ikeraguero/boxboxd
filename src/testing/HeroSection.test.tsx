import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { HeroSection } from '@/components/HeroSection';

describe('HeroSection', () => {
  it('renders the hero image', () => {
    render(<HeroSection />);

    const image = screen.getByRole('img', {
      name: /hero section image/i,
    });

    expect(image).toBeInTheDocument();
  });
});

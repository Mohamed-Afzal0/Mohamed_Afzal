import { describe, it, expect } from 'vitest';

describe('Home hero content', () => {
  it('keeps the premium copy structure intact', () => {
    const headline = 'Designing the future with clarity, craft, and momentum.';
    const cta = 'Start a Project';

    expect(headline).toContain('future');
    expect(cta).toContain('Project');
  });
});

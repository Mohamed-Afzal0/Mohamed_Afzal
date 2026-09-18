import { describe, expect, it } from 'vitest';
import { getBackgroundTireRotation } from '../lib/scrollTireRotation.js';

describe('scroll tire background rotation', () => {
  it('keeps rotating while the page is still before the freeze threshold', () => {
    const value = getBackgroundTireRotation({
      scrollY: 600,
      previousScrollY: 500,
      freezeThreshold: 1200,
      maxScroll: 3000,
      maxRotation: 2500,
    });

    expect(value).toBeCloseTo(500, 1);
  });

  it('freezes rotation at the lock point when the user keeps scrolling down', () => {
    const value = getBackgroundTireRotation({
      scrollY: 1500,
      previousScrollY: 1300,
      freezeThreshold: 1200,
      maxScroll: 3000,
      maxRotation: 2500,
    });

    expect(value).toBeCloseTo(1000, 1);
  });

  it('stays frozen while the user is still above the lock point on the way back up', () => {
    const value = getBackgroundTireRotation({
      scrollY: 1300,
      previousScrollY: 1500,
      freezeThreshold: 1200,
      maxScroll: 3000,
      maxRotation: 2500,
    });

    expect(value).toBeCloseTo(1000, 1);
  });

  it('unfreezes and rotates back upward when the user goes back through the frozen threshold', () => {
    const value = getBackgroundTireRotation({
      scrollY: 1000,
      previousScrollY: 1300,
      freezeThreshold: 1200,
      maxScroll: 3000,
      maxRotation: 2500,
    });

    expect(value).toBeCloseTo(833.33, 1);
    expect(value).toBeLessThan(1000);
  });
});

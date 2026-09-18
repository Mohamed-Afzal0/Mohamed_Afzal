export function getBackgroundTireRotation({
  scrollY,
  previousScrollY,
  freezeThreshold = 1200,
  maxScroll = 3000,
  maxRotation = 2500,
}) {
  const clampedScrollY = Math.max(0, Math.min(scrollY, maxScroll));
  const rotationFromScroll = (clampedScrollY / maxScroll) * maxRotation;
  const freezeRotation = (freezeThreshold / maxScroll) * maxRotation;
  const isPastFreezeThreshold = clampedScrollY >= freezeThreshold;
  const isScrollingDown = scrollY > previousScrollY;

  if (!isPastFreezeThreshold) {
    return rotationFromScroll;
  }

  if (isScrollingDown) {
    return freezeRotation;
  }

  if (clampedScrollY <= freezeThreshold) {
    return rotationFromScroll;
  }

  return freezeRotation;
}

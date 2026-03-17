// Animation infrastructure exports
// This file provides a central export point for all animation utilities

// Variant exports
export * from './variants/fade';
export * from './variants/slide';
export * from './variants/scale';
export * from './variants/stagger';
export * from './variants/text';

// Hook exports
export { useScrollAnimation, useScrollThreshold } from './hooks/useScrollAnimation';
export { useReducedMotion, useMotionVariants, useMotionProps } from './hooks/useReducedMotion';
export { useMagneticButton, useTiltEffect } from './hooks/useMagneticButton';
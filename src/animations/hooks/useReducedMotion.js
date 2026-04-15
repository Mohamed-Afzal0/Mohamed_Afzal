import { useLayoutEffect, useState } from 'react';

/**
 * Custom hook to detect if user prefers reduced motion
 * Used for accessibility - all animations should respect this preference
 *
 * @returns {boolean} - true if user prefers reduced motion
 */
export function useReducedMotion() {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
        // Initialize state from media query on mount
        if (typeof window === 'undefined') return false;
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    });

    useLayoutEffect(() => {
        // Check if window is available (SSR safety)
        if (typeof window === 'undefined') return;

        // Create media query for prefers-reduced-motion
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

        // Listen for changes
        const handleChange = (event) => {
            setPrefersReducedMotion(event.matches);
        };

        // Modern browsers use addEventListener
        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', handleChange);
            return () => mediaQuery.removeEventListener('change', handleChange);
        }
        // Fallback for older browsers
        mediaQuery.addListener(handleChange);
        return () => mediaQuery.removeListener(handleChange);
    }, []);

    return prefersReducedMotion;
}

/**
 * Returns animation variants that respect reduced motion preferences
 * If reduced motion is preferred, returns static variants
 *
 * @param {Object} variants - Animation variants to use
 * @returns {Object} - Either the provided variants or static variants
 */
export function useMotionVariants(variants) {
    const prefersReducedMotion = useReducedMotion();

    if (prefersReducedMotion) {
        // Return static variants with no animation
        return {
            hidden: { opacity: 1 },
            visible: { opacity: 1 },
        };
    }

    return variants;
}

/**
 * Returns animation props that respect reduced motion
 *
 * @param {Object} animationProps - Animation props (initial, animate, variants, etc.)
 * @returns {Object} - Animation props or empty object if reduced motion preferred
 */
export function useMotionProps(animationProps) {
    const prefersReducedMotion = useReducedMotion();

    if (prefersReducedMotion) {
        // Return minimal props for reduced motion
        return {
            initial: false,
            animate: false,
        };
    }

    return animationProps;
}

export default useReducedMotion;
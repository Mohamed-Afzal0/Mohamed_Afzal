import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Custom hook for scroll-triggered animations
 * Returns ref and inView state for use with Framer Motion components
 *
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Percentage of element visible before triggering (0-1)
 * @param {boolean} options.once - Whether to only trigger once
 * @param {number} options.margin - Margin around the viewport
 * @returns {Object} - { ref, isInView }
 */
export function useScrollAnimation(options = {}) {
    const {
        threshold = 0.2,
        once = true,
        margin = '-50px',
    } = options;

    const ref = useRef(null);
    const isInView = useInView(ref, {
        once,
        amount: threshold,
        margin,
    });

    return { ref, isInView };
}

/**
 * Hook that returns animation controls based on scroll position
 * Useful for parallax effects and scroll-linked animations
 *
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Percentage of element visible
 * @param {boolean} options.once - Whether to only trigger once
 * @returns {Object} - { ref, isInView }
 */
export function useScrollThreshold(options = {}) {
    const {
        threshold = 0.5,
        once = false,
    } = options;

    const ref = useRef(null);
    const isInView = useInView(ref, {
        once,
        amount: threshold,
    });

    return { ref, isInView };
}

export default useScrollAnimation;
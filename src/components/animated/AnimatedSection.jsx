import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../animations/hooks/useScrollAnimation';
import { useReducedMotion } from '../../animations/hooks/useReducedMotion';
import { fadeInUp } from '../../animations/variants/fade';

/**
 * AnimatedSection - Wrapper component that animates children on scroll
 * Automatically respects reduced motion preferences
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {Object} props.variants - Framer Motion variants to use
 * @param {number} props.delay - Animation delay in seconds
 * @param {number} props.threshold - Viewport threshold (0-1)
 * @param {boolean} props.once - Only animate once
 * @param {string} props.className - CSS class name
 * @param {Object} props.style - Inline styles
 */
function AnimatedSection({
    children,
    variants = fadeInUp,
    delay = 0,
    threshold = 0.2,
    once = true,
    className = '',
    style = {},
    ...rest
}) {
    const prefersReducedMotion = useReducedMotion();
    const { ref, isInView } = useScrollAnimation({ threshold, once });

    // If user prefers reduced motion, render without animation
    if (prefersReducedMotion) {
        return (
            <div ref={ref} className={className} style={style} {...rest}>
                {children}
            </div>
        );
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
                ...variants,
                visible: {
                    ...variants.visible,
                    transition: {
                        ...(variants.visible?.transition || {}),
                        delay,
                    },
                },
            }}
            className={className}
            style={style}
            {...rest}
        >
            {children}
        </motion.div>
    );
}

export default AnimatedSection;
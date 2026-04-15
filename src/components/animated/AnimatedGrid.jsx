import React from 'react';
import { useScrollAnimation } from '../../animations/hooks/useScrollAnimation';
import { useReducedMotion } from '../../animations/hooks/useReducedMotion';
import { staggerContainer, staggerChild } from '../../animations/variants/stagger';

/**
 * AnimatedGrid - Grid container with staggered child animations
 * Children animate in sequence when grid enters viewport
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Grid items to animate
 * @param {Object} props.containerVariants - Parent container variants
 * @param {Object} props.childVariants - Child item variants
 * @param {number} props.staggerDelay - Delay between child animations
 * @param {number} props.delay - Initial delay before animations start
 * @param {number} props.threshold - Viewport threshold (0-1)
 * @param {string} props.className - CSS class name
 * @param {Object} props.style - Inline styles
 */
function AnimatedGrid({
    children,
    containerVariants = staggerContainer,
    childVariants = staggerChild,
    staggerDelay = 0.1,
    delay = 0.1,
    threshold = 0.1,
    className = '',
    style = {},
    ...rest
}) {
    const prefersReducedMotion = useReducedMotion();
    const { ref, isInView } = useScrollAnimation({ threshold, once: true });

    // If user prefers reduced motion, render without animation
    if (prefersReducedMotion) {
        return (
            <div ref={ref} className={className} style={style} {...rest}>
                {React.Children.map(children, (child, index) => (
                    <div key={index}>{child}</div>
                ))}
            </div>
        );
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
                ...containerVariants,
                visible: {
                    ...containerVariants.visible,
                    transition: {
                        staggerChildren: staggerDelay,
                        delayChildren: delay,
                    },
                },
            }}
            className={className}
            style={style}
            {...rest}
        >
            {React.Children.map(children, (child, index) => (
                <motion.div key={index} variants={childVariants}>
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
}

export default AnimatedGrid;
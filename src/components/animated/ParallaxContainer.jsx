import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotion } from '../../animations/hooks/useReducedMotion';

/**
 * ParallaxContainer - Container with parallax scroll effect
 * Children move at different speeds during scroll for depth effect
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to parallax
 * @param {number} props.speed - Parallax speed multiplier (0.1-1, default 0.5)
 * @param {string} props.direction - 'up' or 'down' for scroll direction effect
 * @param {string} props.className - CSS class name
 * @param {Object} props.style - Inline styles
 */
function ParallaxContainer({
    children,
    speed = 0.5,
    direction = 'up',
    className = '',
    style = {},
    ...rest
}) {
    const prefersReducedMotion = useReducedMotion();
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    // Calculate parallax offset based on scroll position
    const multiplier = direction === 'up' ? -1 : 1;
    const yOffset = useTransform(
        scrollYProgress,
        [0, 1],
        [100 * speed * multiplier, -100 * speed * multiplier]
    );

    // If user prefers reduced motion, render without parallax
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
            style={{ ...style, y: yOffset }}
            className={className}
            {...rest}
        >
            {children}
        </motion.div>
    );
}

/**
 * ParallaxImage - Specialized component for parallax images
 * Includes scale effect during scroll
 */
export function ParallaxImage({
    children,
    speed = 0.3,
    scaleAmount = 0.1,
    className = '',
    style = {},
    ...rest
}) {
    const prefersReducedMotion = useReducedMotion();
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const yOffset = useTransform(scrollYProgress, [0, 1], [50 * speed, -50 * speed]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1 + scaleAmount, 1, 1 + scaleAmount]);

    if (prefersReducedMotion) {
        return (
            <div ref={ref} className={className} style={{ ...style, overflow: 'hidden' }} {...rest}>
                {children}
            </div>
        );
    }

    return (
        <div ref={ref} style={{ overflow: 'hidden', ...style }} className={className} {...rest}>
            <motion.div style={{ y: yOffset, scale }}>
                {children}
            </motion.div>
        </div>
    );
}

export default ParallaxContainer;
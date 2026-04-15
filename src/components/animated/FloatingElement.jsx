import React from 'react';
import { useReducedMotion } from '../../animations/hooks/useReducedMotion';

/**
 * FloatingElement - Continuously floating background element
 * Creates a subtle floating animation for decorative elements
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to float
 * @param {number} props.duration - Animation duration in seconds
 * @param {number} props.distance - Vertical float distance in pixels
 * @param {number} props.delay - Animation delay in seconds
 * @param {string} props.className - CSS class name
 * @param {Object} props.style - Inline styles
 */
function FloatingElement({
    children,
    duration = 3,
    distance = 20,
    delay = 0,
    className = '',
    style = {},
    ...rest
}) {
    const prefersReducedMotion = useReducedMotion();

    // If user prefers reduced motion, render static element
    if (prefersReducedMotion) {
        return (
            <div className={className} style={style} {...rest}>
                {children}
            </div>
        );
    }

    return (
        <motion.div
            animate={{
                y: [-distance / 2, distance / 2, -distance / 2],
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
            className={className}
            style={style}
            {...rest}
        >
            {children}
        </motion.div>
    );
}

/**
 * FloatingOrb - Gradient orb that floats and can have parallax on hover
 * Perfect for background decorative elements
 */
export function FloatingOrb({
    color = 'primary',
    size = 300,
    blur = 150,
    position = { top: '10%', left: '5%' },
    opacity = 0.3,
    duration = 4,
    distance = 30,
    delay = 0,
    style = {},
    theme,
}) {
    const prefersReducedMotion = useReducedMotion();

    // Color mapping for theme support
    const colors = {
        primary: theme?.palette?.primary?.main || '#2563eb',
        secondary: '#ec4899',
        accent: '#8b5cf6',
        cyan: '#06b6d4',
    };

    const orbColor = colors[color] || color;
    const actualOpacity = theme?.palette?.mode === 'dark' ? opacity : opacity * 0.5;

    if (prefersReducedMotion) {
        return (
            <div
                style={{
                    position: 'absolute',
                    width: size,
                    height: size,
                    borderRadius: '50%',
                    background: orbColor,
                    filter: `blur(${blur}px)`,
                    opacity: actualOpacity,
                    ...position,
                    ...style,
                }}
            />
        );
    }

    return (
        <motion.div
            style={{
                position: 'absolute',
                width: size,
                height: size,
                borderRadius: '50%',
                background: orbColor,
                filter: `blur(${blur}px)`,
                opacity: actualOpacity,
                ...position,
                ...style,
            }}
            animate={{
                y: [-distance / 2, distance / 2, -distance / 2],
                x: [-distance / 4, distance / 4, -distance / 4],
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
        />
    );
}

/**
 * FloatingParticle - Small floating particle for subtle background effects
 */
export function FloatingParticle({
    size = 10,
    color = 'rgba(255,255,255,0.1)',
    position = { top: '50%', left: '50%' },
    duration = 5,
    distance = 50,
    delay = 0,
}) {
    const prefersReducedMotion = useReducedMotion();

    if (prefersReducedMotion) {
        return (
            <div
                style={{
                    position: 'absolute',
                    width: size,
                    height: size,
                    borderRadius: '50%',
                    background: color,
                    ...position,
                }}
            />
        );
    }

    return (
        <motion.div
            style={{
                position: 'absolute',
                width: size,
                height: size,
                borderRadius: '50%',
                background: color,
                ...position,
            }}
            animate={{
                y: [-distance, distance],
                opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
        />
    );
}

export default FloatingElement;
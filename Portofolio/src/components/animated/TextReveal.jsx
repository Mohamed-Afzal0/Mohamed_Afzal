import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../animations/hooks/useScrollAnimation';
import { useReducedMotion } from '../../animations/hooks/useReducedMotion';
import { textRevealContainer, textRevealCharacter } from '../../animations/variants/text';

/**
 * TextReveal - Character-by-character text reveal animation
 * Each character animates in with a 3D flip effect
 *
 * @param {Object} props
 * @param {string} props.text - Text to animate
 * @param {string} props.variant - 'character' or 'word' for animation type
 * @param {Object} props.variants - Custom variants
 * @param {number} props.delay - Initial delay before animation starts
 * @param {number} props.threshold - Viewport threshold (0-1)
 * @param {Object} props.style - Inline styles for container
 * @param {Object} props.textStyle - Inline styles for text
 * @param {string} props.className - CSS class name for container
 * @param {string} props.textClassName - CSS class name for text
 */
function TextReveal({
    text,
    variant = 'character',
    variants,
    delay = 0,
    threshold = 0.5,
    style = {},
    textStyle = {},
    className = '',
    textClassName = '',
    ...rest
}) {
    const prefersReducedMotion = useReducedMotion();
    const { ref, isInView } = useScrollAnimation({ threshold, once: true });

    // Use provided variants or defaults based on variant type
    const containerVariants = variants?.container || textRevealContainer;
    const itemVariants = variants?.item || textRevealCharacter;

    // If user prefers reduced motion, render static text
    if (prefersReducedMotion) {
        return (
            <div ref={ref} className={className} style={style} {...rest}>
                <span style={textStyle} className={textClassName}>{text}</span>
            </div>
        );
    }

    // Split text based on variant type
    const items = variant === 'word' ? text.split(' ') : text.split('');

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
                        ...containerVariants.visible?.transition,
                        delayChildren: delay,
                    },
                },
            }}
            className={className}
            style={{ display: 'inline-flex', flexWrap: 'wrap', ...style }}
            {...rest}
        >
            {items.map((item, index) => (
                <motion.span
                    key={index}
                    variants={itemVariants}
                    style={{
                        display: 'inline-block',
                        whiteSpace: variant === 'word' ? 'pre' : 'pre',
                        ...textStyle,
                    }}
                    className={textClassName}
                >
                    {variant === 'word' ? item : item === ' ' ? '\u00A0' : item}
                </motion.span>
            ))}
        </motion.div>
    );
}

/**
 * TextRevealLine - Line-by-line text reveal animation
 * Animates each line of text sequentially
 */
export function TextRevealLine({
    lines,
    delay = 0,
    staggerDelay = 0.15,
    threshold = 0.5,
    style = {},
    lineStyle = {},
    className = '',
    ...rest
}) {
    const prefersReducedMotion = useReducedMotion();
    const { ref, isInView } = useScrollAnimation({ threshold, once: true });

    if (prefersReducedMotion) {
        return (
            <div ref={ref} className={className} style={style} {...rest}>
                {lines.map((line, index) => (
                    <div key={index} style={lineStyle}>{line}</div>
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
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
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
            {lines.map((line, index) => (
                <motion.div
                    key={index}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.5, ease: 'easeOut' },
                        },
                    }}
                    style={{ overflow: 'hidden', ...lineStyle }}
                >
                    {line}
                </motion.div>
            ))}
        </motion.div>
    );
}

export default TextReveal;
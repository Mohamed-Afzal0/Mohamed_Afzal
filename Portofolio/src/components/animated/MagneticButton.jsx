import React, { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../animations/hooks/useReducedMotion';

/**
 * MagneticButton - Button that follows cursor within a radius
 * Creates a magnetic hover effect that attracts the button to the cursor
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button content
 * @param {number} props.strength - Magnetic strength (0-1)
 * @param {number} props.radius - Radius in pixels for magnetic effect
 * @param {Function} props.onClick - Click handler
 * @param {Object} props.style - Inline styles
 * @param {string} props.className - CSS class name
 */
function MagneticButton({
    children,
    strength = 0.3,
    radius = 150,
    onClick,
    style = {},
    className = '',
    ...rest
}) {
    const prefersReducedMotion = useReducedMotion();
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e) => {
        if (!ref.current || prefersReducedMotion) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < radius) {
            const factor = (1 - distance / radius) * strength;
            setPosition({
                x: distanceX * factor,
                y: distanceY * factor,
            });
        }
    }, [strength, radius, prefersReducedMotion]);

    const handleMouseLeave = useCallback(() => {
        setPosition({ x: 0, y: 0 });
    }, []);

    if (prefersReducedMotion) {
        return (
            <div
                ref={ref}
                className={className}
                style={{ display: 'inline-block', ...style }}
                onClick={onClick}
                {...rest}
            >
                {children}
            </div>
        );
    }

    return (
        <motion.div
            ref={ref}
            className={className}
            style={{ display: 'inline-block', ...style }}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...rest}
        >
            {children}
        </motion.div>
    );
}

/**
 * MagneticIcon - Smaller magnetic effect for icons
 */
export function MagneticIcon({
    children,
    strength = 0.2,
    radius = 80,
    style = {},
    className = '',
    ...rest
}) {
    const prefersReducedMotion = useReducedMotion();
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e) => {
        if (!ref.current || prefersReducedMotion) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < radius) {
            const factor = (1 - distance / radius) * strength;
            setPosition({
                x: distanceX * factor,
                y: distanceY * factor,
            });
        }
    }, [strength, radius, prefersReducedMotion]);

    const handleMouseLeave = useCallback(() => {
        setPosition({ x: 0, y: 0 });
    }, []);

    if (prefersReducedMotion) {
        return (
            <div
                ref={ref}
                className={className}
                style={{ display: 'inline-flex', ...style }}
                {...rest}
            >
                {children}
            </div>
        );
    }

    return (
        <motion.div
            ref={ref}
            className={className}
            style={{ display: 'inline-flex', ...style }}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            {...rest}
        >
            {children}
        </motion.div>
    );
}

export default MagneticButton;
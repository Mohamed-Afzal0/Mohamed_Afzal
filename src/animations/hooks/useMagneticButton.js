import { useState, useCallback, useRef } from 'react';

/**
 * Custom hook for magnetic button effect
 * The button follows the cursor within a defined radius
 *
 * @param {Object} options - Configuration options
 * @param {number} options.strength - How strongly the button follows the cursor (0-1)
 * @param {number} options.radius - Radius in pixels within which the effect is active
 * @returns {Object} - { ref, position, handleMouseMove, handleMouseLeave }
 */
export function useMagneticButton(options = {}) {
    const {
        strength = 0.3,
        radius = 150,
    } = options;

    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e) => {
        if (!ref.current) return;

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
    }, [strength, radius]);

    const handleMouseLeave = useCallback(() => {
        setPosition({ x: 0, y: 0 });
    }, []);

    return {
        ref,
        position,
        handleMouseMove,
        handleMouseLeave,
    };
}

/**
 * Hook for 3D tilt effect on cards
 * Returns tilt values based on mouse position
 *
 * @param {Object} options - Configuration options
 * @param {number} options.maxTilt - Maximum tilt angle in degrees
 * @param {number} options.scale - Scale factor on hover
 * @param {number} options.speed - Transition speed
 * @returns {Object} - { ref, style, handlers }
 */
export function useTiltEffect(options = {}) {
    const {
        maxTilt = 10,
        scale = 1.02,
        speed = 400,
    } = options;

    const ref = useRef(null);
    const [transform, setTransform] = useState({
        rotateX: 0,
        rotateY: 0,
        scale: 1,
    });

    const handleMouseMove = useCallback((e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -maxTilt;
        const rotateY = ((x - centerX) / centerX) * maxTilt;

        setTransform({
            rotateX,
            rotateY,
            scale,
        });
    }, [maxTilt, scale]);

    const handleMouseLeave = useCallback(() => {
        setTransform({
            rotateX: 0,
            rotateY: 0,
            scale: 1,
        });
    }, []);

    const style = {
        transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
        transition: `transform ${speed}ms ease-out`,
    };

    return {
        ref,
        style,
        handlers: {
            onMouseMove: handleMouseMove,
            onMouseLeave: handleMouseLeave,
        },
    };
}

export default useMagneticButton;
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box } from '@mui/material';

/**
 * CursorGlow - Custom cursor glow effect
 * Creates a glowing cursor that follows the mouse (desktop only)
 *
 * @param {Object} props
 * @param {string} props.color - Glow color
 * @param {number} props.size - Size of the glow in pixels
 * @param {number} props.fuzz - Blur amount in pixels
 * @param {boolean} props.enabled - Whether to show the cursor
 */
function CursorGlow({
    color = 'primary',
    size = 300,
    fuzz = 100,
    enabled = true,
}) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        // Check if touch device
        const checkTouch = () => {
            setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
        };
        checkTouch();

        // Track mouse position
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        // Hide on mouse leave
        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseleave', handleMouseLeave);
        document.body.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [isVisible]);

    // Don't render on touch devices or when disabled
    if (isTouchDevice || !enabled) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.15 }}
                    style={{
                        position: 'fixed',
                        left: mousePosition.x - size / 2,
                        top: mousePosition.y - size / 2,
                        width: size,
                        height: size,
                        borderRadius: '50%',
                        background: color === 'primary'
                            ? 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%)'
                            : `radial-gradient(circle, ${color} 0%, transparent 70%)`,
                        filter: `blur(${fuzz / 3}px)`,
                        pointerEvents: 'none',
                        zIndex: 9999,
                        mixBlendMode: 'screen',
                    }}
                />
            )}
        </AnimatePresence>
    );
}

/**
 * ScrollProgress - Progress bar at the top of the page
 * Shows how far the user has scrolled
 */
export function ScrollProgress({
    color = 'primary',
    height = 3,
}) {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: `${scrollProgress}%`,
                height: height,
                bgcolor: color === 'primary' ? 'primary.main' : color,
                zIndex: 10000,
                transition: 'width 0.1s ease-out',
            }}
        />
    );
}

export default CursorGlow;
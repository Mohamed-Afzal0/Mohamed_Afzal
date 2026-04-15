import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import { useReducedMotion } from '../../animations/hooks/useReducedMotion';

/**
 * PageLoader - Initial page loading animation
 * Shows a loading animation on first page visit
 *
 * @param {Object} props
 * @param {boolean} props.isLoading - Whether the page is loading
 * @param {Function} props.onLoadComplete - Callback when animation completes
 * @param {number} props.minDuration - Minimum display duration in ms
 * @param {string} props.logo - Logo text to display
 */
function PageLoader({
    isLoading = true,
    onLoadComplete,
    minDuration = 1500,
    logo = 'AFZAL.',
}) {
    const prefersReducedMotion = useReducedMotion();
    const [show, setShow] = useState(isLoading);

    useEffect(() => {
        if (!isLoading) {
            // Ensure minimum display time
            const timer = setTimeout(() => {
                setShow(false);
                if (onLoadComplete) onLoadComplete();
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [isLoading, onLoadComplete]);

    useEffect(() => {
        // Auto-hide after minimum duration
        const timer = setTimeout(() => {
            setShow(false);
            if (onLoadComplete) onLoadComplete();
        }, minDuration);
        return () => clearTimeout(timer);
    }, [minDuration, onLoadComplete]);

    // Static loader for reduced motion
    if (prefersReducedMotion) {
        return (
            <AnimatePresence>
                {show && (
                    <Box
                        sx={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            bgcolor: 'background.default',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 10000,
                        }}
                    >
                        <Typography variant="h4" fontWeight={800} color="primary">
                            {logo}
                        </Typography>
                    </Box>
                )}
            </AnimatePresence>
        );
    }

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'var(--bg-color, #fff)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10000,
                    }}
                >
                    {/* Logo Animation */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Typography
                            variant="h3"
                            fontWeight={800}
                            color="primary"
                            sx={{
                                fontFamily: 'monospace',
                                letterSpacing: '.15rem',
                            }}
                        >
                            {logo}
                        </Typography>
                    </motion.div>

                    {/* Loading Bar */}
                    <Box
                        sx={{
                            mt: 4,
                            width: 200,
                            height: 4,
                            bgcolor: 'action.hover',
                            borderRadius: 2,
                            overflow: 'hidden',
                        }}
                    >
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            style={{
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(90deg, transparent, #2563eb, transparent)',
                            }}
                        />
                    </Box>

                    {/* Loading Dots */}
                    <Box sx={{ mt: 3, display: 'flex', gap: 1.5 }}>
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0 }}
                                animate={{ scale: [0, 1, 0] }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                }}
                                style={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: '50%',
                                    background: '#2563eb',
                                }}
                            />
                        ))}
                    </Box>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

/**
 * LogoLoader - Minimalist logo-based loader
 */
export function LogoLoader({
    logo = 'AFZAL.',
    minDuration = 1000,
    onLoadComplete,
}) {
    const prefersReducedMotion = useReducedMotion();
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
            if (onLoadComplete) onLoadComplete();
        }, minDuration);
        return () => clearTimeout(timer);
    }, [minDuration, onLoadComplete]);

    if (prefersReducedMotion) {
        return null;
    }

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'inherit',
                        zIndex: 10000,
                    }}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.1, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Typography
                            variant="h2"
                            fontWeight={800}
                            color="primary"
                            sx={{
                                fontFamily: 'monospace',
                                letterSpacing: '.2rem',
                            }}
                        >
                            {logo}
                        </Typography>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default PageLoader;
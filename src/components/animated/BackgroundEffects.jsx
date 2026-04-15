import React from 'react';
import { Box, useTheme } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import smokeImg from '../../assets/smoke.png';

function BackgroundEffects() {
    const theme = useTheme();
    // Track global scroll
    const { scrollY } = useScroll();

    // Map scroll position to smoke opacity and scale. 
    // From 0 to 400px (scrolling down the home page), smoke fades in and grows.
    const smokeOpacity = useTransform(scrollY, [0, 400, 800], [0, 0.4, 0.7]);
    const smokeScale = useTransform(scrollY, [0, 800], [1, 1.3]);
    const smokeY = useTransform(scrollY, [0, 800], [100, 0]);

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1, // Behind all content
                pointerEvents: 'none',
                overflow: 'hidden',
            }}
        >
            {/* The Smoke Image Effect */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: smokeOpacity,
                    scale: smokeScale,
                    y: smokeY,
                    backgroundImage: `url(${smokeImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    mixBlendMode: theme.palette.mode === 'dark' ? 'screen' : 'multiply',
                    filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'contrast(0.6) brightness(1.2)',
                }}
            />

            {/* Readability Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    // Darkens or lightens the smoke heavily to keep text readable
                    background: theme.palette.mode === 'dark' 
                        ? 'rgba(15, 23, 42, 0.75)' 
                        : 'rgba(255, 255, 255, 0.75)',
                    backdropFilter: 'blur(8px)',
                }}
            />
        </Box>
    );
}

export default BackgroundEffects;

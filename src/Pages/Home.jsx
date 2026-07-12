import React, { useState, useEffect, useMemo } from 'react';
import { Box, Typography, useTheme, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import MagneticButton from '../components/animated/MagneticButton';
import { heroContent } from '../lib/heroContent';

function Home() {
    const theme = useTheme();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = window.setTimeout(() => setIsLoaded(true), 80);
        return () => window.clearTimeout(timer);
    }, []);

    const scrollIndicatorVariants = useMemo(() => ({
        initial: { opacity: 0, y: 0 },
        animate: {
            opacity: 1,
            y: [0, 8, 0],
            transition: {
                opacity: { duration: 0.35 },
                y: { duration: 1.2, repeat: Infinity, ease: 'easeInOut' },
            },
        },
    }), []);

    return (
        <Box
            component="section"
            id="home"
            sx={{
                minHeight: 'calc(100vh - 70px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                background: 'transparent',
                py: { xs: 8, md: 10 },
            }}
        >
            <Box
                sx={{
                    maxWidth: '1180px',
                    width: '100%',
                    px: { xs: 2.5, md: 4, lg: 6 },
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}
            >
                <AnimatePresence>
                    {isLoaded && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.45 }}
                            style={{ width: '100%' }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.55, ease: 'easeOut' }}
                            >
                                <Typography
                                    variant="overline"
                                    sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        mb: 2.5,
                                        px: 1.5,
                                        py: 0.75,
                                        borderRadius: '999px',
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        color: 'text.secondary',
                                        letterSpacing: '0.28em',
                                        fontWeight: 700,
                                        backdropFilter: 'blur(14px)',
                                        backgroundColor: 'rgba(255,255,255,0.04)',
                                    }}
                                >
                                    <Box component="span" sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main' }} />
                                    {heroContent.eyebrow}
                                </Typography>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
                                sx={{ mb: 2.5 }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 800,
                                        fontSize: { xs: '2.6rem', sm: '4rem', md: '5.4rem', lg: '6.3rem' },
                                        lineHeight: 0.95,
                                        letterSpacing: '-0.03em',
                                        color: 'text.primary',
                                        maxWidth: '980px',
                                        mx: 'auto',
                                        textWrap: 'balance',
                                    }}
                                >
                                    {heroContent.headline}
                                </Typography>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.16, ease: 'easeOut' }}
                            >
                                <Typography
                                    sx={{
                                        maxWidth: '760px',
                                        mx: 'auto',
                                        mb: 4,
                                        fontSize: { xs: '1rem', md: '1.15rem' },
                                        lineHeight: 1.7,
                                        color: 'text.secondary',
                                    }}
                                >
                                    {heroContent.description}
                                </Typography>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.22, ease: 'easeOut' }}
                            >
                                <Box sx={{ display: 'flex', gap: { xs: 1.5, sm: 2.2 }, justifyContent: 'center', flexWrap: 'wrap' }}>
                                    <MagneticButton strength={0.24} radius={140}>
                                        <Button
                                            component="a"
                                            href="#contact"
                                            variant="contained"
                                            size="large"
                                            sx={{
                                                borderRadius: '999px',
                                                textTransform: 'none',
                                                letterSpacing: '0.02em',
                                                fontWeight: 700,
                                                px: { xs: 3.2, sm: 4.2 },
                                                py: { xs: 1.2, sm: 1.4 },
                                                fontSize: { xs: '0.95rem', sm: '1rem' },
                                                color: '#fff',
                                                background: `linear-gradient(135deg, ${theme.palette.primary.main}, #4f46e5)`,
                                                boxShadow: `0 16px 34px -16px ${theme.palette.primary.main}`,
                                                transition: 'transform 180ms ease, box-shadow 180ms ease',
                                                '&:hover': {
                                                    transform: 'translateY(-2px)',
                                                    boxShadow: `0 18px 38px -14px ${theme.palette.primary.main}`,
                                                },
                                            }}
                                        >
                                            {heroContent.primaryCta}
                                        </Button>
                                    </MagneticButton>

                                    <Button
                                        component="a"
                                        href="#projects"
                                        variant="outlined"
                                        size="large"
                                        sx={{
                                            borderRadius: '999px',
                                            textTransform: 'none',
                                            letterSpacing: '0.02em',
                                            fontWeight: 700,
                                            px: { xs: 3.2, sm: 4.2 },
                                            py: { xs: 1.2, sm: 1.4 },
                                            fontSize: { xs: '0.95rem', sm: '1rem' },
                                            borderColor: 'divider',
                                            color: 'text.primary',
                                            backgroundColor: 'rgba(255,255,255,0.03)',
                                            backdropFilter: 'blur(10px)',
                                            '&:hover': {
                                                borderColor: 'primary.main',
                                                color: 'primary.main',
                                                backgroundColor: 'rgba(37, 99, 235, 0.06)',
                                            },
                                        }}
                                    >
                                        {heroContent.secondaryCta}
                                    </Button>
                                </Box>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Box>

            <AnimatePresence>
                {isLoaded && (
                    <motion.div
                        variants={scrollIndicatorVariants}
                        initial="initial"
                        animate="animate"
                        style={{
                            position: 'absolute',
                            bottom: 18,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            cursor: 'pointer',
                        }}
                        onClick={() => {
                            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                color: 'text.secondary',
                            }}
                        >
                            <Typography variant="caption" sx={{ mb: 1.2, letterSpacing: 0.24, textTransform: 'uppercase' }}>
                                Scroll
                            </Typography>
                            <KeyboardArrowDownIcon />
                        </Box>
                    </motion.div>
                )}
            </AnimatePresence>
        </Box>
    );
}

export default Home;
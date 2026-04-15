import React, { useState, useEffect } from 'react';
import { Box, Typography, useTheme, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import MagneticButton from '../components/animated/MagneticButton';
import { useReducedMotion } from '../animations/hooks/useReducedMotion';

function Home() {
    const theme = useTheme();
    const prefersReducedMotion = useReducedMotion();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Small delay to trigger entrance animations
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // Scroll indicator animation variants
    const scrollIndicatorVariants = {
        initial: { opacity: 0, y: 0 },
        animate: {
            opacity: 1,
            y: [0, 8, 0],
            transition: {
                opacity: { duration: 0.5 },
                y: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
            },
        },
    };

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
                // Gradient background removed so 3D Canvas shines through
                background: 'transparent',
            }}
        >
            {/* Main Content */}
            <Box
                sx={{
                    maxWidth: '1200px',
                    mx: 'auto',
                    textAlign: 'center',
                    px: { xs: 2, md: 4, lg: 6 },
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <AnimatePresence>
                    {isLoaded && (
                        <motion.div
                            initial="hidden"
                            animate="show"
                            variants={{
                                hidden: { opacity: 0 },
                                show: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
                                }
                            }}
                            style={{ perspective: '1000px' }}
                        >
                            <Box sx={{ overflow: 'hidden', pb: 1, mb: { xs: -1, md: -2 } }}>
                                <motion.div variants={{
                                    hidden: { opacity: 0, y: 100, rotateX: -20 },
                                    show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 1.2, ease: [0.19, 1.0, 0.22, 1.0] } }
                                }}>
                                    <Typography
                                        sx={{
                                            fontWeight: 900,
                                            fontSize: { xs: '3.5rem', sm: '5.5rem', md: '7.5rem', lg: '9rem' },
                                            lineHeight: 0.9,
                                            letterSpacing: '-0.03em',
                                            color: 'text.primary',
                                            textTransform: 'uppercase',
                                            cursor: 'default',
                                        }}
                                    >
                                        Building
                                    </Typography>
                                </motion.div>
                            </Box>

                            <Box sx={{ overflow: 'hidden', pb: 1, mb: { xs: -1, md: -2 } }}>
                                <motion.div variants={{
                                    hidden: { opacity: 0, y: 100, rotateX: -20 },
                                    show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 1.2, ease: [0.19, 1.0, 0.22, 1.0] } }
                                }}>
                                    <Typography
                                        sx={{
                                            fontWeight: 900,
                                            fontSize: { xs: '3.5rem', sm: '5.5rem', md: '7.5rem', lg: '9rem' },
                                            lineHeight: 0.9,
                                            letterSpacing: '-0.03em',
                                            textTransform: 'uppercase',
                                            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #2e2be2ff 50%, ${theme.palette.secondary?.main || '#000000ff'} 100%)`,
                                            backgroundSize: '200% auto',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            color: 'transparent',
                                            display: 'inline-block',
                                            cursor: 'default',
                                            animation: 'gradientReveal 8s ease infinite',
                                            '@keyframes gradientReveal': {
                                                '0%': { backgroundPosition: '0% 50%' },
                                                '50%': { backgroundPosition: '100% 50%' },
                                                '100%': { backgroundPosition: '0% 50%' },
                                            }
                                        }}
                                    >
                                        Future
                                    </Typography>

                                    {/* Text Glow Effect */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            width: '100%',
                                            height: '100%',
                                            background: `radial-gradient(circle, ${theme.palette.primary.main}33 0%, transparent 70%)`,
                                            filter: 'blur(60px)',
                                            zIndex: -1,
                                            animation: 'glowPulse 4s ease-in-out infinite',
                                            '@keyframes glowPulse': {
                                                '0%, 100%': { opacity: 0.5, transform: 'translate(-50%, -50%) scale(1)' },
                                                '50%': { opacity: 0.8, transform: 'translate(-50%, -50%) scale(1.1)' },
                                            }
                                        }}
                                    />
                                </motion.div>
                            </Box>

                            <Box sx={{ overflow: 'hidden', mt: { xs: 3, md: 5 }, mb: { xs: 2, md: 3 } }}>
                                <motion.div variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 1.0, 0.25, 1.0] } }
                                }}>
                                    <Typography
                                        sx={{
                                            fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
                                            fontWeight: 500,
                                            letterSpacing: '0.4em',
                                            textTransform: 'uppercase',
                                            color: 'text.secondary',
                                            opacity: 0.9,
                                            fontFamily: "'Space Grotesk', 'Inter', sans-serif",
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: 2,
                                            '&::before, &::after': {
                                                content: '""',
                                                display: { xs: 'none', sm: 'block' },
                                                height: '1px',
                                                width: '50px',
                                                backgroundColor: 'text.secondary',
                                                opacity: 0.5
                                            }
                                        }}
                                    >
                                        Ever Evolving Ever Learning
                                    </Typography>
                                </motion.div>
                            </Box>


                            <motion.div variants={{
                                hidden: { opacity: 0, scale: 0.9, filter: 'blur(10px)' },
                                show: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.25, 1.0, 0.25, 1.0] } }
                            }}>
                                <Box sx={{ display: 'flex', gap: { xs: 2, sm: 3 }, justifyContent: 'center', flexWrap: 'wrap' }}>
                                    <MagneticButton strength={0.3} radius={150}>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            href="#contact"
                                            sx={{
                                                borderRadius: '50px',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.15em',
                                                fontWeight: 800,
                                                px: { xs: 4, sm: 5 },
                                                py: { xs: 1.5, sm: 2 },
                                                fontSize: { xs: '0.85rem', sm: '0.95rem' },
                                                color: '#fff',
                                                background: `linear-gradient(45deg, ${theme.palette.primary.main}, #2b37e2ff)`,
                                                boxShadow: `0 10px 30px -10px ${theme.palette.primary.main}`,
                                                overflow: 'hidden',
                                                position: 'relative',
                                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                                zIndex: 1,
                                                '&::before': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    top: 0, left: '-100%', width: '100%', height: '100%',
                                                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                                                    transition: 'all 0.6s ease',
                                                    zIndex: -1,
                                                },
                                                '&:hover::before': {
                                                    left: '100%'
                                                },
                                                '&:hover': {
                                                    boxShadow: `0 15px 40px -5px ${theme.palette.primary.main}`,
                                                    transform: 'translateY(-3px) scale(1.02)'
                                                },
                                            }}
                                        >
                                            Let's Talk
                                        </Button>
                                    </MagneticButton>

                                    <motion.div
                                        whileHover={!prefersReducedMotion ? { scale: 1.05 } : {}}
                                        whileTap={!prefersReducedMotion ? { scale: 0.95 } : {}}
                                    >
                                        <Button
                                            variant="outlined"
                                            size="large"
                                            href="#projects"
                                            sx={{
                                                borderRadius: '50px',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.15em',
                                                fontWeight: 800,
                                                px: { xs: 4, sm: 5 },
                                                py: { xs: 1.5, sm: 2 },
                                                fontSize: { xs: '0.85rem', sm: '0.95rem' },
                                                borderWidth: '2px',
                                                borderColor: 'text.primary',
                                                color: 'text.primary',
                                                backdropFilter: 'blur(10px)',
                                                backgroundColor: 'rgba(255,255,255,0.02)',
                                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                                '&:hover': {
                                                    borderWidth: '2px',
                                                    borderColor: 'text.primary',
                                                    backgroundColor: 'text.primary',
                                                    color: 'background.default',
                                                    transform: 'translateY(-3px)'
                                                },
                                            }}
                                        >
                                            Explore Work
                                        </Button>
                                    </motion.div>
                                </Box>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Box>

            {/* Scroll Indicator */}
            <AnimatePresence>
                {isLoaded && (
                    <motion.div
                        variants={scrollIndicatorVariants}
                        initial="initial"
                        animate="animate"
                        style={{
                            position: 'absolute',
                            bottom: 20,
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
                            <Typography
                                variant="caption"
                                sx={{ mb: 1.5, letterSpacing: 1, textTransform: 'uppercase' }}
                            >
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
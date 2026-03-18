import React, { useState, useEffect } from 'react';
import { Box, Typography, useTheme, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AnimatedSection from '../components/animated/AnimatedSection';
import TextReveal from '../components/animated/TextReveal';
import { FloatingOrb } from '../components/animated/FloatingElement';
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
                // Gradient background
                background: theme.palette.mode === 'light'
                    ? `linear-gradient(135deg, ${theme.palette.background.default} 0%, #e0e7ff 50%, ${theme.palette.background.default} 100%)`
                    : `linear-gradient(135deg, ${theme.palette.background.default} 0%, #0f172a 50%, ${theme.palette.background.default} 100%)`,
            }}
        >
            {/* Floating Background Orbs */}
            <FloatingOrb
                color="primary"
                size={400}
                blur={150}
                opacity={0.15}
                position={{ top: '5%', left: '5%' }}
                duration={6}
                delay={0}
                theme={theme}
            />
            <FloatingOrb
                color="secondary"
                size={300}
                blur={120}
                opacity={0.12}
                position={{ bottom: '10%', right: '10%' }}
                duration={8}
                delay={1}
                theme={theme}
            />
            <FloatingOrb
                color="accent"
                size={200}
                blur={100}
                opacity={0.1}
                position={{ top: '50%', right: '20%' }}
                duration={5}
                delay={2}
                theme={theme}
            />

            {/* Main Content */}
            <Box sx={{ maxWidth: '900px', mx: 'auto', textAlign: 'center', px: 3, position: 'relative', zIndex: 1 }}>
                <AnimatePresence>
                    {isLoaded && (
                        <AnimatedSection delay={0}>
                            <TextReveal
                                text="Building digital"
                                variant="word"
                                delay={0.2}
                                textStyle={{
                                    display: 'inline-block',
                                    fontWeight: 800,
                                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                                    color: 'text.primary',
                                    lineHeight: 1.2,
                                }}
                            />
                        </AnimatedSection>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {isLoaded && (
                        <AnimatedSection delay={0.3}>
                            <TextReveal
                                text="products, brands, and experience."
                                variant="word"
                                delay={0.4}
                                textStyle={{
                                    display: 'inline-block',
                                    fontWeight: 800,
                                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                                    color: theme.palette.primary.main,
                                    lineHeight: 1.2,
                                }}
                            />
                        </AnimatedSection>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {isLoaded && (
                        <AnimatedSection delay={0.6}>
                            <Typography
                                variant="h6"
                                color="text.secondary"
                                sx={{
                                    mt: 4,
                                    mb: 5,
                                    fontWeight: 400,
                                    maxWidth: '600px',
                                    mx: 'auto',
                                    lineHeight: 1.8,
                                }}
                            >
                                Hi, I'm Mohamed Afzal — a Full Stack Developer who designs and builds beautiful, performant, and user-centric web applications from backend to browser.
                            </Typography>
                        </AnimatedSection>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {isLoaded && (
                        <AnimatedSection delay={0.8}>
                            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                                <MagneticButton strength={0.2} radius={120}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        href="#contact"
                                        sx={{
                                            borderRadius: '30px',
                                            textTransform: 'none',
                                            fontWeight: 600,
                                            px: 4,
                                            py: 1.5,
                                            fontSize: '1rem',
                                            boxShadow: `0 8px 25px ${theme.palette.primary.main}40`,
                                            '&:hover': {
                                                boxShadow: `0 12px 35px ${theme.palette.primary.main}60`,
                                            },
                                        }}
                                    >
                                        Hire Me
                                    </Button>
                                </MagneticButton>

                                <motion.div
                                    whileHover={!prefersReducedMotion ? { scale: 1.05 } : {}}
                                    whileTap={!prefersReducedMotion ? { scale: 0.95 } : {}}
                                >
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        size="large"
                                        href="#projects"
                                        sx={{
                                            borderRadius: '30px',
                                            textTransform: 'none',
                                            fontWeight: 600,
                                            px: 4,
                                            py: 1.5,
                                            fontSize: '1rem',
                                            borderWidth: 2,
                                            '&:hover': {
                                                borderWidth: 2,
                                                backgroundColor: theme.palette.mode === 'dark'
                                                    ? 'rgba(37, 99, 235, 0.1)'
                                                    : 'rgba(37, 99, 235, 0.05)',
                                            },
                                        }}
                                    >
                                        View Projects
                                    </Button>
                                </motion.div>
                            </Box>
                        </AnimatedSection>
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
                            bottom: 40,
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
                                sx={{ mb: 1, letterSpacing: 1, textTransform: 'uppercase' }}
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
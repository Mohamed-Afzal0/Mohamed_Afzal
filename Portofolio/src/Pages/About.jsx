import React from 'react';
import { Box, Typography, useTheme, Container, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/animated/AnimatedSection';
import { useScrollAnimation } from '../animations/hooks/useScrollAnimation';
import { useReducedMotion } from '../animations/hooks/useReducedMotion';
import { scaleIn } from '../animations/variants/scale';
import { staggerContainer, staggerChild } from '../animations/variants/stagger';
import { fadeInLeft } from '../animations/variants/fade';
import meImage from '../assets/me.png';

// Skills data
const skills = [
    'React', 'JavaScript', 'TypeScript', 'Node.js',
    'Material UI', 'Tailwind CSS', 'Framer Motion',
    'HTML/CSS', 'Git', 'REST APIs', 'Responsive Design',
    'UI/UX Design', 'Node.js', 'MongoDB'
];

function About() {
    const theme = useTheme();
    const prefersReducedMotion = useReducedMotion();
    const { ref: imageRef, isInView: imageInView } = useScrollAnimation({ threshold: 0.3, once: true });
    const { ref: textRef, isInView: textInView } = useScrollAnimation({ threshold: 0.2, once: true });
    const { ref: skillsRef, isInView: skillsInView } = useScrollAnimation({ threshold: 0.3, once: true });

    return (
        <Box
            component="section"
            id="about"
            sx={{
                py: { xs: 10, md: 15 },
                backgroundColor: theme.palette.mode === 'light' ? theme.palette.background.paper : theme.palette.background.default,
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: { xs: 6, md: 10 } }}>
                    {/* Image Column */}
                    <Box sx={{ flex: '1 1 50%', maxWidth: { xs: '100%', md: '45%' }, position: 'relative' }}>
                        <motion.div
                            ref={imageRef}
                            initial={prefersReducedMotion ? {} : "hidden"}
                            animate={imageInView ? "visible" : "hidden"}
                            variants={scaleIn}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: { xs: -15, md: -20 },
                                        left: { xs: -15, md: -20 },
                                        right: { xs: 15, md: 20 },
                                        bottom: { xs: 15, md: 20 },
                                        border: `4px solid ${theme.palette.primary.main}`,
                                        borderRadius: '16px',
                                        zIndex: 0,
                                        transition: 'transform 0.4s ease',
                                    },
                                    '&:hover::before': {
                                        transform: 'translate(10px, 10px)',
                                    }
                                }}
                            >
                                <motion.div
                                    whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Box
                                        component="img"
                                        src={meImage}
                                        alt="Mohamed Afzal"
                                        sx={{
                                            width: '100%',
                                            height: 'auto',
                                            borderRadius: '16px',
                                            position: 'relative',
                                            zIndex: 1,
                                            boxShadow: theme.palette.mode === 'light'
                                                ? '0 20px 40px rgba(0,0,0,0.1)'
                                                : '0 20px 40px rgba(0,0,0,0.4)',
                                            display: 'block',
                                            transition: 'transform 0.4s ease',
                                            cursor: 'default',
                                        }}
                                    />
                                </motion.div>
                            </Box>
                        </motion.div>
                    </Box>

                    {/* Text Column */}
                    <Box sx={{ flex: '1 1 50%' }}>
                        <motion.div
                            ref={textRef}
                            initial={prefersReducedMotion ? {} : "hidden"}
                            animate={textInView ? "visible" : "hidden"}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.15,
                                        delayChildren: 0.1,
                                    }
                                }
                            }}
                        >
                            <motion.div variants={staggerChild}>
                                <Typography
                                    variant="h6"
                                    color="primary"
                                    fontWeight="bold"
                                    gutterBottom
                                    sx={{ textTransform: 'uppercase', letterSpacing: 1.5 }}
                                >
                                    About Me
                                </Typography>
                            </motion.div>

                            <motion.div variants={staggerChild}>
                                <Typography
                                    variant="h3"
                                    component="h2"
                                    fontWeight="800"
                                    sx={{ mb: 3, color: 'text.primary', fontSize: { xs: '2rem', md: '2.5rem' } }}
                                >
                                    Passionate Designer & Developer
                                </Typography>
                            </motion.div>

                            <motion.div variants={staggerChild}>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    paragraph
                                    sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}
                                >
                                    Hello! I'm Mohamed Afzal, a creative professional dedicated to building exceptional digital experiences. I bring together the logical world of code and the artistic realm of design to craft intuitive, user-centric interfaces.
                                </Typography>
                            </motion.div>

                            <motion.div variants={staggerChild}>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    paragraph
                                    sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}
                                >
                                    Whether it's developing robust web applications or designing visually stunning layouts, I focus on delivering quality and performance. My goal is to transform complex problems into simple, beautiful, and functional solutions.
                                </Typography>
                            </motion.div>

                            {/* Skills Section */}
                            <motion.div
                                ref={skillsRef}
                                initial={prefersReducedMotion ? {} : "hidden"}
                                animate={skillsInView ? "visible" : "hidden"}
                                variants={staggerContainer}
                            >
                                <Typography
                                    variant="subtitle1"
                                    fontWeight="bold"
                                    color="text.primary"
                                    sx={{ mb: 2 }}
                                >
                                    Skills & Technologies
                                </Typography>
                                <Stack
                                    direction="row"
                                    spacing={1}
                                    flexWrap="wrap"
                                    useFlexGap
                                    sx={{ gap: 1 }}
                                >
                                    {skills.map((skill, index) => (
                                        <motion.div key={skill} variants={staggerChild}>
                                            <Chip
                                                label={skill}
                                                sx={{
                                                    bgcolor: theme.palette.mode === 'dark'
                                                        ? 'rgba(255,255,255,0.05)'
                                                        : 'rgba(0,0,0,0.04)',
                                                    color: 'text.secondary',
                                                    fontWeight: 500,
                                                    px: 1,
                                                    '&:hover': {
                                                        bgcolor: theme.palette.primary.main,
                                                        color: '#fff',
                                                        transform: 'translateY(-2px)',
                                                    },
                                                    transition: 'all 0.2s ease',
                                                }}
                                            />
                                        </motion.div>
                                    ))}
                                </Stack>
                            </motion.div>
                        </motion.div>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default About;
import React, { useRef } from 'react';
import { Box, Typography, useTheme, Container, Chip, Stack, Grid } from '@mui/material';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../animations/hooks/useScrollAnimation';
import { useReducedMotion } from '../animations/hooks/useReducedMotion';
import { scaleIn } from '../animations/variants/scale';
import { staggerChild } from '../animations/variants/stagger';
import meImage from '../assets/me.png';

// ─── Data ─────────────────────────────────────────────────────────────────────
const softSkills = [
    { label: 'UI/UX Design', icon: '🎨' },
    { label: 'Responsive Design', icon: '📐' },
    { label: 'REST APIs', icon: '🔗' },
    { label: 'OOP', icon: '🧩' },
    { label: 'Problem Solving', icon: '💡' },
    { label: 'Team Collaboration', icon: '🤝' },
    { label: 'Git & Version Control', icon: '🌿' },
    { label: 'Agile / Scrum', icon: '⚡' },
    { label: 'Clean Code', icon: '✨' },
];

const technologies = [
    { name: 'React', category: 'Frontend', color: '#61DAFB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'JavaScript', category: 'Language', color: '#F7DF1E', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Node.js', category: 'Backend', color: '#339933', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Java', category: 'Language', color: '#ED8B00', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', category: 'Language', color: '#3776AB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'MySQL', category: 'Database', color: '#4479A1', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'React Native', category: 'Mobile', color: '#61DAFB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'HTML / CSS', category: 'Frontend', color: '#E34F26', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'Material UI', category: 'UI Lib', color: '#007FFF', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
    { name: 'Git', category: 'DevOps', color: '#F05032', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Github', category: 'DevOps', color: '#F05032', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Expo', category: 'Mobile', color: '#9b59b6', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg' },
    { name: 'VS Code', category: 'Tool', color: '#007ACC', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'IntelliJ IDEA', category: 'Tool', color: '#007ACC', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg' },
    { name: 'Firebase', category: 'Backend', color: '#FFCA28', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'Figma', category: 'Design', color: '#FF4081', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Canva', category: 'Design', color: '#FF4081', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
    { name: 'Docker', category: 'DevOps', color: '#2496ED', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Linux', category: 'OS', color: '#2496ED', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
];

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];

// ─── Scroll Arrow ─────────────────────────────────────────────────────────────
function ScrollArrow({ color }) {
    return (
        <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
        >
            <Box sx={{
                width: 32, height: 32,
                border: `1.5px solid ${color}55`,
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
                <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                >
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path d="M6.5 2.5v8M2.5 7.5l4 4 4-4" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.div>
            </Box>
            <Typography variant="caption" sx={{ color, opacity: 0.35, fontSize: '0.58rem', letterSpacing: 3, textTransform: 'uppercase' }}>
                scroll
            </Typography>
        </motion.div>
    );
}

// ─── Tech Card (compact) ──────────────────────────────────────────────────────
function TechCard({ tech, index, inView, isDark, primaryColor }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9, rotateY: 15 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1, rotateY: 0 } : {}}
            transition={{
                duration: 0.8,
                delay: index * 0.04,
                ease: EASE_OUT_EXPO
            }}
            whileHover={{
                y: -10,
                scale: 1.05,
                rotateY: 12,
                rotateX: -5,
                transition: { duration: 0.3 }
            }}
            style={{ height: '100%', perspective: '1000px' }}
        >
            <Box sx={{
                position: 'relative',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                py: 2.5,
                px: 1,
                borderRadius: '20px',
                cursor: 'pointer',
                background: isDark
                    ? 'linear-gradient(135deg, rgba(30,41,59,0.7), rgba(15,23,42,0.8))'
                    : 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(248,250,252,0.85))',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`,
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                boxShadow: isDark ? '0 10px 30px rgba(0,0,0,0.3)' : '0 10px 30px rgba(0,0,0,0.05)',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0, left: 0, right: 0,
                    height: 3,
                    background: `linear-gradient(90deg, transparent, ${tech.color}, transparent)`,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                },
                '&:hover': {
                    borderColor: `${tech.color}66`,
                    boxShadow: `0 20px 40px ${tech.color}15, 0 0 0 1px ${tech.color}15`,
                    '&::before': { opacity: 1 },
                },
            }}>
                {/* Brand-color glow dot */}
                <Box sx={{
                    position: 'absolute', top: 12, right: 12,
                    width: 6, height: 6, borderRadius: '50%',
                    bgcolor: tech.color, opacity: 0.8,
                    boxShadow: `0 0 10px ${tech.color}`,
                    zIndex: 1,
                }} />

                <Box
                    component="img"
                    src={tech.logo}
                    alt={tech.name}
                    sx={{
                        width: 40, height: 40,
                        mb: 0.5,
                        objectFit: 'contain',
                        filter: `drop-shadow(0 4px 8px ${tech.color}33)`,
                        position: 'relative', zIndex: 1,
                        transition: 'transform 0.3s ease',
                    }}
                    onError={(e) => { e.target.style.display = 'none'; }}
                />
                <Typography
                    variant="caption"
                    fontWeight={800}
                    align="center"
                    sx={{ fontSize: '0.75rem', color: 'text.primary', lineHeight: 1.2, position: 'relative', zIndex: 1 }}
                >
                    {tech.name}
                </Typography>
                <Typography
                    variant="caption"
                    sx={{
                        fontSize: '0.6rem',
                        color: tech.color,
                        fontWeight: 900,
                        letterSpacing: 1,
                        textTransform: 'uppercase',
                        position: 'relative',
                        zIndex: 1,
                        opacity: 0.85
                    }}
                >
                    {tech.category}
                </Typography>

                {/* Background radial glow on hover */}
                <Box sx={{
                    position: 'absolute',
                    inset: 0,
                    background: `radial-gradient(circle at 50% 120%, ${tech.color}15, transparent 70%)`,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    '.MuiBox-root:hover &': { opacity: 1 }
                }} />
            </Box>
        </motion.div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────
function About() {
    const theme = useTheme();
    const prefersReducedMotion = useReducedMotion();
    const isDark = theme.palette.mode === 'dark';
    const primary = theme.palette.primary.main;

    // Hero refs
    const { ref: imageRef, isInView: imageInView } = useScrollAnimation({ threshold: 0.3, once: true });
    const { ref: textRef, isInView: textInView } = useScrollAnimation({ threshold: 0.2, once: true });

    // Skills & Tech section ref
    const skillsPageRef = useRef(null);
    const skillsPageInView = useInView(skillsPageRef, { once: true, amount: 0.1 });

    return (
        <Box component="div" id="about">

            {/* ══════════════════════════════════════════════
                PAGE 1 — Hero
            ══════════════════════════════════════════════ */}
            <Box
                component="section"
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    py: { xs: 10, md: 15 },
                    backgroundColor: 'transparent',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <Container maxWidth="lg" sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: { xs: 5, md: 8 },
                        width: '100%',
                        maxWidth: 980,
                        mx: 'auto',
                    }}>
                        {/* Photo Container */}
                        <Box sx={{ flex: '1 1 0', maxWidth: { md: 450 }, width: { xs: '85%', sm: '60%', md: 'auto' }, mx: 'auto', position: 'relative' }}>
                            <motion.div
                                ref={imageRef}
                                initial={prefersReducedMotion ? {} : 'hidden'}
                                animate={imageInView ? 'visible' : 'hidden'}
                                variants={scaleIn}
                            >
                                <Box sx={{
                                    position: 'relative',
                                    p: 1.5,
                                    borderRadius: '30px',
                                    background: isDark ? 'rgba(15,23,42,0.8)' : 'rgba(255,255,255,0.9)',
                                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)'}`,
                                    backdropFilter: 'blur(10px)',
                                    boxShadow: isDark ? '0 30px 60px rgba(0,0,0,0.6)' : '0 30px 60px rgba(0,0,0,0.15)',
                                    '&::before': {
                                        content: '""', position: 'absolute',
                                        inset: -2,
                                        borderRadius: '32px',
                                        padding: '2px',
                                        background: `linear-gradient(135deg, ${primary}, transparent, ${primary}44)`,
                                        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                        maskComposite: 'exclude',
                                        opacity: 0.5,
                                    },
                                }}>
                                    <motion.div
                                        whileHover={{ scale: 1.02, rotate: -1 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                    >
                                        <Box
                                            component="img"
                                            src={meImage}
                                            alt="Mohamed Afzal"
                                            sx={{
                                                width: '100%',
                                                height: 'auto',
                                                maxHeight: { md: '56vh' },
                                                objectFit: 'cover',
                                                borderRadius: '22px',
                                                position: 'relative',
                                                zIndex: 1,
                                                display: 'block',
                                            }}
                                        />
                                    </motion.div>

                                    {/* Decorative Elements */}
                                    <Box sx={{
                                        position: 'absolute', bottom: -20, right: -20,
                                        width: 80, height: 80, borderRadius: '20px',
                                        background: primary, opacity: 0.1, zIndex: 0,
                                        filter: 'blur(15px)',
                                    }} />
                                </Box>
                            </motion.div>
                        </Box>

                        {/* Text */}
                        <Box sx={{ flex: '1 1 0', maxWidth: { md: 500 } }}>
                            <motion.div
                                ref={textRef}
                                initial={prefersReducedMotion ? {} : 'hidden'}
                                animate={textInView ? 'visible' : 'hidden'}
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } }
                                }}
                            >
                                <motion.div variants={staggerChild}>
                                    <Typography variant="overline" color="primary" fontWeight="bold" sx={{ letterSpacing: 3, fontSize: '0.7rem' }}>
                                        About Me
                                    </Typography>
                                </motion.div>

                                <motion.div variants={staggerChild}>
                                    <Typography variant="h3" component="h2" fontWeight={900}
                                        sx={{
                                            mb: 2, mt: 0.5,
                                            fontSize: { xs: '2rem', md: '3rem' },
                                            lineHeight: 1.1,
                                            color: 'text.primary',
                                            letterSpacing: '-0.02em',
                                            '& span': {
                                                background: `linear-gradient(135deg, ${primary} 30%, ${theme.palette.secondary?.main || '#60a5fa'} 90%)`,
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                            }
                                        }}>
                                        Passionate <span>Full Stack</span><br />Designer & Developer
                                    </Typography>
                                </motion.div>

                                <motion.div variants={staggerChild}>
                                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem', lineHeight: 1.8, mb: 1.5 }}>
                                        Hello! I'm <strong>Mohamed Afzal</strong>, a Full Stack Developer and creative professional dedicated to building exceptional digital experiences. I bridge backend logic with intuitive front-end design to craft seamless, user-centric applications.
                                    </Typography>
                                </motion.div>

                                <motion.div variants={staggerChild}>
                                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem', lineHeight: 1.8, mb: 3 }}>
                                        Whether it's developing robust web applications or designing visually stunning layouts, I deliver quality and performance — transforming complex problems into beautiful, functional solutions.
                                    </Typography>
                                </motion.div>

                                {/* Stats */}
                                <motion.div variants={staggerChild}>
                                    <Grid container spacing={2} sx={{ mt: 1 }}>
                                        {[
                                            { value: '5+', label: 'Projects', icon: '🚀' },
                                            { value: '12+', label: 'Tech Stack', icon: '🛠️' },
                                            { value: '100%', label: 'Passion', icon: '🔥' },
                                        ].map(({ value, label, icon }, i) => (
                                            <Grid item xs={4} key={label}>
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={textInView ? { opacity: 1, y: 0 } : {}}
                                                    transition={{ delay: 0.6 + i * 0.1, ease: EASE_OUT_EXPO, duration: 0.5 }}
                                                    whileHover={{ y: -5 }}
                                                >
                                                    <Box sx={{
                                                        textAlign: 'center',
                                                        p: 1.5,
                                                        borderRadius: '16px',
                                                        background: isDark ? 'rgba(30,41,59,0.7)' : 'rgba(255,255,255,0.9)',
                                                        border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`,
                                                        transition: 'all 0.3s ease',
                                                        '&:hover': {
                                                            borderColor: `${primary}44`,
                                                            background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
                                                            boxShadow: `0 10px 20px ${primary}11`,
                                                        }
                                                    }}>
                                                        <Typography sx={{ fontSize: '1.2rem', mb: 0.5 }}>{icon}</Typography>
                                                        <Typography fontWeight={900} sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' }, color: primary, lineHeight: 1 }}>
                                                            {value}
                                                        </Typography>
                                                        <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>
                                                            {label}
                                                        </Typography>
                                                    </Box>
                                                </motion.div>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </motion.div>
                            </motion.div>
                        </Box>
                    </Box>
                </Container>

            </Box>

            {/* ══════════════════════════════════════════════
                PAGE 2 — Skills & Technologies (single page)
            ══════════════════════════════════════════════ */}
            <Box
                ref={skillsPageRef}
                component="section"
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    py: { xs: 10, md: 15 },
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundColor: 'transparent',
                }}
            >
                {/* Dot-grid background */}
                <Box sx={{
                    position: 'absolute', inset: 0,
                    backgroundImage: isDark
                        ? 'radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)'
                        : 'radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)',
                    backgroundSize: '26px 26px',
                    pointerEvents: 'none',
                }} />
                {/* Corner accent glows */}
                <Box sx={{
                    position: 'absolute', bottom: '-10%', right: '-5%',
                    width: 380, height: 380, borderRadius: '50%',
                    background: `radial-gradient(circle, ${primary}14, transparent 70%)`,
                    pointerEvents: 'none',
                }} />
                <Box sx={{
                    position: 'absolute', top: '-8%', left: '-4%',
                    width: 300, height: 300, borderRadius: '50%',
                    background: `radial-gradient(circle, ${theme.palette.secondary?.main || primary}10, transparent 70%)`,
                    pointerEvents: 'none',
                }} />

                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: { xs: 4, md: 5 } }}>

                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        animate={skillsPageInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
                    >
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="overline" color="primary" fontWeight="800" sx={{ letterSpacing: 3, fontSize: '0.75rem' }}>
                                My Toolkit
                            </Typography>
                            <Typography variant="h3" fontWeight={900}
                                sx={{
                                    mt: 0.5,
                                    fontSize: { xs: '2.2rem', md: '3.2rem' },
                                    color: 'text.primary',
                                    lineHeight: 1.1,
                                    letterSpacing: '-0.02em'
                                }}>
                                Skills &{' '}
                                <Box component="span" sx={{
                                    background: `linear-gradient(135deg, ${primary} 30%, ${theme.palette.secondary?.main || '#60a5fa'} 90%)`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    position: 'relative',
                                    '&::after': {
                                        content: '""', position: 'absolute',
                                        left: 0, bottom: -5, width: '100%', height: '4px',
                                        background: `linear-gradient(90deg, ${primary}, transparent)`,
                                        borderRadius: 2,
                                    },
                                }}>
                                    Technologies
                                </Box>
                            </Typography>
                        </Box>
                    </motion.div>

                    {/* 2-column body */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: { xs: 4, md: 6 },
                        alignItems: { md: 'flex-start' },
                    }}>

                        {/* ── LEFT: Core Skills ── */}
                        <Box sx={{ flex: '0 0 auto', width: { xs: '100%', md: 260 } }}>
                            <motion.div
                                initial={{ opacity: 0, x: -28 }}
                                animate={skillsPageInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.2, ease: EASE_OUT_EXPO }}
                            >
                                {/* Label with decorative line */}
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                                    <Box sx={{ width: 22, height: 2, borderRadius: 1, bgcolor: primary }} />
                                    <Typography variant="caption" fontWeight={700} color="text.secondary"
                                        sx={{ textTransform: 'uppercase', letterSpacing: 2, fontSize: '0.65rem' }}>
                                        Core Skills
                                    </Typography>
                                </Box>

                                <Stack direction="column" spacing={1.5}>
                                    {softSkills.map((skill, i) => (
                                        <motion.div
                                            key={skill.label}
                                            initial={{ opacity: 0, x: -30 }}
                                            animate={skillsPageInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: EASE_OUT_EXPO }}
                                            whileHover={{ x: 10 }}
                                        >
                                            <Box sx={{
                                                display: 'flex', alignItems: 'center', gap: 2,
                                                px: 2.5, py: 1.5,
                                                borderRadius: '16px',
                                                background: isDark ? 'rgba(30,41,59,0.7)' : 'rgba(255,255,255,0.9)',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                '&:hover': {
                                                    borderColor: `${primary}66`,
                                                    background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.9)',
                                                    boxShadow: `0 10px 20px ${primary}15`,
                                                    '& .skill-dot': { opacity: 1, scale: 1.5 }
                                                },
                                            }}>
                                                <Typography sx={{ fontSize: '1.2rem', lineHeight: 1, transition: 'transform 0.3s' }}>{skill.icon}</Typography>
                                                <Typography variant="body2" fontWeight={700} sx={{ fontSize: '0.85rem', color: 'text.primary', letterSpacing: 0.5 }}>
                                                    {skill.label}
                                                </Typography>
                                                {/* Right decorative dot */}
                                                <Box className="skill-dot" sx={{ ml: 'auto', width: 6, height: 6, borderRadius: '50%', bgcolor: primary, opacity: 0.4, transition: 'all 0.3s' }} />
                                            </Box>
                                        </motion.div>
                                    ))}
                                </Stack>
                            </motion.div>
                        </Box>

                        {/* Divider (md only) */}
                        <Box sx={{
                            display: { xs: 'none', md: 'block' },
                            width: '1px',
                            alignSelf: 'stretch',
                            background: isDark
                                ? 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent)'
                                : 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.08), transparent)',
                        }} />

                        {/* ── RIGHT: Technologies ── */}
                        <Box sx={{ flex: 1 }}>
                            <motion.div
                                initial={{ opacity: 0, x: 28 }}
                                animate={skillsPageInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.25, ease: EASE_OUT_EXPO }}
                            >
                                {/* Label */}
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                                    <Box sx={{ width: 22, height: 2, borderRadius: 1, bgcolor: primary }} />
                                    <Typography variant="caption" fontWeight={700} color="text.secondary"
                                        sx={{ textTransform: 'uppercase', letterSpacing: 2, fontSize: '0.65rem' }}>
                                        Tools & Technologies
                                    </Typography>
                                </Box>

                                <Grid container spacing={1.5}>
                                    {technologies.map((tech, index) => (
                                        <Grid item xs={4} sm={3} md={3} key={tech.name}>
                                            <TechCard
                                                tech={tech}
                                                index={index}
                                                inView={skillsPageInView}
                                                isDark={isDark}
                                                primaryColor={primary}
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                            </motion.div>
                        </Box>
                    </Box>

                </Container>
            </Box>
        </Box>
    );
}

export default About;
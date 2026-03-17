import React from 'react';
import { Box, Typography, Container, Grid, Link as MuiLink, IconButton, useTheme, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { MagneticIcon } from '../components/animated/MagneticButton';
import { useReducedMotion } from '../animations/hooks/useReducedMotion';
import { useScrollAnimation } from '../animations/hooks/useScrollAnimation';
import { staggerContainer, staggerChild } from '../animations/variants/stagger';

function Footer() {
    const theme = useTheme();
    const prefersReducedMotion = useReducedMotion();
    const { ref, isInView } = useScrollAnimation({ threshold: 0.2, once: true });

    const footerLinkStyle = {
        color: 'text.secondary',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        display: 'inline-block',
        position: 'relative',
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -2,
            left: 0,
            width: 0,
            height: '1px',
            background: theme.palette.primary.main,
            transition: prefersReducedMotion ? 'none' : 'width 0.3s ease',
        },
        '&:hover': {
            color: 'primary.main',
            transform: 'translateX(5px)',
            '&::after': {
                width: '100%',
            },
        }
    };

    const socialLinks = [
        { icon: <LinkedInIcon fontSize="small" />, href: '#', label: 'LinkedIn' },
        { icon: <GitHubIcon fontSize="small" />, href: '#', label: 'GitHub' },
        { icon: <TwitterIcon fontSize="small" />, href: '#', label: 'Twitter' },
        { icon: <InstagramIcon fontSize="small" />, href: '#', label: 'Instagram' },
    ];

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const specialties = [
        'Frontend Development',
        'UX/UI Design',
        'Responsive Layouts',
        'Web Animations',
    ];

    return (
        <Box
            component="footer"
            ref={ref}
            sx={{
                bgcolor: theme.palette.mode === 'dark' ? '#0b1120' : '#f1f5f9',
                pt: { xs: 8, md: 10 },
                pb: 4,
                borderTop: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`,
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={prefersReducedMotion ? {} : "hidden"}
                    animate={isInView ? "visible" : "hidden"}
                    variants={staggerContainer}
                >
                    <Grid container spacing={6} sx={{ mb: 6 }}>
                        {/* Brand & Description */}
                        <Grid item xs={12} md={4}>
                            <motion.div variants={staggerChild}>
                                <Typography
                                    variant="h5"
                                    component="a"
                                    href="#home"
                                    sx={{
                                        fontFamily: 'monospace',
                                        fontWeight: 800,
                                        letterSpacing: '.15rem',
                                        color: 'primary.main',
                                        textDecoration: 'none',
                                        display: 'inline-block',
                                        mb: 2,
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: prefersReducedMotion ? 'none' : 'scale(1.05)',
                                        },
                                    }}
                                >
                                    AFZAL.
                                </Typography>
                            </motion.div>

                            <motion.div variants={staggerChild}>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8, maxWidth: '300px' }}>
                                    A passionate digital creator crafting beautiful and scalable web applications, blurring the lines between design and engineering.
                                </Typography>
                            </motion.div>

                            {/* Social Icons */}
                            <motion.div variants={staggerChild}>
                                <Box sx={{ display: 'flex', gap: 1.5 }}>
                                    {socialLinks.map((social, index) => (
                                        <motion.div
                                            key={social.label}
                                            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                                            transition={{ delay: 0.5 + index * 0.1 }}
                                        >
                                            <MagneticIcon strength={0.1} radius={50}>
                                                <IconButton
                                                    href={social.href}
                                                    target="_blank"
                                                    aria-label={social.label}
                                                    sx={{
                                                        color: 'text.secondary',
                                                        bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                                                        transition: 'all 0.3s',
                                                        '&:hover': {
                                                            bgcolor: 'primary.main',
                                                            color: '#fff',
                                                            transform: prefersReducedMotion ? 'none' : 'translateY(-3px) rotate(5deg)',
                                                        }
                                                    }}
                                                >
                                                    {social.icon}
                                                </IconButton>
                                            </MagneticIcon>
                                        </motion.div>
                                    ))}
                                </Box>
                            </motion.div>
                        </Grid>

                        {/* Quick Links */}
                        <Grid item xs={12} sm={4} md={3}>
                            <motion.div variants={staggerChild}>
                                <Typography variant="subtitle1" color="text.primary" fontWeight="bold" gutterBottom sx={{ mb: 3 }}>
                                    Explore
                                </Typography>
                            </motion.div>

                            <motion.div variants={staggerChild}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    {quickLinks.map((link, index) => (
                                        <motion.div
                                            key={link.name}
                                            initial={prefersReducedMotion ? {} : { opacity: 0, x: -10 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: 0.3 + index * 0.1 }}
                                        >
                                            <MuiLink href={link.href} sx={footerLinkStyle}>
                                                {link.name}
                                            </MuiLink>
                                        </motion.div>
                                    ))}
                                </Box>
                            </motion.div>
                        </Grid>

                        {/* Services/Expertise */}
                        <Grid item xs={12} sm={4} md={3}>
                            <motion.div variants={staggerChild}>
                                <Typography variant="subtitle1" color="text.primary" fontWeight="bold" gutterBottom sx={{ mb: 3 }}>
                                    Specialties
                                </Typography>
                            </motion.div>

                            <motion.div variants={staggerChild}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    {specialties.map((specialty, index) => (
                                        <motion.div
                                            key={specialty}
                                            initial={prefersReducedMotion ? {} : { opacity: 0, x: -10 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: 0.3 + index * 0.1 }}
                                        >
                                            <Typography variant="body2" color="text.secondary">
                                                {specialty}
                                            </Typography>
                                        </motion.div>
                                    ))}
                                </Box>
                            </motion.div>
                        </Grid>

                        {/* Contact Snippet */}
                        <Grid item xs={12} sm={4} md={2}>
                            <motion.div variants={staggerChild}>
                                <Typography variant="subtitle1" color="text.primary" fontWeight="bold" gutterBottom sx={{ mb: 3 }}>
                                    Say Hello
                                </Typography>
                            </motion.div>

                            <motion.div variants={staggerChild}>
                                <MuiLink href="mailto:afzalsfm@gmail.com" variant="body2" sx={{ color: 'text.secondary', textDecoration: 'none', display: 'block', mb: 1, transition: 'color 0.3s ease', '&:hover': { color: 'primary.main' } }}>
                                    afzalsfm@gmail.com
                                </MuiLink>
                            </motion.div>

                            <motion.div variants={staggerChild}>
                                <Typography variant="body2" color="text.secondary">
                                    Colombo, Sri Lanka.
                                </Typography>
                            </motion.div>
                        </Grid>
                    </Grid>

                    <motion.div
                        initial={prefersReducedMotion ? {} : { opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.8 }}
                    >
                        <Divider sx={{ borderColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', mb: 4 }} />

                        {/* Copyright Section */}
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
                            <Typography variant="body2" color="text.secondary">
                                © {new Date().getFullYear()} Mohamed Afzal. All rights reserved.
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 3 }}>
                                <MuiLink href="#" variant="body2" sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                                    Privacy Policy
                                </MuiLink>
                                <MuiLink href="#" variant="body2" sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                                    Terms of Service
                                </MuiLink>
                            </Box>
                        </Box>
                    </motion.div>
                </motion.div>
            </Container>
        </Box>
    );
}

export default Footer;
import React from 'react';
import { Box, Typography, Container, Grid, Link as MuiLink, IconButton, useTheme, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { MagneticIcon } from '../components/animated/MagneticButton';
import { useReducedMotion } from '../animations/hooks/useReducedMotion';
import { useScrollAnimation } from '../animations/hooks/useScrollAnimation';
import { staggerContainer, staggerChild } from '../animations/variants/stagger';
import Logo from '../components/Logo';

function Footer() {
    const theme = useTheme();
    const prefersReducedMotion = useReducedMotion();
    const { ref, isInView } = useScrollAnimation({ threshold: 0.2, once: true });

    const footerLinkStyle = {
        color: 'text.secondary',
        textDecoration: 'none',
        transition: 'all 0.25s ease',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.5,
        position: 'relative',
        fontWeight: 500,
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -2,
            left: 0,
            width: 0,
            height: '2px',
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
            transition: prefersReducedMotion ? 'none' : 'width 0.25s ease',
            borderRadius: '1px',
        },
        '&:hover': {
            color: 'primary.main',
            transform: 'translateX(4px)',
            '&::after': {
                width: '100%',
            },
        }
    };

    const socialLinks = [
        { icon: <LinkedInIcon fontSize="small" />, href: '#', label: 'LinkedIn' },
        { icon: <GitHubIcon fontSize="small" />, href: '#', label: 'GitHub' },
        { icon: <InstagramIcon fontSize="small" />, href: '#', label: 'Instagram' },
    ];

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const specialties = [
        'Full Stack Development',
        'UX/UI Design',
        'API Development',
        'Web Animations',
    ];

    return (
        <Box
            component="footer"
            ref={ref}
            sx={{
                bgcolor: theme.palette.mode === 'dark' ? '#0a0f1a' : '#f8fafc',
                pt: { xs: 4, md: 5 },
                pb: 2,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
                        : 'linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)',
                }
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={prefersReducedMotion ? {} : "hidden"}
                    animate={isInView ? "visible" : "hidden"}
                    variants={staggerContainer}
                >
                    <Grid container spacing={3} sx={{ mb: 3 }}>
                        {/* Brand & Description */}
                        <Grid item xs={12} md={4}>
                            <motion.div variants={staggerChild} style={{ marginBottom: '16px' }}>
                                <Logo size="md" href="#home" />
                            </motion.div>

                            <motion.div variants={staggerChild}>
                                <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8, maxWidth: '320px' }}>
                                    A passionate digital creator crafting beautiful and scalable web applications, blurring the lines between design and engineering.
                                </Typography>
                            </motion.div>

                        </Grid>

                        {/* Quick Links */}
                        <Grid item xs={6} sm={4} md={2}>
                            <motion.div variants={staggerChild}>
                                <Typography variant="subtitle2" color="text.primary" fontWeight="700" sx={{ mb: 2, textTransform: 'uppercase', letterSpacing: 1 }}>
                                    Explore
                                </Typography>
                            </motion.div>

                            <motion.div variants={staggerChild}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
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
                        <Grid item xs={6} sm={4} md={3}>
                            <motion.div variants={staggerChild}>
                                <Typography variant="subtitle2" color="text.primary" fontWeight="700" sx={{ mb: 2, textTransform: 'uppercase', letterSpacing: 1 }}>
                                    Specialties
                                </Typography>
                            </motion.div>

                            <motion.div variants={staggerChild}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    {specialties.map((specialty, index) => (
                                        <motion.div
                                            key={specialty}
                                            initial={prefersReducedMotion ? {} : { opacity: 0, x: -10 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: 0.3 + index * 0.1 }}
                                        >
                                            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                                                {specialty}
                                            </Typography>
                                        </motion.div>
                                    ))}
                                </Box>
                            </motion.div>
                        </Grid>

                        {/* Contact Snippet */}
                        <Grid item xs={12} sm={4} md={3}>
                            <motion.div variants={staggerChild}>
                                <Typography variant="subtitle2" color="text.primary" fontWeight="700" sx={{ mb: 2, textTransform: 'uppercase', letterSpacing: 1 }}>
                                    Get In Touch
                                </Typography>
                            </motion.div>

                            <motion.div variants={staggerChild}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                                            Email
                                        </Typography>
                                        <MuiLink
                                            href="mailto:afzalsfm@gmail.com"
                                            variant="body2"
                                            sx={{
                                                color: 'text.primary',
                                                textDecoration: 'none',
                                                fontWeight: 600,
                                                transition: 'color 0.25s ease',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: 0.5,
                                                '&:hover': {
                                                    color: 'primary.main',
                                                    '& .arrow-icon': {
                                                        transform: 'translate(2px, -2px)',
                                                    }
                                                }
                                            }}
                                        >
                                            afzalsfm@gmail.com
                                            <ArrowOutwardIcon sx={{ fontSize: 14, transition: 'transform 0.2s ease' }} className="arrow-icon" />
                                        </MuiLink>
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                                            Location
                                        </Typography>
                                        <Typography variant="body2" color="text.primary" fontWeight={600}>
                                            Colombo, Sri Lanka
                                        </Typography>
                                    </Box>
                                </Box>
                            </motion.div>
                        </Grid>
                    </Grid>

                    <motion.div
                        initial={prefersReducedMotion ? {} : { opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.8 }}
                    >
                        <Divider sx={{ borderColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)', mb: 2 }} />

                        {/* Copyright Section */}
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
                            <Typography variant="body2" color="text.secondary">
                                © {new Date().getFullYear()} Mohamed Afzal. All rights reserved.
                            </Typography>
                            
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    {socialLinks.map((social, _index) => (
                                        <IconButton
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            size="small"
                                            aria-label={social.label}
                                            sx={{
                                                color: 'text.secondary',
                                                transition: 'all 0.25s ease',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                    transform: 'translateY(-2px)',
                                                }
                                            }}
                                        >
                                            {social.icon}
                                        </IconButton>
                                    ))}
                                </Box>

                                <Box sx={{ display: 'flex', gap: 3 }}>
                                    <MuiLink href="#" variant="body2" sx={{ color: 'text.secondary', textDecoration: 'none', transition: 'color 0.25s ease', '&:hover': { color: 'primary.main' } }}>
                                        Privacy Policy
                                    </MuiLink>
                                    <MuiLink href="#" variant="body2" sx={{ color: 'text.secondary', textDecoration: 'none', transition: 'color 0.25s ease', '&:hover': { color: 'primary.main' } }}>
                                        Terms of Service
                                    </MuiLink>
                                </Box>
                            </Box>
                        </Box>
                    </motion.div>
                </motion.div>
            </Container>
        </Box>
    );
}

export default Footer;
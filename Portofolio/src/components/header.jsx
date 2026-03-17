import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, useTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ColorModeContext } from '../App';
import { useReducedMotion } from '../animations/hooks/useReducedMotion';
import MagneticButton from '../components/animated/MagneticButton';

function Header() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    const prefersReducedMotion = useReducedMotion();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{
                background: scrolled
                    ? theme.palette.mode === 'light'
                        ? 'rgba(255, 255, 255, 0.95)'
                        : 'rgba(15, 23, 42, 0.95)'
                    : theme.palette.mode === 'light'
                        ? 'rgba(255, 255, 255, 0.8)'
                        : 'rgba(15, 23, 42, 0.8)',
                backdropFilter: 'blur(10px)',
                borderBottom: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)'}`,
                color: 'text.primary',
                boxShadow: scrolled ? '2px 2px 10px 0px rgba(0,0,0,0.1)' : '2px 2px 5px 0px rgba(0,0,0,0.3)',
                transition: 'all 0.3s ease',
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', minHeight: '70px' }}>
                    {/* Logo / Brand Name */}
                    <motion.div
                        initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#home"
                            sx={{
                                fontFamily: 'monospace',
                                fontWeight: 800,
                                letterSpacing: '.15rem',
                                color: 'primary.main',
                                textDecoration: 'none',
                                display: 'inline-block',
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: prefersReducedMotion ? 'none' : 'scale(1.05)',
                                },
                            }}
                        >
                            AFZAL.
                        </Typography>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={prefersReducedMotion ? {} : { opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <Button
                                    href={item.href}
                                    sx={{
                                        color: 'text.secondary',
                                        fontWeight: 600,
                                        fontSize: '0.95rem',
                                        textTransform: 'none',
                                        position: 'relative',
                                        transition: '0.2s',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: 2,
                                            left: '50%',
                                            width: 0,
                                            height: '2px',
                                            background: theme.palette.primary.main,
                                            transition: prefersReducedMotion ? 'none' : 'all 0.3s ease',
                                            transform: 'translateX(-50%)',
                                        },
                                        '&:hover': {
                                            color: 'primary.main',
                                            backgroundColor: 'transparent',
                                            transform: prefersReducedMotion ? 'none' : 'translateY(-2px)',
                                            '&::after': {
                                                width: '60%',
                                            },
                                        },
                                    }}
                                >
                                    {item.name}
                                </Button>
                            </motion.div>
                        ))}
                    </Box>

                    {/* Right side actions */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        {/* Theme Toggle Button */}
                        <motion.div
                            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.4 }}
                        >
                            <IconButton
                                onClick={colorMode.toggleColorMode}
                                color="inherit"
                                sx={{
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: prefersReducedMotion ? 'none' : 'rotate(180deg)',
                                    },
                                }}
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.div
                                        key={theme.palette.mode}
                                        initial={prefersReducedMotion ? {} : { y: -20, opacity: 0, rotate: -90 }}
                                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                                        exit={prefersReducedMotion ? {} : { y: 20, opacity: 0, rotate: 90 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {theme.palette.mode === 'dark' ? (
                                            <LightModeIcon sx={{ color: 'text.secondary' }} />
                                        ) : (
                                            <DarkModeIcon sx={{ color: 'text.secondary' }} />
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </IconButton>
                        </motion.div>

                        {/* Hire Me Button */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <motion.div
                                initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.5 }}
                            >
                                <MagneticButton strength={0.15} radius={100}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        href="#contact"
                                        sx={{
                                            borderRadius: '24px',
                                            textTransform: 'none',
                                            fontWeight: 600,
                                            px: 3,
                                            boxShadow: '0 4px 14px 0 rgba(37, 99, 235, 0.39)',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0,
                                                left: '-100%',
                                                width: '100%',
                                                height: '100%',
                                                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                                                transition: prefersReducedMotion ? 'none' : 'left 0.5s ease',
                                            },
                                            '&:hover': {
                                                boxShadow: '0 6px 20px rgba(37, 99, 235, 0.23)',
                                                '&::before': {
                                                    left: '100%',
                                                },
                                            },
                                        }}
                                    >
                                        Hire Me
                                    </Button>
                                </MagneticButton>
                            </motion.div>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
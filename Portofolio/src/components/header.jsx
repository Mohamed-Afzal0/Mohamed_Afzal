import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, useTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ColorModeContext } from '../App';
import { useReducedMotion } from '../animations/hooks/useReducedMotion';
import MagneticButton from '../components/animated/MagneticButton';
import Logo from '../components/Logo';

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
                        ? 'rgba(255, 255, 255, 0.92)'
                        : 'rgba(15, 23, 42, 0.92)'
                    : theme.palette.mode === 'light'
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'rgba(15, 23, 42, 0.1)',
                backdropFilter: 'blur(30px)',
                borderBottom: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.06)'}`,
                color: 'text.primary',
                boxShadow: scrolled
                    ? theme.palette.mode === 'light'
                        ? '0 4px 20px rgba(0,0,0,0.06)'
                        : '0 4px 20px rgba(0,0,0,0.3)'
                    : 'none',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', minHeight: '70px' }}>
                    {/* Logo / Brand Name */}
                    <Logo size="sm" href="#home" showName={false} showSubtext={true} />

                    {/* Desktop Navigation */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
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
                                        fontSize: '0.9rem',
                                        textTransform: 'none',
                                        position: 'relative',
                                        px: 2,
                                        py: 1,
                                        borderRadius: '12px',
                                        transition: 'all 0.25s ease',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: '4px',
                                            left: '50%',
                                            width: 0,
                                            height: '2px',
                                            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                                            transition: prefersReducedMotion ? 'none' : 'all 0.25s ease',
                                            transform: 'translateX(-50%)',
                                            borderRadius: '1px',
                                        },
                                        '&:hover': {
                                            color: 'primary.main',
                                            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(37, 99, 235, 0.08)' : 'rgba(37, 99, 235, 0.05)',
                                            '&::after': {
                                                width: '50%',
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
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
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
                                    borderRadius: '12px',
                                    bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                                    '&:hover': {
                                        transform: prefersReducedMotion ? 'none' : 'rotate(180deg) scale(1.1)',
                                        bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
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
                                            borderRadius: '14px',
                                            textTransform: 'none',
                                            fontWeight: 600,
                                            px: 3,
                                            py: 1,
                                            fontSize: '0.9rem',
                                            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                                            boxShadow: `0 4px 20px ${theme.palette.primary.main}30`,
                                            position: 'relative',
                                            overflow: 'hidden',
                                            transition: 'all 0.3s ease',
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0,
                                                left: '-100%',
                                                width: '100%',
                                                height: '100%',
                                                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)',
                                                transition: prefersReducedMotion ? 'none' : 'left 0.5s ease',
                                            },
                                            '&:hover': {
                                                boxShadow: `0 6px 25px ${theme.palette.primary.main}45`,
                                                transform: prefersReducedMotion ? 'none' : 'translateY(-1px)',
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
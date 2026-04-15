import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, useTheme, Drawer } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { ColorModeContext } from '../App';
import { useReducedMotion } from '../animations/hooks/useReducedMotion';
import MagneticButton from '../components/animated/MagneticButton';
import Logo from '../components/Logo';
import DownloadCVButton from './DownloadCVButton';

function Header() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    const prefersReducedMotion = useReducedMotion();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

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

                        {/* Download CV Button */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <motion.div
                                initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.5 }}
                            >
                                <DownloadCVButton />
                            </motion.div>
                        </Box>

                        {/* Mobile Menu Button */}
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                onClick={() => setMobileMenuOpen(true)}
                                color="inherit"
                                sx={{
                                    transition: 'all 0.3s ease',
                                    borderRadius: '12px',
                                    bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                                    '&:hover': {
                                        transform: prefersReducedMotion ? 'none' : 'scale(1.1)',
                                        bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
                                    },
                                }}
                            >
                                <MenuIcon sx={{ color: 'text.secondary' }} />
                            </IconButton>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>

            {/* Mobile Navigation Drawer */}
            <Drawer
                anchor="right"
                open={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                sx={{
                    '& .MuiDrawer-paper': {
                        backgroundColor: theme.palette.mode === 'dark'
                            ? 'rgba(15, 23, 42, 0.98)'
                            : 'rgba(255, 255, 255, 0.98)',
                        backdropFilter: 'blur(10px)',
                        borderLeft: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                    }
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        p: 2,
                    }}
                >
                    {/* Close Button */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                        <IconButton
                            onClick={() => setMobileMenuOpen(false)}
                            color="inherit"
                            sx={{
                                transition: 'all 0.3s ease',
                                borderRadius: '12px',
                                bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                                '&:hover': {
                                    transform: prefersReducedMotion ? 'none' : 'rotate(90deg)',
                                    bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
                                },
                            }}
                        >
                            <CloseIcon sx={{ color: 'text.secondary' }} />
                        </IconButton>
                    </Box>

                    {/* Mobile Navigation Items */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        {navItems.map((item) => (
                            <motion.div
                                key={item.name}
                                initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Button
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    sx={{
                                        color: 'text.primary',
                                        fontWeight: 600,
                                        fontSize: '1rem',
                                        textTransform: 'none',
                                        justifyContent: 'flex-start',
                                        px: 2,
                                        py: 1.5,
                                        borderRadius: '12px',
                                        transition: 'all 0.25s ease',
                                        width: '100%',
                                        '&:hover': {
                                            color: 'primary.main',
                                            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(37, 99, 235, 0.1)' : 'rgba(37, 99, 235, 0.08)',
                                        },
                                    }}
                                >
                                    {item.name}
                                </Button>
                            </motion.div>
                        ))}
                    </Box>

                    {/* Mobile Download CV Button */}
                    <Box sx={{ display: 'flex', gap: 1, mt: 'auto', pt: 2, borderTop: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}` }}>
                        <motion.div
                            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            style={{ width: '100%' }}
                        >
                            <DownloadCVButton />
                        </motion.div>
                    </Box>
                </Box>
            </Drawer>
        </AppBar>
    );
}

export default Header;
import * as React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, useTheme } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ColorModeContext } from '../App';

function Header() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{
                background: theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(15, 23, 42, 0.8)',
                backdropFilter: 'blur(10px)',
                borderBottom: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)'}`,
                color: 'text.primary',
                boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.3)',
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', minHeight: '70px' }}>

                    {/* Logo / Brand Name */}
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            fontFamily: 'monospace',
                            fontWeight: 800,
                            letterSpacing: '.15rem',
                            color: 'primary.main',
                            textDecoration: 'none',
                        }}
                    >
                        AFZAL.
                    </Typography>

                    {/* Desktop Navigation */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
                        {[
                            { name: 'Home', href: '#home' },
                            { name: 'About', href: '#about' },
                            { name: 'Projects', href: '#projects' },
                            { name: 'Contact', href: '#contact' }
                        ].map((item) => (
                            <Button
                                key={item.name}
                                href={item.href}
                                sx={{
                                    color: 'text.secondary',
                                    fontWeight: 600,
                                    fontSize: '0.95rem',
                                    textTransform: 'none',
                                    transition: '0.2s',
                                    '&:hover': {
                                        color: 'primary.main',
                                        backgroundColor: 'transparent',
                                        transform: 'translateY(-2px)'
                                    }
                                }}
                            >
                                {item.name}
                            </Button>
                        ))}
                    </Box>

                    {/* Right side actions */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        {/* Theme Toggle Button */}
                        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                            {theme.palette.mode === 'dark' ? <LightModeIcon sx={{ color: 'text.secondary' }} /> : <DarkModeIcon sx={{ color: 'text.secondary' }} />}
                        </IconButton>

                        {/* Simple "Hire Me" button */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{
                                    borderRadius: '24px',
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    px: 3,
                                    boxShadow: '0 4px 14px 0 rgba(37, 99, 235, 0.39)',
                                    '&:hover': {
                                        boxShadow: '0 6px 20px rgba(37, 99, 235, 0.23)'
                                    }
                                }}
                            >
                                Hire Me
                            </Button>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
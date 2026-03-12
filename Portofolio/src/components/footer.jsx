import React from 'react';
import { Box, Typography, Container, Grid, Link as MuiLink, IconButton, useTheme, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
    const theme = useTheme();

    const footerLinkStyle = {
        color: 'text.secondary',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        display: 'inline-block',
        '&:hover': {
            color: 'primary.main',
            transform: 'translateX(5px)'
        }
    };

    const iconStyle = {
        color: 'text.secondary',
        bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
        transition: 'all 0.3s',
        '&:hover': {
            bgcolor: 'primary.main',
            color: '#fff',
            transform: 'translateY(-3px)'
        }
    };

    return (
        <Box
            component="footer"
            sx={{
                bgcolor: theme.palette.mode === 'dark' ? '#0b1120' : '#f1f5f9',
                pt: { xs: 8, md: 10 },
                pb: 4,
                borderTop: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={6} sx={{ mb: 6 }}>
                    {/* Brand & Description */}
                    <Grid item xs={12} md={4}>
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
                                mb: 2
                            }}
                        >
                            AFZAL.
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8, maxWidth: '300px' }}>
                            A passionate digital creator crafting beautiful and scalable web applications, blurring the lines between design and engineering.
                        </Typography>
                        
                        {/* Social Icons */}
                        <Box sx={{ display: 'flex', gap: 1.5 }}>
                            <IconButton href="#" target="_blank" aria-label="LinkedIn" sx={iconStyle}><LinkedInIcon fontSize="small" /></IconButton>
                            <IconButton href="#" target="_blank" aria-label="GitHub" sx={iconStyle}><GitHubIcon fontSize="small" /></IconButton>
                            <IconButton href="#" target="_blank" aria-label="Twitter" sx={iconStyle}><TwitterIcon fontSize="small" /></IconButton>
                            <IconButton href="#" target="_blank" aria-label="Instagram" sx={iconStyle}><InstagramIcon fontSize="small" /></IconButton>
                        </Box>
                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={12} sm={4} md={3}>
                        <Typography variant="subtitle1" color="text.primary" fontWeight="bold" gutterBottom sx={{ mb: 3 }}>
                            Explore
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <MuiLink href="#home" sx={footerLinkStyle}>Home</MuiLink>
                            <MuiLink href="#about" sx={footerLinkStyle}>About</MuiLink>
                            <MuiLink href="#projects" sx={footerLinkStyle}>Projects</MuiLink>
                            <MuiLink href="#contact" sx={footerLinkStyle}>Contact</MuiLink>
                        </Box>
                    </Grid>

                    {/* Services/Expertise */}
                    <Grid item xs={12} sm={4} md={3}>
                        <Typography variant="subtitle1" color="text.primary" fontWeight="bold" gutterBottom sx={{ mb: 3 }}>
                            Specialties
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Typography variant="body2" color="text.secondary">Frontend Development</Typography>
                            <Typography variant="body2" color="text.secondary">UX/UI Design</Typography>
                            <Typography variant="body2" color="text.secondary">Responsive Layouts</Typography>
                            <Typography variant="body2" color="text.secondary">Web Animations</Typography>
                        </Box>
                    </Grid>

                    {/* Contact Snippet */}
                    <Grid item xs={12} sm={4} md={2}>
                        <Typography variant="subtitle1" color="text.primary" fontWeight="bold" gutterBottom sx={{ mb: 3 }}>
                            Say Hello
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                            hi@mohamed.com
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            New York, NY
                        </Typography>
                    </Grid>
                </Grid>

                <Divider sx={{ borderColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', mb: 4 }} />

                {/* Copyright Section */}
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                        © {new Date().getFullYear()} Mohamed Afzal. All rights reserved.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 3 }}>
                        <MuiLink href="#" variant="body2" sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>Privacy Policy</MuiLink>
                        <MuiLink href="#" variant="body2" sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>Terms of Service</MuiLink>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;
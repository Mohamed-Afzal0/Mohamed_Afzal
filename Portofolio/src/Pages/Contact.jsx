import React, { useState } from 'react';
import { Box, Typography, useTheme, Container, Grid, TextField, Button, Paper, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from '@mui/material/Link';

function Contact() {
    const theme = useTheme();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent successfully! (Demo only)');
        setFormData({ name: '', email: '', message: '' });
    };

    // Styling for the glassy text inputs
    const textFieldStyles = {
        '& .MuiOutlinedInput-root': {
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.6)',
            borderRadius: '12px',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
            color: 'text.primary',
            '& fieldset': {
                borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                borderWidth: '1px',
            },
            '&:hover fieldset': {
                borderColor: theme.palette.primary.main,
            },
            '&.Mui-focused fieldset': {
                borderColor: theme.palette.primary.main,
                borderWidth: '2px',
                boxShadow: `0 0 10px ${theme.palette.primary.main}40`,
            },
        },
        '& .MuiInputLabel-root': {
            color: 'text.secondary',
            '&.Mui-focused': {
                color: theme.palette.primary.main,
            }
        }
    };

    return (
        <Box
            component="section"
            id="contact"
            sx={{
                minHeight: 'calc(100vh - 70px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                py: { xs: 8, md: 10 },
                position: 'relative',
                overflow: 'hidden',
                // Beautiful gradient background
                background: theme.palette.mode === 'light'
                    ? `linear-gradient(135deg, ${theme.palette.background.default} 0%, #e2e8f0 100%)`
                    : `linear-gradient(135deg, ${theme.palette.background.default} 0%, #0f172a 100%)`,
                '&::before': {
                    // Decorative glow orb top left
                    content: '""', position: 'absolute', top: '-10%', left: '-5%', width: '400px', height: '400px',
                    borderRadius: '50%',
                    background: theme.palette.primary.main,
                    filter: 'blur(150px)', zIndex: 0, opacity: theme.palette.mode === 'dark' ? 0.3 : 0.15,
                },
                '&::after': {
                    // Decorative glow orb bottom right
                    content: '""', position: 'absolute', bottom: '-10%', right: '-5%', width: '300px', height: '300px',
                    borderRadius: '50%',
                    background: '#ec4899', // A nice accent pink/purple
                    filter: 'blur(120px)', zIndex: 0, opacity: theme.palette.mode === 'dark' ? 0.2 : 0.1,
                }
            }}
        >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ mb: { xs: 5, md: 6 }, textAlign: 'center' }}>
                    <Typography variant="h6" color="primary" fontWeight="bold" gutterBottom sx={{ textTransform: 'uppercase', letterSpacing: 1.5 }}>
                        Get In Touch
                    </Typography>
                    <Typography variant="h3" component="h2" fontWeight="800" sx={{ color: 'text.primary', fontSize: { xs: '2rem', md: '2.5rem' } }}>
                        Let's Create Together
                    </Typography>
                </Box>

                {/* The Main Glassy Floating Window */}
                <Paper
                    elevation={0}
                    sx={{
                        borderRadius: '24px',
                        overflow: 'hidden',
                        background: theme.palette.mode === 'dark'
                            ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.7) 100%)'
                            : 'linear-gradient(145deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 100%)',
                        backdropFilter: 'blur(20px)',
                        border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.8)'}`,
                        boxShadow: theme.palette.mode === 'light'
                            ? '0 30px 60px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(255,255,255,0.5)'
                            : '0 30px 60px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.05)',
                        p: { xs: 3, md: 6 },
                    }}
                >
                    <Grid container spacing={6} alignItems="center">
                        {/* Left Side: Contact Information Array */}
                        <Grid item xs={12} md={5}>
                            <Typography variant="h4" fontWeight="800" gutterBottom>
                                Let's Talk
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ mb: 5, lineHeight: 1.7 }}>
                                Have a project in mind, need a frontend developer, or just want to say hi? I'd love to hear from you.
                            </Typography>

                            {/* 2-Column Info Details */}
                            <Grid container spacing={3} sx={{ mb: 5 }}>
                                <Grid item xs={12} sm={6}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Box sx={{ color: 'primary.main', display: 'flex' }}><EmailIcon fontSize="large" /></Box>
                                        <Box>
                                            <Typography variant="caption" color="text.secondary" display="block">Email</Typography>
                                            <Link href="mailto:afzalsfm@gmail.com" target="_blank" rel="noopener noreferrer">
                                                afzalsfm@gmail.com
                                            </Link>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Box sx={{ color: 'primary.main', display: 'flex' }}><LocationOnIcon fontSize="large" /></Box>
                                        <Box>
                                            <Typography variant="caption" color="text.secondary" display="block">Location</Typography>
                                            <Typography variant="body2" fontWeight="700">Colombo, Sri Lanka</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Box sx={{ color: 'primary.main', display: 'flex' }}><PhoneIcon fontSize="large" /></Box>
                                        <Box>
                                            <Typography variant="caption" color="text.secondary" display="block">Phone</Typography>
                                            <Typography variant="body2" fontWeight="700">+94 76 422 3404</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>

                            {/* Social Icons Row */}
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <IconButton component={Link} href="https://www.linkedin.com/in/mohamed-afzal-0b7372305/" target="_blank" rel="noopener noreferrer" sx={{ bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)', transition: 'all 0.3s', '&:hover': { bgcolor: 'primary.main', color: '#fff', transform: 'translateY(-3px)' } }}><LinkedInIcon /></IconButton>
                                <IconButton component={Link} href="https://www.instagram.com/_mohamed_afzal_/" target="_blank" rel="noopener noreferrer" sx={{ bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)', transition: 'all 0.3s', '&:hover': { bgcolor: 'primary.main', color: '#fff', transform: 'translateY(-3px)' } }}><InstagramIcon /></IconButton>
                                <IconButton component={Link} href="https://github.com/Mohamed-Afzal0" target="_blank" rel="noopener noreferrer" sx={{ bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)', transition: 'all 0.3s', '&:hover': { bgcolor: 'primary.main', color: '#fff', transform: 'translateY(-3px)' } }}><GitHubIcon /></IconButton>
                            </Box>
                        </Grid>

                        {/* Right Side: The Form */}
                        <Grid item xs={12} md={7}>
                            <Box component="form" onSubmit={handleSubmit} sx={{
                                background: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.5)',
                                p: { xs: 3, sm: 4 },
                                borderRadius: '20px',
                                border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,1)'}`
                            }}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField required fullWidth label="Your Name" name="name" value={formData.name} onChange={handleChange} variant="outlined" sx={textFieldStyles} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField required fullWidth type="email" label="Your Email" name="email" value={formData.email} onChange={handleChange} variant="outlined" sx={textFieldStyles} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField required fullWidth label="Subject" name="subject" variant="outlined" sx={textFieldStyles} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField required fullWidth multiline rows={4} label="Your Message" name="message" value={formData.message} onChange={handleChange} variant="outlined" sx={textFieldStyles} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            size="large"
                                            endIcon={<SendIcon />}
                                            sx={{
                                                py: 2,
                                                borderRadius: '12px',
                                                fontWeight: 'bold',
                                                letterSpacing: 1,
                                                background: `linear-gradient(45deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
                                                boxShadow: `0 8px 20px ${theme.palette.primary.main}50`,
                                                '&:hover': {
                                                    boxShadow: `0 12px 25px ${theme.palette.primary.main}80`,
                                                    transform: 'translateY(-2px)'
                                                },
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            Send Message
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
}

export default Contact;
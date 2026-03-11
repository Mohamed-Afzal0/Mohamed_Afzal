import React from 'react';
import { Box, Typography, useTheme, Container } from '@mui/material';
import meImage from '../assets/me.png';

function About() {
    const theme = useTheme();

    return (
        <Box
            component="section"
            id="about"
            sx={{
                py: { xs: 10, md: 15 },
                backgroundColor: theme.palette.mode === 'light' ? theme.palette.background.paper : theme.palette.background.default,
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: { xs: 6, md: 10 } }}>
                    {/* Image Column */}
                    <Box sx={{ flex: '1 1 50%', maxWidth: { xs: '100%', md: '45%' }, position: 'relative' }}>
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
                                    boxShadow: theme.palette.mode === 'light' ? '0 20px 40px rgba(0,0,0,0.1)' : '0 20px 40px rgba(0,0,0,0.4)',
                                    display: 'block',
                                    transition: 'transform 0.4s ease',
                                    cursor: 'default',
                                    '&:hover': {
                                        transform: 'translate(-5px, -5px)',
                                    }
                                }}
                            />
                        </Box>
                    </Box>

                    {/* Text Column */}
                    <Box sx={{ flex: '1 1 50%' }}>
                        <Typography
                            variant="h6"
                            color="primary"
                            fontWeight="bold"
                            gutterBottom
                            sx={{ textTransform: 'uppercase', letterSpacing: 1.5 }}
                        >
                            About Me
                        </Typography>
                        <Typography
                            variant="h3"
                            component="h2"
                            fontWeight="800"
                            sx={{ mb: 3, color: 'text.primary', fontSize: { xs: '2rem', md: '2.5rem' } }}
                        >
                            Passionate Designer & Developer
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            paragraph
                            sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}
                        >
                            Hello! I'm Mohamed Afzal, a creative professional dedicated to building exceptional digital experiences. I bring together the logical world of code and the artistic realm of design to craft intuitive, user-centric interfaces.
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            paragraph
                            sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
                        >
                            Whether it's developing robust web applications or designing visually stunning layouts, I focus on delivering quality and performance. My goal is to transform complex problems into simple, beautiful, and functional solutions.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default About;
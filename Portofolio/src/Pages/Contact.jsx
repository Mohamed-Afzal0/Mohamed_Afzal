import React, { useState } from 'react';
import { Box, Typography, useTheme, Container, Grid, TextField, Button, Paper, IconButton, Link as MuiLink, Divider } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import AnimatedSection from '../components/animated/AnimatedSection';
import { FloatingOrb } from '../components/animated/FloatingElement';
import { MagneticIcon } from '../components/animated/MagneticButton';
import { useReducedMotion } from '../animations/hooks/useReducedMotion';
import { staggerContainer, staggerChild } from '../animations/variants/stagger';

function Contact() {
    const theme = useTheme();
    const prefersReducedMotion = useReducedMotion();
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);

        // Reset after showing success
        setTimeout(() => {
            setIsSuccess(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
    };

    // Social links data
    const socialLinks = [
        { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/mohamed-afzal-0b7372305/', label: 'LinkedIn', color: '#0077B5' },
        { icon: <InstagramIcon />, href: 'https://www.instagram.com/_mohamed_afzal_/', label: 'Instagram', color: '#E4405F' },
        { icon: <GitHubIcon />, href: 'https://github.com/Mohamed-Afzal0', label: 'GitHub', color: '#333' },
    ];

    // Contact info data
    const contactInfo = [
        { icon: <EmailIcon />, label: 'Email', value: 'afzalsfm@gmail.com', href: 'mailto:afzalsfm@gmail.com', description: 'Drop me a line anytime' },
        { icon: <LocationOnIcon />, label: 'Location', value: 'Colombo, Sri Lanka', description: 'Available for remote work' },
        { icon: <PhoneIcon />, label: 'Phone', value: '+94 76 422 3404', description: 'Mon-Fri, 9am-6pm' },
    ];

    // Styling for the glassy text inputs
    const textFieldStyles = {
        '& .MuiOutlinedInput-root': {
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.7)',
            borderRadius: '16px',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
            color: 'text.primary',
            '& fieldset': {
                borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                borderWidth: '1px',
            },
            '&:hover': {
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.9)',
                '& fieldset': {
                    borderColor: theme.palette.primary.main,
                },
            },
            '&.Mui-focused': {
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 1)',
                '& fieldset': {
                    borderColor: theme.palette.primary.main,
                    borderWidth: '2px',
                },
            },
        },
        '& .MuiInputLabel-root': {
            color: 'text.secondary',
            fontWeight: 500,
            '&.Mui-focused': {
                color: theme.palette.primary.main,
            }
        },
        '& .MuiOutlinedInput-input': {
            padding: '16px 14px',
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
                py: { xs: 10, md: 12 },
                position: 'relative',
                overflow: 'hidden',
                background: 'transparent',
            }}
        >
            {/* Floating Background Elements */}
            <FloatingOrb
                color="primary"
                size={500}
                blur={180}
                opacity={0.12}
                position={{ top: '-15%', left: '-10%' }}
                duration={8}
                delay={0}
                theme={theme}
            />
            <FloatingOrb
                color="secondary"
                size={400}
                blur={150}
                opacity={0.1}
                position={{ bottom: '-10%', right: '-5%' }}
                duration={10}
                delay={2}
                theme={theme}
            />

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Section Header */}
                <AnimatedSection>
                    <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
                        <Typography
                            variant="overline"
                            sx={{
                                color: 'primary.main',
                                fontWeight: 700,
                                letterSpacing: 3,
                                display: 'inline-block',
                                mb: 2,
                                px: 2,
                                py: 0.5,
                                borderRadius: '20px',
                                bgcolor: theme.palette.mode === 'dark' ? 'rgba(37, 99, 235, 0.1)' : 'rgba(37, 99, 235, 0.08)',
                            }}
                        >
                            Get In Touch
                        </Typography>
                        <Typography
                            variant="h2"
                            component="h2"
                            fontWeight="800"
                            sx={{
                                color: 'text.primary',
                                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                                lineHeight: 1.2,
                            }}
                        >
                            Let's Work Together
                        </Typography>
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{ mt: 2, fontWeight: 400, maxWidth: '600px', mx: 'auto' }}
                        >
                            Have a project in mind? Let's create something amazing together.
                        </Typography>
                    </Box>
                </AnimatedSection>

                {/* Main Content — Single unified card */}
                <AnimatedSection delay={0.2}>
                    <motion.div
                        initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Paper
                            elevation={0}
                            sx={{
                                borderRadius: '28px',
                                background: theme.palette.mode === 'dark'
                                    ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.85) 0%, rgba(15, 23, 42, 0.92) 100%)'
                                    : 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.96) 100%)',
                                backdropFilter: 'blur(24px)',
                                border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.9)'}`,
                                boxShadow: theme.palette.mode === 'light'
                                    ? '0 24px 60px rgba(0,0,0,0.07), inset 0 0 0 1px rgba(255,255,255,0.6)'
                                    : '0 24px 60px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.04)',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            {/* Top gradient accent bar */}
                            <Box sx={{
                                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary?.main || theme.palette.primary.dark})`,
                            }} />

                            {/* Success Overlay */}
                            <AnimatePresence>
                                {isSuccess && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        style={{
                                            position: 'absolute', inset: 0, zIndex: 10,
                                            display: 'flex', flexDirection: 'column',
                                            alignItems: 'center', justifyContent: 'center',
                                            background: theme.palette.mode === 'dark' ? 'rgba(15,23,42,0.98)' : 'rgba(255,255,255,0.98)',
                                            borderRadius: '28px',
                                        }}
                                    >
                                        <motion.div
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                                        >
                                            <Box sx={{
                                                width: 80, height: 80, borderRadius: '50%', mb: 3,
                                                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            }}>
                                                <CheckCircleOutlineIcon sx={{ fontSize: 48, color: '#fff' }} />
                                            </Box>
                                        </motion.div>
                                        <Typography variant="h4" fontWeight="800" sx={{ mb: 1, background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                            Message Sent!
                                        </Typography>
                                        <Typography color="text.secondary" sx={{ textAlign: 'center', maxWidth: 300 }}>
                                            Thank you for reaching out. I'll get back to you as soon as possible.
                                        </Typography>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Inner layout: left info + divider + right form */}
                            <Box sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                minHeight: { md: 560 },
                            }}>

                                {/* ── Left: Contact Details ── */}
                                <Box sx={{
                                    flex: '0 0 auto',
                                    width: { xs: '100%', md: '42%' },
                                    p: { xs: 3, sm: 4, md: 5 },
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                    <Box sx={{ mb: 3 }}>
                                        <Typography variant="h5" fontWeight="800" sx={{
                                            mb: 1,
                                            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                                        }}>
                                            Let's Connect
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, flexGrow: 1 }}>
                                        {contactInfo.map((info, index) => (
                                            <motion.div
                                                key={index}
                                                initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.2 + index * 0.1 }}
                                            >
                                                <Box
                                                    component={info.href ? MuiLink : Box}
                                                    href={info.href}
                                                    target={info.href ? '_blank' : undefined}
                                                    rel={info.href ? 'noopener noreferrer' : undefined}
                                                    sx={{
                                                        display: 'flex', alignItems: 'flex-start', gap: 2,
                                                        p: 2, borderRadius: '14px', textDecoration: 'none',
                                                        background: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                                                        border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'}`,
                                                        cursor: info.href ? 'pointer' : 'default',
                                                        transition: 'all 0.25s ease',
                                                        '&:hover': {
                                                            background: theme.palette.mode === 'dark' ? 'rgba(37,99,235,0.1)' : 'rgba(37,99,235,0.05)',
                                                            borderColor: theme.palette.primary.main,
                                                            transform: 'translateX(6px)',
                                                            '& .contact-icon': { bgcolor: 'primary.main', color: '#fff', transform: 'scale(1.1)' },
                                                        },
                                                    }}
                                                >
                                                    <Box className="contact-icon" sx={{
                                                        width: 42, height: 42, borderRadius: '10px', flexShrink: 0,
                                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                        bgcolor: theme.palette.mode === 'dark' ? 'rgba(37,99,235,0.15)' : 'rgba(37,99,235,0.1)',
                                                        color: 'primary.main', transition: 'all 0.25s ease',
                                                    }}>
                                                        {info.icon}
                                                    </Box>
                                                    <Box>
                                                        <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: 1, fontWeight: 600 }}>
                                                            {info.label}
                                                        </Typography>
                                                        <Typography variant="body2" fontWeight="700" sx={{ color: 'text.primary', mt: 0.3, wordBreak: 'break-word' }}>
                                                            {info.value}
                                                        </Typography>
                                                        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.3 }}>
                                                            {info.description}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </motion.div>
                                        ))}
                                    </Box>

                                    <Divider sx={{ my: 2.5, borderColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)' }} />

                                    <Box>
                                        <Typography variant="caption" color="text.secondary" sx={{ mb: 1.5, display: 'block', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
                                            Follow Me
                                        </Typography>
                                        <Box sx={{ display: 'flex', gap: 1.2 }}>
                                            {socialLinks.map((social, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.5 + index * 0.1 }}
                                                >
                                                    <MagneticIcon strength={0.2} radius={60}>
                                                        <IconButton
                                                            component={MuiLink}
                                                            href={social.href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            aria-label={social.label}
                                                            sx={{
                                                                width: 44, height: 44, borderRadius: '12px',
                                                                bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                                                                color: 'text.secondary', transition: 'all 0.28s ease',
                                                                border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`,
                                                                '&:hover': {
                                                                    bgcolor: social.color, color: '#fff',
                                                                    borderColor: social.color, transform: 'translateY(-4px)',
                                                                    boxShadow: `0 8px 20px ${social.color}40`,
                                                                },
                                                            }}
                                                        >
                                                            {social.icon}
                                                        </IconButton>
                                                    </MagneticIcon>
                                                </motion.div>
                                            ))}
                                        </Box>
                                    </Box>
                                </Box>

                                {/* ── Vertical Divider ── */}
                                <Box sx={{
                                    display: { xs: 'none', md: 'block' },
                                    width: '1px',
                                    alignSelf: 'stretch',
                                    my: 4,
                                    background: theme.palette.mode === 'dark'
                                        ? 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.1) 80%, transparent)'
                                        : 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.08) 20%, rgba(0,0,0,0.08) 80%, transparent)',
                                }} />

                                {/* Horizontal Divider (mobile) */}
                                <Divider sx={{
                                    display: { xs: 'block', md: 'none' },
                                    mx: 3,
                                    borderColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)',
                                }} />

                                {/* ── Right: Form ── */}
                                <Box sx={{
                                    flex: 1,
                                    p: { xs: 3, sm: 4, md: 5 },
                                }}>
                                    <Box component="form" onSubmit={handleSubmit}>
                                        <Typography variant="h5" fontWeight="800" sx={{ mb: 3, color: 'text.primary' }}>
                                            Send a Message
                                        </Typography>

                                        <Grid container spacing={2.5} sx={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                            <Grid size={{ xs: 12, sm: 6 }}>
                                                <motion.div initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                                                    <TextField required fullWidth label="Your Name" name="name" value={formData.name} onChange={handleChange} variant="outlined" sx={textFieldStyles} />
                                                </motion.div>
                                            </Grid>
                                            <Grid size={{ xs: 12, sm: 6 }}>
                                                <motion.div initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
                                                    <TextField required fullWidth type="email" label="Your Email" name="email" value={formData.email} onChange={handleChange} variant="outlined" sx={textFieldStyles} />
                                                </motion.div>
                                            </Grid>
                                            <Grid size={12}>
                                                <motion.div initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                                                    <TextField required fullWidth label="Subject" name="subject" value={formData.subject} onChange={handleChange} variant="outlined" sx={textFieldStyles} />
                                                </motion.div>
                                            </Grid>
                                            <Grid size={12}>
                                                <motion.div initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}>
                                                    <TextField required fullWidth multiline rows={4} label="Your Message" name="message" value={formData.message} onChange={handleChange} variant="outlined" sx={textFieldStyles} />
                                                </motion.div>
                                            </Grid>
                                            <Grid size={12}>
                                                <motion.div initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                                                    <Button
                                                        type="submit" variant="contained" color="primary"
                                                        fullWidth size="large" disabled={isSubmitting}
                                                        endIcon={isSubmitting ? null : <ArrowOutwardIcon />}
                                                        sx={{
                                                            py: 1.8, borderRadius: '14px', fontWeight: 700,
                                                            fontSize: '1rem', letterSpacing: 0.5,
                                                            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                                                            boxShadow: `0 10px 30px ${theme.palette.primary.main}35`,
                                                            position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease',
                                                            '&::before': {
                                                                content: '""', position: 'absolute', top: 0, left: '-100%',
                                                                width: '100%', height: '100%',
                                                                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                                                                transition: 'left 0.5s ease',
                                                            },
                                                            '&:hover': {
                                                                boxShadow: `0 15px 40px ${theme.palette.primary.main}50`,
                                                                transform: 'translateY(-2px)',
                                                                '&::before': { left: '100%' },
                                                            },
                                                            '&:active': { transform: 'translateY(0)' },
                                                            '&:disabled': { background: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' },
                                                        }}
                                                    >
                                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                                    </Button>
                                                </motion.div>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>

                            </Box>
                        </Paper>
                    </motion.div>
                </AnimatedSection>
            </Container>
        </Box>
    );
}

export default Contact;
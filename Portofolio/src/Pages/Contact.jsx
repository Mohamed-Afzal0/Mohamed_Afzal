import React, { useState } from 'react';
import { Box, Typography, useTheme, Container, Grid, TextField, Button, Paper, IconButton, Link as MuiLink } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
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
        { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/mohamed-afzal-0b7372305/', label: 'LinkedIn' },
        { icon: <InstagramIcon />, href: 'https://www.instagram.com/_mohamed_afzal_/', label: 'Instagram' },
        { icon: <GitHubIcon />, href: 'https://github.com/Mohamed-Afzal0', label: 'GitHub' },
    ];

    // Contact info data
    const contactInfo = [
        { icon: <EmailIcon fontSize="large" />, label: 'Email', value: 'afzalsfm@gmail.com', href: 'mailto:afzalsfm@gmail.com' },
        { icon: <LocationOnIcon fontSize="large" />, label: 'Location', value: 'Colombo, Sri Lanka' },
        { icon: <PhoneIcon fontSize="large" />, label: 'Phone', value: '+94 76 422 3404' },
    ];

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
                background: theme.palette.mode === 'light'
                    ? `linear-gradient(135deg, ${theme.palette.background.default} 0%, #e2e8f0 100%)`
                    : `linear-gradient(135deg, ${theme.palette.background.default} 0%, #0f172a 100%)`,
            }}
        >
            {/* Floating Background Elements */}
            <FloatingOrb
                color="primary"
                size={400}
                blur={150}
                opacity={0.2}
                position={{ top: '-10%', left: '-5%' }}
                duration={6}
                delay={0}
                theme={theme}
            />
            <FloatingOrb
                color="secondary"
                size={300}
                blur={120}
                opacity={0.15}
                position={{ bottom: '-10%', right: '-5%' }}
                duration={8}
                delay={1}
                theme={theme}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Section Header */}
                <AnimatedSection>
                    <Box sx={{ mb: { xs: 5, md: 6 }, textAlign: 'center' }}>
                        <Typography
                            variant="h6"
                            color="primary"
                            fontWeight="bold"
                            gutterBottom
                            sx={{ textTransform: 'uppercase', letterSpacing: 1.5 }}
                        >
                            Get In Touch
                        </Typography>
                        <Typography
                            variant="h3"
                            component="h2"
                            fontWeight="800"
                            sx={{ color: 'text.primary', fontSize: { xs: '2rem', md: '2.5rem' } }}
                        >
                            Let's Create Together
                        </Typography>
                    </Box>
                </AnimatedSection>

                {/* Main Card */}
                <AnimatedSection delay={0.2}>
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
                            {/* Left Side: Contact Information */}
                            <Grid item xs={12} md={5}>
                                <motion.div
                                    initial={prefersReducedMotion ? {} : "hidden"}
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={staggerContainer}
                                >
                                    <motion.div variants={staggerChild}>
                                        <Typography variant="h4" fontWeight="800" gutterBottom>
                                            Let's Talk
                                        </Typography>
                                    </motion.div>

                                    <motion.div variants={staggerChild}>
                                        <Typography variant="body1" color="text.secondary" sx={{ mb: 5, lineHeight: 1.7 }}>
                                            Have a project in mind, need a frontend developer, or just want to say hi? I'd love to hear from you.
                                        </Typography>
                                    </motion.div>

                                    {/* Contact Info */}
                                    <motion.div variants={staggerChild}>
                                        <Grid container spacing={3} sx={{ mb: 5 }}>
                                            {contactInfo.map((info, index) => (
                                                <Grid item xs={12} sm={6} key={index}>
                                                    <motion.div
                                                        initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: 0.3 + index * 0.1 }}
                                                    >
                                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                            <Box sx={{ color: 'primary.main', display: 'flex' }}>{info.icon}</Box>
                                                            <Box>
                                                                <Typography variant="caption" color="text.secondary" display="block">
                                                                    {info.label}
                                                                </Typography>
                                                                {info.href ? (
                                                                    <MuiLink href={info.href} target="_blank" rel="noopener noreferrer" sx={{ color: 'text.primary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                                                                        {info.value}
                                                                    </MuiLink>
                                                                ) : (
                                                                    <Typography variant="body2" fontWeight="700">{info.value}</Typography>
                                                                )}
                                                            </Box>
                                                        </Box>
                                                    </motion.div>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </motion.div>

                                    {/* Social Icons */}
                                    <motion.div variants={staggerChild}>
                                        <Box sx={{ display: 'flex', gap: 2 }}>
                                            {socialLinks.map((social, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.5 + index * 0.1 }}
                                                >
                                                    <MagneticIcon strength={0.15} radius={60}>
                                                        <IconButton
                                                            component={MuiLink}
                                                            href={social.href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            aria-label={social.label}
                                                            sx={{
                                                                bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                                                                transition: 'all 0.3s',
                                                                '&:hover': {
                                                                    bgcolor: 'primary.main',
                                                                    color: '#fff',
                                                                    transform: 'translateY(-3px)',
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
                                </motion.div>
                            </Grid>

                            {/* Right Side: Form */}
                            <Grid item xs={12} md={7}>
                                <motion.div
                                    initial={prefersReducedMotion ? {} : { opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    <Box
                                        component="form"
                                        onSubmit={handleSubmit}
                                        sx={{
                                            background: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.5)',
                                            p: { xs: 3, sm: 4 },
                                            borderRadius: '20px',
                                            border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,1)'}`,
                                            position: 'relative',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        {/* Success Overlay */}
                                        <AnimatePresence>
                                            {isSuccess && (
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    style={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        background: theme.palette.mode === 'dark'
                                                            ? 'rgba(15, 23, 42, 0.95)'
                                                            : 'rgba(255, 255, 255, 0.95)',
                                                        zIndex: 10,
                                                        borderRadius: '20px',
                                                    }}
                                                >
                                                    <motion.div
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ type: 'spring', stiffness: 300 }}
                                                    >
                                                        <CheckCircleOutlineIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                                                    </motion.div>
                                                    <Typography variant="h5" fontWeight="bold" color="primary">
                                                        Message Sent!
                                                    </Typography>
                                                    <Typography color="text.secondary" sx={{ mt: 1 }}>
                                                        Thank you for reaching out. I'll get back to you soon.
                                                    </Typography>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        <Grid container spacing={3}>
                                            <Grid item xs={12} sm={6}>
                                                <motion.div
                                                    initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.4 }}
                                                >
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        label="Your Name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        variant="outlined"
                                                        sx={textFieldStyles}
                                                    />
                                                </motion.div>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <motion.div
                                                    initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.5 }}
                                                >
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        type="email"
                                                        label="Your Email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        variant="outlined"
                                                        sx={textFieldStyles}
                                                    />
                                                </motion.div>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <motion.div
                                                    initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.6 }}
                                                >
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        label="Subject"
                                                        name="subject"
                                                        value={formData.subject}
                                                        onChange={handleChange}
                                                        variant="outlined"
                                                        sx={textFieldStyles}
                                                    />
                                                </motion.div>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <motion.div
                                                    initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.7 }}
                                                >
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        multiline
                                                        rows={4}
                                                        label="Your Message"
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        variant="outlined"
                                                        sx={textFieldStyles}
                                                    />
                                                </motion.div>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <motion.div
                                                    initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.8 }}
                                                >
                                                    <Button
                                                        type="submit"
                                                        variant="contained"
                                                        color="primary"
                                                        fullWidth
                                                        size="large"
                                                        disabled={isSubmitting}
                                                        endIcon={isSubmitting ? null : <SendIcon />}
                                                        sx={{
                                                            py: 2,
                                                            borderRadius: '12px',
                                                            fontWeight: 'bold',
                                                            letterSpacing: 1,
                                                            background: `linear-gradient(45deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
                                                            boxShadow: `0 8px 20px ${theme.palette.primary.main}50`,
                                                            '&:hover': {
                                                                boxShadow: `0 12px 25px ${theme.palette.primary.main}80`,
                                                            },
                                                            transition: 'all 0.3s ease',
                                                        }}
                                                    >
                                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                                    </Button>
                                                </motion.div>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </motion.div>
                            </Grid>
                        </Grid>
                    </Paper>
                </AnimatedSection>
            </Container>
        </Box>
    );
}

export default Contact;
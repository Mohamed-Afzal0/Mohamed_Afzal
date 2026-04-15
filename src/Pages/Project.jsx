import React, { useRef, useState } from 'react';
import { Box, Typography, useTheme, Container, Grid, Card, CardMedia, CardContent, CardActionArea, Chip, Stack, IconButton, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { motion } from 'framer-motion';

// Import local images
import MindWaveImg from '../assets/Mindwave.png';
import PortfolioImg from '../assets/Protfolio.png';
import EstateImg from '../assets/estateAgentApp.png';
import ServerMonitorImg from '../assets/Server_Monitor.png';
import AnimatedGrid from '../components/animated/AnimatedGrid';
import { useReducedMotion } from '../animations/hooks/useReducedMotion';
import { staggerChild } from '../animations/variants/stagger';

// Project data with local images and links
const projectData = [
    {
        id: 1,
        title: "Mind Wave",
        description: "An application which provide users with the best way to track their mood and mental health.",
        image: MindWaveImg,
        techStack: ["React", "vite", "React-Native", "Expo", "Firebase", "Node.js", "javascript", "Github Actions", "Docker"],
        github: "https://github.com/Mohamed-Afzal0", // Placeholder
        demo: "https://mindwave-app.com/" // Placeholder
    },
    {
        id: 2,
        title: "Portfolio Website",
        description: "A website to showcase my skills and projects.",
        image: PortfolioImg,
        techStack: ["React", "Vite", "Framer Motion", "Material-UI", "javascript"],
        github: "https://github.com/Mohamed-Afzal0/Mohamed_Afzal.git", // Placeholder
        demo: "https://mohamed-afzal-lovat.vercel.app/" // Placeholder
    },
    {
        id: 3,
        title: "Estate Agent Application",
        description: "SmartMove is a simple estate listing web app that showcases featured properties with key details like location, price, and descriptions for an estate agent brand.",
        image: EstateImg,
        techStack: ["React", "Vite", "Material-UI", "javascript"],
        github: "https://github.com/Mohamed-Afzal0/estate-agent-app.git", // Placeholder
        demo: "https://mohamed-afzal0.github.io/estate-agent-app/" // Placeholder
    },
    {
        id: 4,
        title: "Server Monitor Dashboard",
        description: "A full-stack real-time system monitoring tool built independently to explore DevOps and SRE practices.",
        image: ServerMonitorImg,
        techStack: ["Python", "psutil", "Flask", "Docker", "JavaScript", "Chart.js", "HTML", "CSS", "GitHub Actions"],
        github: "https://github.com/Mohamed-Afzal0/Server-Monitor.git",
    }
];

// Project Card Component with 3D tilt effect
function ProjectCard({ project, _index }) {
    const theme = useTheme();
    const prefersReducedMotion = useReducedMotion();
    const cardRef = useRef(null);
    const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (prefersReducedMotion || !cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        setTilt({ rotateX, rotateY });
    };

    const handleMouseLeave = () => {
        setTilt({ rotateX: 0, rotateY: 0 });
        setIsHovered(false);
    };

    // Check if on mobile/touch device
    const isTouchDevice = () => {
        return /Mobi|Android|iPhone|iPad|iPod/.test(navigator.userAgent) || window.innerWidth < 768;
    };

    return (
        <motion.div
            variants={staggerChild}
            style={{ height: '100%' }}
        >
            <Card
                ref={cardRef}
                component={motion.div}
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    background: theme.palette.mode === 'light'
                        ? 'rgba(255,255,255,0.9)'
                        : 'rgba(15,23,42,0.85)',
                    backdropFilter: 'blur(8px)',
                    border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)'}`,
                    boxShadow: theme.palette.mode === 'light'
                        ? '0 10px 30px rgba(0,0,0,0.05)'
                        : '0 10px 30px rgba(0,0,0,0.3)',
                    transform: prefersReducedMotion || isTouchDevice()
                        ? 'none'
                        : `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                    transition: 'transform 0.2s ease-out, box-shadow 0.3s ease',
                }}
                onMouseMove={!isTouchDevice() ? handleMouseMove : undefined}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                whileHover={!prefersReducedMotion && !isTouchDevice() ? { y: -8 } : {}}
            >
                <CardActionArea sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Box sx={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
                        <CardMedia
                            component="img"
                            height={{ xs: 160, sm: 200, md: 220 }}
                            image={project.image}
                            alt={project.title}
                            sx={{
                                objectFit: 'cover',
                                width: '100%',
                                transition: 'transform 0.4s ease',
                                transform: isHovered && !prefersReducedMotion ? 'scale(1.1)' : 'scale(1)',
                            }}
                        />
                        {/* Overlay on hover */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: `linear-gradient(135deg, ${theme.palette.primary.main}BF, ${theme.palette.background.paper}BF)`,
                                opacity: isHovered ? 1 : 0,
                                transition: 'opacity 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 2,
                                pointerEvents: isHovered ? 'auto' : 'none',
                                zIndex: 2,
                            }}
                        >
                            <Tooltip title="View GitHub Repo">
                                <IconButton
                                    component="a"
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: '#fff',
                                        backgroundColor: 'rgba(0,0,0,0.5)',
                                        '&:hover': {
                                            backgroundColor: 'primary.main',
                                            transform: 'scale(1.1)',
                                        },
                                        transition: 'all 0.2s ease',
                                        transform: isHovered ? 'translateY(0)' : 'translateY(20px)',
                                    }}
                                >
                                    <GitHubIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Live Website">
                                <IconButton
                                    component="a"
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: '#fff',
                                        backgroundColor: 'rgba(0,0,0,0.5)',
                                        '&:hover': {
                                            backgroundColor: 'primary.main',
                                            transform: 'scale(1.1)',
                                        },
                                        transition: 'all 0.2s ease 0.1s',
                                        transform: isHovered ? 'translateY(0)' : 'translateY(20px)',
                                    }}
                                >
                                    <LanguageIcon />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Box>
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="h3"
                            fontWeight="bold"
                            sx={{
                                transition: 'color 0.3s ease',
                                color: isHovered ? 'primary.main' : 'text.primary',
                            }}
                        >
                            {project.title}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ lineHeight: 1.6, mb: 2, flexGrow: 1 }}
                        >
                            {project.description}
                        </Typography>

                        {/* Tech Stack Template */}
                        {project.techStack && project.techStack.length > 0 && (
                            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 'auto' }}>
                                {project.techStack.map((tech, i) => (
                                    <Chip
                                        key={i}
                                        label={tech}
                                        size="small"
                                        variant="outlined"
                                        sx={{
                                            borderRadius: '8px',
                                            fontSize: '0.75rem',
                                            fontWeight: 500,
                                            borderColor: theme.palette.mode === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.15)',
                                            color: 'text.secondary',
                                            '&:hover': {
                                                borderColor: 'primary.main',
                                                color: 'primary.main',
                                            }
                                        }}
                                    />
                                ))}
                            </Stack>
                        )}
                    </CardContent>
                </CardActionArea>
            </Card>
        </motion.div>
    );
}

function Project() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <Box
            component="section"
            id="projects"
            sx={{
                py: { xs: 10, md: 15 },
                backgroundColor: 'transparent',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Container maxWidth="lg">
                {/* Section Header */}
                <motion.div
                    initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                >
                    <Box sx={{ mb: 8, textAlign: 'center' }}>
                        <Typography
                            variant="h3"
                            component="h2"
                            fontWeight="800"
                            sx={{ color: 'text.primary', fontSize: { xs: '2rem', md: '2.5rem' } }}
                        >
                            My Recent Work
                        </Typography>
                    </Box>
                </motion.div>

                {/* Projects Grid */}
                <AnimatedGrid
                    staggerDelay={0.1}
                    delay={0.2}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}
                >
                    {projectData.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </AnimatedGrid>
            </Container>
        </Box>
    );
}

export default Project;
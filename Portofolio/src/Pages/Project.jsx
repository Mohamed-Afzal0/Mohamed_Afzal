import React from 'react';
import { Box, Typography, useTheme, Container, Grid, Card, CardMedia, CardContent, CardActionArea } from '@mui/material';

// Sample data for projects, can be replaced with real data later
const projectData = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-featured online store with payment gateway integration and modern UI.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        title: "SaaS Dashboard",
        description: "An analytics dashboard built for tracking SaaS metrics and user engagement.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        title: "Mobile App Redesign",
        description: "Complete UX/UI overhaul of a fitness tracking mobile application.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        title: "Real Estate Portal",
        description: "Property listing website with advanced search filters and map integration.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        title: "Financial AI Tool",
        description: "An AI-driven application for personal finance management and predictions.",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        title: "Portfolio Template",
        description: "A sleek, customizable template for creative professionals to showcase work.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
    }
];

function Project() {
    const theme = useTheme();

    return (
        <Box
            component="section"
            id="projects"
            sx={{
                py: { xs: 10, md: 15 }, // Use generous padding top/bottom instead of vh to allow content to flow naturally
                backgroundColor: theme.palette.mode === 'light' ? theme.palette.background.default : theme.palette.background.paper,
                // Alternating background colors between sections helps break them up
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ mb: 8, textAlign: 'center' }}>
                    <Typography
                        variant="h6"
                        color="primary"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ textTransform: 'uppercase', letterSpacing: 1.5 }}
                    >
                        Portfolio
                    </Typography>
                    <Typography
                        variant="h3"
                        component="h2"
                        fontWeight="800"
                        sx={{ color: 'text.primary', fontSize: { xs: '2rem', md: '2.5rem' } }}
                    >
                        My Recent Work
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {projectData.map((project) => (
                        <Grid item xs={12} sm={6} md={4} lg={4} key={project.id}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    boxShadow: theme.palette.mode === 'light' ? '0 10px 30px rgba(0,0,0,0.05)' : '0 10px 30px rgba(0,0,0,0.3)',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: theme.palette.mode === 'light' ? '0 20px 40px rgba(0,0,0,0.1)' : '0 20px 40px rgba(0,0,0,0.4)',
                                    }
                                }}
                            >
                                <CardActionArea sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <CardMedia
                                        component="img"
                                        height="220"
                                        image={project.image}
                                        alt={project.title}
                                        sx={{
                                            objectFit: 'cover',
                                        }}
                                    />
                                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                        <Typography gutterBottom variant="h5" component="h3" fontWeight="bold">
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                                            {project.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default Project;

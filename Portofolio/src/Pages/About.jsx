import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

function About() {
    const Theme = useTheme();

    return (
        <Box
            component="section"
            id="home"
            sx={{
                minHeight: 'calc(100vh - 70px)', // Full height minus header
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 3
            }}
        >
            <Typography variant="h2" component="h1" gutterBottom fontWeight="800" sx={{ color: 'text.primary', mb: 3 }}>
                About Me
            </Typography>

        </Box>
    )
}

export default About;
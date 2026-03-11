import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

function Home() {
    const theme = useTheme();

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
            <Box sx={{ maxWidth: '800px', mx: 'auto', textAlign: 'center' }}>
                <Typography
                    variant="h2"
                    component="h1"
                    gutterBottom
                    fontWeight="800"
                    sx={{ color: 'text.primary', mb: 3 }}
                >
                    Building digital <br />
                    <span style={{ color: theme.palette.primary.main }}>products, brands, and experience.</span>
                </Typography>
                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ mb: 5, fontWeight: 400, maxWidth: '600px', mx: 'auto', lineHeight: 1.6 }}
                >
                    Hi, I'm Mohamed Afzal. I design and build beautiful, responsive, and user-centric web applications.
                </Typography>
            </Box>
        </Box>
    );
}

export default Home;

import { createTheme } from '@mui/material/styles';

// Define common typography and component overrides
const baseOptions = {
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none', // Modern buttons handle their own casing
                }
            }
        }
    }
};

// Light theme configuration
export const lightTheme = createTheme({
    ...baseOptions,
    palette: {
        mode: 'light',
        primary: {
            main: '#2563eb', // Modern blue
        },
        background: {
            default: '#f8fafc', // Very light grey blue background
            paper: '#ffffff',
        },
        text: {
            primary: '#0f172a',
            secondary: '#64748b',
        }
    },
});

// Dark theme configuration
export const darkTheme = createTheme({
    ...baseOptions,
    palette: {
        mode: 'dark',
        primary: {
            main: '#3b82f6', // Bright modern blue for better contrast in dark mode
        },
        background: {
            default: '#0f172a', // Deep slate background
            paper: '#1e293b',   // Lighter slate for surfaces/cards
        },
        text: {
            primary: '#f8fafc',
            secondary: '#94a3b8',
        }
    },
});

import { createTheme } from '@mui/material/styles';

const baseOptions = {
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: { fontWeight: 800 },
        h2: { fontWeight: 800 },
    },
    components: {
        MuiButton: {
            defaultProps: { disableElevation: true },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '999px',
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: 'transparent',
                },
            },
        },
    },
};

export const lightTheme = createTheme({
    ...baseOptions,
    palette: {
        mode: 'light',
        primary: { main: '#2563eb' },
        secondary: { main: '#4f46e5' },
        background: { default: '#f8fafc', paper: '#ffffff' },
        text: { primary: '#0f172a', secondary: '#64748b' },
        divider: '#e2e8f0',
    },
});

export const darkTheme = createTheme({
    ...baseOptions,
    palette: {
        mode: 'dark',
        primary: { main: '#60a5fa' },
        secondary: { main: '#818cf8' },
        background: { default: '#020617', paper: '#111827' },
        text: { primary: '#f8fafc', secondary: '#94a3b8' },
        divider: '#1f2937',
    },
});

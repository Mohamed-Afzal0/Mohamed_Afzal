import React from 'react';
import { Button, useTheme } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import MagneticButton from './animated/MagneticButton';
import { useReducedMotion } from '../animations/hooks/useReducedMotion';

function DownloadCVButton({ variant = "contained", sx = {}, ...props }) {
    const theme = useTheme();
    const prefersReducedMotion = useReducedMotion();

    return (
        <MagneticButton strength={0.15} radius={100}>
            <Button
                variant={variant}
                color="primary"
                href="../../public/CV.pdf"
                download="S.F.M.Afzal_CV.pdf"
                startIcon={<FileDownloadIcon />}
                sx={{
                    borderRadius: '14px',
                    textTransform: 'none',
                    fontWeight: 600,
                    px: 3,
                    py: 1,
                    fontSize: '0.9rem',
                    background: variant === 'contained' ? `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)` : 'transparent',
                    boxShadow: variant === 'contained' ? `0 4px 20px ${theme.palette.primary.main}30` : 'none',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)',
                        transition: prefersReducedMotion ? 'none' : 'left 0.5s ease',
                    },
                    '&:hover': {
                        boxShadow: variant === 'contained' ? `0 6px 25px ${theme.palette.primary.main}45` : theme.palette.mode === 'dark' ? `0 4px 15px rgba(255,255,255,0.1)` : `0 4px 15px rgba(0,0,0,0.1)`,
                        transform: prefersReducedMotion ? 'none' : 'translateY(-2px)',
                        '&::before': {
                            left: '100%',
                        },
                    },
                    '&:active': {
                        transform: 'translateY(0)',
                    },
                    ...sx
                }}
                {...props}
            >
                Download CV
            </Button>
        </MagneticButton>
    );
}

export default DownloadCVButton;

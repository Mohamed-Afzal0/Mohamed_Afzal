import React, { useState, useEffect } from 'react';

/**
 * Animated Logo component.
 * Props:
 *  - size: 'sm' | 'md' | 'lg'  (default: 'md')
 *  - href: string (default: '#home')
 *  - showSubtext: boolean (default: false)
 */
const Logo = ({ size = 'md', href = '#home', showSubtext = false, showName = true }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const svgSizes = { sm: 36, md: 48, lg: 120 };
    const textSizes = { sm: '1.1rem', md: '1.4rem', lg: '2.5rem' };
    const trackingExpanded = { sm: '0.15em', md: '0.18em', lg: '0.2em' };
    const trackingNormal = { sm: '0.05em', md: '0.08em', lg: '0.05em' };

    const svgSize = svgSizes[size];

    return (
        <a
            href={href}
            style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                {/* Glow halo behind SVG */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '50%',
                        background: 'rgba(59, 130, 246, 0.5)',
                        filter: 'blur(16px)',
                        opacity: isHovered ? 0.45 : 0.12,
                        transition: 'opacity 0.6s ease',
                        pointerEvents: 'none',
                    }}
                />

                <svg
                    width={svgSize}
                    height={svgSize}
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ position: 'relative', zIndex: 1 }}
                >
                    <defs>
                        <linearGradient id="lg-logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#60A5FA" />
                            <stop offset="50%" stopColor="#3B82F6" />
                            <stop offset="100%" stopColor="#1D4ED8" />
                        </linearGradient>
                        <linearGradient id="lg-glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00E0FF" />
                            <stop offset="100%" stopColor="#007BFF" />
                        </linearGradient>
                        <filter id="lg-neon">
                            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Subtle hexagon outline */}
                    <path
                        d="M50 5 L89 27.5 L89 72.5 L50 95 L11 72.5 L11 27.5 Z"
                        fill="none"
                        stroke="url(#lg-logoGrad)"
                        strokeWidth="0.5"
                        strokeOpacity="0.3"
                        style={{
                            opacity: isLoaded ? 1 : 0,
                            transition: 'opacity 1s ease',
                        }}
                    />

                    {/* Animated "A" stroke */}
                    <path
                        d="M50 20 L25 80 M50 20 L75 80 M35 60 L65 60"
                        stroke="url(#lg-logoGrad)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                            strokeDasharray: 300,
                            strokeDashoffset: isLoaded ? 0 : 300,
                            transition: 'stroke-dashoffset 2s cubic-bezier(0.65, 0, 0.35, 1)',
                            filter: isHovered ? 'url(#lg-neon)' : 'none',
                        }}
                    />

                    {/* Pulse ring on hover */}
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="url(#lg-glowGrad)"
                        strokeWidth="1"
                        fill="none"
                        style={{
                            transformOrigin: 'center',
                            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                            opacity: isHovered ? 0.5 : 0,
                            transition: 'all 0.6s ease',
                        }}
                    />
                </svg>

                {/* Text label */}
                {showName && (
                    <div style={{ marginTop: size === 'lg' ? '16px' : '6px', overflow: 'hidden', textAlign: 'center' }}>
                        <span
                            style={{
                                display: 'block',
                                fontSize: textSizes[size],
                                fontWeight: 900,
                                background: 'linear-gradient(to right, #60A5FA, #00E0FF, #3B82F6)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                letterSpacing: isHovered ? trackingExpanded[size] : trackingNormal[size],
                                transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
                                opacity: isLoaded ? 1 : 0,
                                transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                fontFamily: 'monospace',
                                lineHeight: 1,
                            }}
                        >
                            AFZAL
                        </span>

                        {/* Animated underline */}
                        <div
                            style={{
                                height: '2px',
                                background: 'linear-gradient(to right, #3B82F6, #00E0FF)',
                                borderRadius: '9999px',
                                margin: '4px auto 0',
                                boxShadow: '0 0 8px rgba(59, 130, 246, 0.8)',
                                width: isHovered ? '100%' : '0%',
                                transition: 'width 0.5s ease',
                            }}
                        />
                    </div>
                )}

                {/* Optional subtext (used in large standalone contexts) */}
                {showSubtext && (
                    <p
                        style={{
                            fontSize: '10px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.4em',
                            marginTop: '8px',
                            color: 'rgba(96, 165, 250, 0.6)',
                            opacity: isLoaded ? 1 : 0,
                            transition: 'opacity 1s ease',
                            fontFamily: 'monospace',
                        }}
                    >
                        Portfolio &bull; MMXXVI
                    </p>
                )}
            </div>
        </a>
    );
};

export default Logo;

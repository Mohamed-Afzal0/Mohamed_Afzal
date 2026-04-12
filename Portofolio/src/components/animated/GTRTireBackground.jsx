import React, { useEffect, useRef } from 'react';
import { Box, useTheme } from '@mui/material';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useIsMobilePerformance } from '../../animations/hooks/useIsMobilePerformance';

// High-performance background orb
const BackgroundOrb = ({ color, size, top, left, delay = 0, opacity = 0.15 }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
            opacity: [opacity, opacity * 1.5, opacity],
            x: [0, 40, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1]
        }}
        transition={{ 
            duration: 12, 
            repeat: Infinity, 
            delay,
            ease: "easeInOut" 
        }}
        style={{
            position: 'absolute',
            top, left,
            width: size,
            height: size,
            borderRadius: '50%',
            background: color,
            filter: 'blur(100px)',
            pointerEvents: 'none',
            zIndex: 1,
            willChange: 'transform, opacity',
        }}
    />
);

function GTRTireBackground() {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    const primary = theme.palette.primary.main;
    const isMobile = useIsMobilePerformance();
    const { scrollY } = useScroll();
    const smokeContainerRef = useRef(null);
    const lastScrollY = useRef(0);
    const lastSmokeTime = useRef(0);
    
    // Direct 1:1 scroll mapping (no useSpring) to eliminate any "lag" or "bounce" feeling.
    // Syncs perfectly with the user's scrollbar frame-by-frame.
    const tireRotate = useTransform(scrollY, [0, 3000], [0, 2500]);
    const speedLinesOpacity = useTransform(scrollY, [0, 100, 300], [0, isMobile ? 0 : 0.4, isMobile ? 0 : 0.6]);
    const tireOpacity = useTransform(scrollY, [0, 800], [1, 0.4]); // Fades slightly heavily so it acts as a subtle watermark on other pages

    // Ultra-optimized CSS-based DOM smoke emission.
    useEffect(() => {
        if (isMobile) return; // Disable smoke on mobile for performance
        
        let raf;
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const scrollDelta = currentScroll - lastScrollY.current;
            lastScrollY.current = currentScroll;

            const absSpeed = Math.abs(scrollDelta);
            const now = Date.now();
            
            // Emit burst if scrolling
            if (absSpeed > 2 && currentScroll > 10 && (now - lastSmokeTime.current > 120)) {
                lastSmokeTime.current = now;
                emitSmoke();
            }
            // Ambient emission for life
            if (now - lastSmokeTime.current > 350) {
                 lastSmokeTime.current = now;
                 emitSmoke(true);
            }

            raf = requestAnimationFrame(handleScroll);
        };

        raf = requestAnimationFrame(handleScroll);
        return () => cancelAnimationFrame(raf);
    }, [isMobile]);

    const emitSmoke = (isAmbient = false) => {
        if (!smokeContainerRef.current) return;
        
        // Severely limit particle counts to prevent DOM bloat and layout thrashing
        const count = isAmbient ? 1 : 2;
        for (let i = 0; i < count; i++) {
            const p = document.createElement('div');
            const size = 150 + Math.random() * 150;
            const startX = 40 + Math.random() * 20; // Middle-bottom of the tire
            const drift = (Math.random() - 0.5) * 150; // Simple drift
            const duration = isAmbient ? 3.0 + Math.random() * 1.5 : 1.5 + Math.random() * 1.5;

            // Using simple box-shadow and background for extremely fast GPU composite rendering
            // Color is the dark greyish/blue/purple combo requested earlier
            p.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(65, 60, 110, 0.15);
                filter: blur(20px);
                width: ${size}px;
                height: ${size}px;
                left: ${startX}%;
                bottom: 0px;
                pointer-events: none;
                z-index: 5;
                animation: smokeRiseFast ${duration}s ease-out forwards;
                --drift: ${drift}px;
                will-change: transform, opacity;
            `;

            smokeContainerRef.current.appendChild(p);
            setTimeout(() => {
                if (smokeContainerRef.current && p.parentNode === smokeContainerRef.current) {
                    smokeContainerRef.current.removeChild(p);
                }
            }, duration * 1000);
        }
    };

    return (
        <Box
            sx={{
                position: 'fixed', // Global persistence
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                pointerEvents: 'none',
                zIndex: -1, // Behind all content
                overflow: 'hidden',
                background: theme.palette.mode === 'dark' ? '#050505' : '#111111', 
            }}
        >
                {/* Global Background Orbs - Unified for all sections */}
                <BackgroundOrb color={primary} size={isMobile ? 300 : 600} top="-10%" left="-10%" delay={0} opacity={isDark ? (isMobile ? 0.08 : 0.15) : (isMobile ? 0.04 : 0.08)} />
                <BackgroundOrb color={theme.palette.secondary?.main || primary} size={isMobile ? 250 : 500} top="30%" left="70%" delay={2} opacity={isDark ? (isMobile ? 0.06 : 0.12) : (isMobile ? 0.03 : 0.06)} />
                <BackgroundOrb color={primary} size={isMobile ? 200 : 400} top="70%" left="15%" delay={4} opacity={isDark ? (isMobile ? 0.05 : 0.1) : (isMobile ? 0.025 : 0.05)} />

                {/* Unified Grid Overlay */}
                <Box sx={{
                    position: 'absolute', inset: 0,
                    backgroundImage: isDark
                        ? 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)'
                        : 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                    maskImage: 'radial-gradient(circle at center, black, transparent 90%)',
                    pointerEvents: 'none',
                    zIndex: 2,
                }} />

                {/* Highly optimized keyframes */}
                <style>
                    {`
                    @keyframes smokeRiseFast {
                        0%   { opacity: 0; transform: scale(0.5) translateY(0) translateX(0); }
                        20%  { opacity: 1; }
                        60%  { opacity: 0.8; }
                        100% { opacity: 0; transform: scale(3.5) translateY(-350px) translateX(var(--drift, 0px)); }
                    }
                    @keyframes speedPass {
                        0% { transform: scaleX(0) translateX(100vw); opacity: 0; }
                        50% { opacity: 1; }
                        100% { transform: scaleX(1) translateX(-50vw); opacity: 0; }
                    }
                    `}
                </style>

            {/* Hardware Accelerated Speed Lines */}
            <Box
                component={motion.div}
                style={{ opacity: speedLinesOpacity }}
                sx={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 4,
                    willChange: 'opacity',
                    '& .speed-line': {
                        position: 'absolute',
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent, rgba(232,28,46,0.4), transparent)',
                        transformOrigin: 'right center',
                        animation: 'speedPass 0.5s linear infinite',
                        willChange: 'transform, opacity'
                    }
                }}
            >
                <div className="speed-line" style={{ top: '32%', right: 0, width: '55%', animationDelay: '0s' }} />
                <div className="speed-line" style={{ top: '38%', right: 0, width: '70%', animationDelay: '0.2s' }} />
                <div className="speed-line" style={{ top: '44%', right: 0, width: '45%', animationDelay: '0.5s' }} />
                <div className="speed-line" style={{ top: '56%', right: 0, width: '52%', animationDelay: '0.3s' }} />
                <div className="speed-line" style={{ top: '62%', right: 0, width: '40%', animationDelay: '0.7s' }} />
                <div className="speed-line" style={{ top: '75%', right: 0, width: '60%', animationDelay: '0.1s' }} />
            </Box>

            {/* Massive Centered Tire Wrapper */}
            <Box
                component={motion.div}
                style={{ opacity: tireOpacity }}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '110vh', 
                    height: '110vh',
                    transform: 'translate(-50%, -50%)', // Hard-anchored perfectly in the center globally
                    zIndex: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    willChange: 'opacity',
                }}
            >
                {/* Ultra-performant Drop Shadow Layer (div instead of SVG filter) */}
                <Box
                    sx={{
                        position: 'absolute',
                        width: '85%',
                        height: '85%',
                        borderRadius: '50%',
                        background: 'rgba(0,0,0,1)',
                        filter: 'blur(40px)',
                        zIndex: 0,
                    }}
                />

                <Box
                    component={motion.div}
                    style={{ rotate: tireRotate }}
                    sx={{
                        width: '100%',
                        height: '100%',
                        transformOrigin: 'center center',
                        zIndex: 1,
                        willChange: 'transform',
                    }}
                >
                    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: '100%'}}>
                        <defs>
                            <radialGradient id="gBody" cx="36%" cy="30%" r="62%">
                                <stop offset="0%" stopColor="#3a3a3a"/>
                                <stop offset="28%" stopColor="#1e1e1e"/>
                                <stop offset="65%" stopColor="#0f0f0f"/>
                                <stop offset="100%" stopColor="#040404"/>
                            </radialGradient>
                            <radialGradient id="gEdge" cx="50%" cy="50%" r="50%">
                                <stop offset="70%" stopColor="rgba(0,0,0,0)"/>
                                <stop offset="80%" stopColor="rgba(28,28,28,0.45)"/>
                                <stop offset="87%" stopColor="rgba(52,52,52,0.6)"/>
                                <stop offset="91%" stopColor="rgba(38,38,38,0.8)"/>
                                <stop offset="96%" stopColor="rgba(12,12,12,0.95)"/>
                                <stop offset="100%" stopColor="rgba(3,3,3,1)"/>
                            </radialGradient>
                            <radialGradient id="gSpec" cx="26%" cy="20%" r="38%">
                                <stop offset="0%" stopColor="rgba(255,255,255,0.025)"/>
                                <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
                            </radialGradient>
                            <linearGradient id="gMetal" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#dedede"/>
                                <stop offset="18%" stopColor="#b0b0b0"/>
                                <stop offset="45%" stopColor="#747474"/>
                                <stop offset="72%" stopColor="#b8b8b8"/>
                                <stop offset="100%" stopColor="#585858"/>
                            </linearGradient>
                            <linearGradient id="gSF" x1="0%" y1="0%" x2="80%" y2="100%">
                                <stop offset="0%" stopColor="#e4e4e4"/>
                                <stop offset="35%" stopColor="#c0c0c0"/>
                                <stop offset="100%" stopColor="#525252"/>
                            </linearGradient>
                            <linearGradient id="gSS" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#303030"/>
                                <stop offset="100%" stopColor="#0e0e0e"/>
                            </linearGradient>
                            <radialGradient id="gHub" cx="32%" cy="28%" r="65%">
                                <stop offset="0%" stopColor="#d4d4d4"/>
                                <stop offset="45%" stopColor="#888"/>
                                <stop offset="100%" stopColor="#282828"/>
                            </radialGradient>
                            <linearGradient id="gCal" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#ff4455"/>
                                <stop offset="45%" stopColor="#e81c2e"/>
                                <stop offset="100%" stopColor="#6e000e"/>
                            </linearGradient>
                            <radialGradient id="gRotor" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#2e2e2e"/>
                                <stop offset="70%" stopColor="#1a1a1a"/>
                                <stop offset="100%" stopColor="#0c0c0c"/>
                            </radialGradient>
                            <clipPath id="cFull"><circle cx="250" cy="250" r="246"/></clipPath>
                            <clipPath id="cRim"><circle cx="250" cy="250" r="172"/></clipPath>
                            <clipPath id="cRotor"><circle cx="250" cy="250" r="115"/></clipPath>
                        </defs>

                        <circle cx="250" cy="250" r="246" fill="url(#gBody)"/>
                        <circle cx="250" cy="250" r="242" fill="none" stroke="#181818" strokeWidth="2"/>
                        <circle cx="250" cy="250" r="236" fill="none" stroke="#0a0a0a" strokeWidth="9"/>
                        <circle cx="250" cy="250" r="222" fill="none" stroke="#0c0c0c" strokeWidth="6"/>
                        <circle cx="250" cy="250" r="212" fill="none" stroke="#080808" strokeWidth="10"/>
                        <circle cx="250" cy="250" r="198" fill="none" stroke="#0b0b0b" strokeWidth="6"/>
                        <circle cx="250" cy="250" r="188" fill="none" stroke="#090909" strokeWidth="8"/>
                        <circle cx="250" cy="250" r="231" fill="none" stroke="rgba(72,72,72,0.5)" strokeWidth="1.5"/>
                        <circle cx="250" cy="250" r="217" fill="none" stroke="rgba(60,60,60,0.4)" strokeWidth="1.5"/>
                        <circle cx="250" cy="250" r="205" fill="none" stroke="rgba(65,65,65,0.38)" strokeWidth="1.5"/>
                        <circle cx="250" cy="250" r="194" fill="none" stroke="rgba(58,58,58,0.35)" strokeWidth="1.5"/>

                        <g clipPath="url(#cFull)">
                            <g stroke="#050505" strokeWidth="3.5" strokeLinecap="round" opacity="0.85">
                                {[...Array(36)].map((_, i) => (
                                    <line key={`s1-${i}`} x1="250" y1="4" x2="250" y2="24" transform={`rotate(${i*10} 250 250)`}/>
                                ))}
                            </g>
                            <g stroke="#060606" strokeWidth="3" strokeLinecap="round" opacity="0.7">
                                {[...Array(24)].map((_, i) => (
                                    <line key={`s2-${i}`} x1="250" y1="28" x2="250" y2="46" transform={`rotate(${i*15+5} 250 250)`}/>
                                ))}
                            </g>
                            <g stroke="#060606" strokeWidth="2.5" strokeLinecap="round" opacity="0.65">
                                {[...Array(24)].map((_, i) => (
                                    <line key={`s3-${i}`} x1="250" y1="47" x2="250" y2="62" transform={`rotate(${i*15+10} 250 250)`}/>
                                ))}
                            </g>
                            <g stroke="#060606" strokeWidth="2" strokeLinecap="round" opacity="0.55">
                                {[...Array(24)].map((_, i) => (
                                    <line key={`s4-${i}`} x1="250" y1="62" x2="250" y2="76" transform={`rotate(${i*15+15} 250 250)`}/>
                                ))}
                            </g>
                        </g>

                        <circle cx="250" cy="250" r="183" fill="none" stroke="#e81c2e" strokeWidth="4" opacity=".95"/>
                        <circle cx="250" cy="250" r="176" fill="none" stroke="#e81c2e" strokeWidth="1.5" opacity=".55"/>
                        <circle cx="250" cy="250" r="179.5" fill="none" stroke="rgba(220,40,50,0.15)" strokeWidth="4" strokeDasharray="2 18"/>
                        <circle cx="250" cy="250" r="186" fill="none" stroke="rgba(60,60,60,0.4)" strokeWidth="1" strokeDasharray="3 12"/>
                        <circle cx="250" cy="250" r="246" fill="url(#gEdge)"/>
                        <circle cx="250" cy="250" r="245" fill="none" stroke="#1c1c1c" strokeWidth="2.5"/>
                        <circle cx="250" cy="250" r="173" fill="none" stroke="#1e1e1e" strokeWidth="4"/>
                        <circle cx="250" cy="250" r="172" fill="#0e0e0e"/>
                        <circle cx="250" cy="250" r="172" fill="none" stroke="#cccccc" strokeWidth="7"/>
                        <circle cx="250" cy="250" r="168" fill="none" stroke="#444" strokeWidth="2.5"/>
                        <circle cx="250" cy="250" r="165" fill="none" stroke="#aaa" strokeWidth="1"/>
                        <circle cx="250" cy="250" r="162" fill="none" stroke="#333" strokeWidth="1.5"/>

                        <g clipPath="url(#cRim)">
                            <g fill="url(#gSF)" stroke="rgba(200,200,200,0.12)" strokeWidth="0.5">
                                {[...Array(10)].map((_, i) => (
                                    <polygon key={`p1-${i}`} points="243,92 257,92 265,192 235,192" transform={`rotate(${i*36} 250 250)`}/>
                                ))}
                            </g>
                            <g fill="url(#gSS)" opacity="0.95">
                                {[...Array(10)].map((_, i) => (
                                    <polygon key={`p2-${i}`} points="257,92 264,93 272,192 265,192" transform={`rotate(${i*36} 250 250)`}/>
                                ))}
                            </g>
                            <g stroke="rgba(255,255,255,0.42)" strokeWidth="0.8" opacity="0.8">
                                {[...Array(10)].map((_, i) => (
                                    <line key={`p3-${i}`} x1="243" y1="92" x2="235" y2="192" transform={`rotate(${i*36} 250 250)`}/>
                                ))}
                            </g>
                            <circle cx="250" cy="250" r="192" fill="none" stroke="#111" strokeWidth="14"/>
                            <circle cx="250" cy="250" r="187" fill="none" stroke="#2a2a2a" strokeWidth="3"/>
                        </g>

                        <circle cx="250" cy="250" r="172" fill="none" stroke="rgba(0,0,0,0.7)" strokeWidth="10"/>
                        <circle cx="250" cy="250" r="114" fill="url(#gRotor)" clipPath="url(#cRim)"/>
                        
                        <g clipPath="url(#cRotor)">
                            <g stroke="#080808" strokeWidth="4" strokeLinecap="round" opacity="0.7">
                                {[...Array(18)].map((_, i) => (
                                    <line key={`r1-${i}`} x1="250" y1="136" x2="250" y2="165" transform={`rotate(${i*20} 250 250)`}/>
                                ))}
                            </g>
                            <circle cx="250" cy="250" r="100" fill="none" stroke="#0a0a0a" strokeWidth="3.5"/>
                            <circle cx="250" cy="250" r="86" fill="none" stroke="#0c0c0c" strokeWidth="2.5"/>
                            <circle cx="250" cy="250" r="72" fill="none" stroke="#0a0a0a" strokeWidth="3"/>
                        </g>
                        
                        <circle cx="250" cy="250" r="114" fill="none" stroke="#383838" strokeWidth="2.5"/>
                        <circle cx="250" cy="250" r="111" fill="none" stroke="rgba(160,160,160,0.1)" strokeWidth="1.5"/>

                        <g transform="rotate(-50 250 250)">
                            <rect x="86" y="202" width="11" height="52" rx="3" fill="#181818" stroke="#2e2e2e" strokeWidth="1"/>
                            <rect x="158" y="202" width="11" height="52" rx="3" fill="#181818" stroke="#2e2e2e" strokeWidth="1"/>
                            <rect x="88" y="196" width="84" height="68" rx="10" fill="url(#gCal)" stroke="#ff4466" strokeWidth="1.5"/>
                            <line x1="104" y1="196" x2="104" y2="264" stroke="rgba(255,130,140,0.32)" strokeWidth="1.5"/>
                            <line x1="116" y1="196" x2="116" y2="264" stroke="rgba(255,130,140,0.32)" strokeWidth="1.5"/>
                            <line x1="128" y1="196" x2="128" y2="264" stroke="rgba(255,130,140,0.32)" strokeWidth="1.5"/>
                            <line x1="140" y1="196" x2="140" y2="264" stroke="rgba(255,130,140,0.32)" strokeWidth="1.5"/>
                            <line x1="152" y1="196" x2="152" y2="264" stroke="rgba(255,130,140,0.32)" strokeWidth="1.5"/>
                            <rect x="92" y="200" width="30" height="26" rx="5" fill="rgba(255,120,120,0.2)"/>
                            <circle cx="102" cy="208" r="6" fill="#7a0010" stroke="#ff3344" strokeWidth="1.2"/>
                            <circle cx="102" cy="252" r="6" fill="#7a0010" stroke="#ff3344" strokeWidth="1.2"/>
                            <circle cx="160" cy="208" r="6" fill="#7a0010" stroke="#ff3344" strokeWidth="1.2"/>
                            <circle cx="160" cy="252" r="6" fill="#7a0010" stroke="#ff3344" strokeWidth="1.2"/>
                            <circle cx="102" cy="208" r="2.5" fill="#550008"/>
                            <circle cx="102" cy="252" r="2.5" fill="#550008"/>
                            <circle cx="160" cy="208" r="2.5" fill="#550008"/>
                            <circle cx="160" cy="252" r="2.5" fill="#550008"/>
                            <rect x="81" y="210" width="9" height="44" rx="2" fill="#4a0008"/>
                            <rect x="169" y="210" width="9" height="44" rx="2" fill="#4a0008"/>
                            <rect x="108" y="222" width="44" height="16" rx="3" fill="rgba(0,0,0,0.5)"/>
                            <text x="130" y="233" textAnchor="middle" fill="#ffaaaa" fontSize="7.5" fontFamily="Arial Black" fontWeight="900" letterSpacing="1.2">BREMBO</text>
                        </g>

                        <circle cx="166" cy="312" r="58" fill="rgba(232,28,46,0.06)"/>
                        <circle cx="250" cy="250" r="55" fill="url(#gHub)" stroke="#b0b0b0" strokeWidth="2.5"/>

                        <g>
                            <g transform="rotate(0   250 250)"><circle cx="250" cy="208" r="10.5" fill="#767676" stroke="#c8c8c8" strokeWidth="1.5"/><circle cx="250" cy="208" r="6" fill="#383838"/><circle cx="250" cy="208" r="2.8" fill="#1e1e1e"/></g>
                            <g transform="rotate(72  250 250)"><circle cx="250" cy="208" r="10.5" fill="#686868" stroke="#b0b0b0" strokeWidth="1.5"/><circle cx="250" cy="208" r="6" fill="#383838"/><circle cx="250" cy="208" r="2.8" fill="#1e1e1e"/></g>
                            <g transform="rotate(144 250 250)"><circle cx="250" cy="208" r="10.5" fill="#747474" stroke="#bcbcbc" strokeWidth="1.5"/><circle cx="250" cy="208" r="6" fill="#383838"/><circle cx="250" cy="208" r="2.8" fill="#1e1e1e"/></g>
                            <g transform="rotate(216 250 250)"><circle cx="250" cy="208" r="10.5" fill="#686868" stroke="#b0b0b0" strokeWidth="1.5"/><circle cx="250" cy="208" r="6" fill="#383838"/><circle cx="250" cy="208" r="2.8" fill="#1e1e1e"/></g>
                            <g transform="rotate(288 250 250)"><circle cx="250" cy="208" r="10.5" fill="#767676" stroke="#c0c0c0" strokeWidth="1.5"/><circle cx="250" cy="208" r="6" fill="#383838"/><circle cx="250" cy="208" r="2.8" fill="#1e1e1e"/></g>
                        </g>

                        <circle cx="250" cy="250" r="30" fill="#181818" stroke="#666" strokeWidth="2"/>
                        <circle cx="250" cy="250" r="23" fill="#101010" stroke="#3a3a3a" strokeWidth="1"/>
                        <circle cx="250" cy="250" r="16" fill="#0c0c0c"/>
                        <text x="250" y="254" textAnchor="middle" fill="#e81c2e" fontSize="10.5" fontFamily="Arial Black" fontWeight="900" letterSpacing="0.5">R34</text>
                        <circle cx="250" cy="250" r="246" fill="url(#gSpec)"/>
                    </svg>
                </Box>
                
                {/* Embedded Smoke Container to sync exactly with tire position */}
                <Box ref={smokeContainerRef} sx={{ position: 'absolute', bottom: '0px', left: 0, width: '100%', height: '100%', zIndex: 10, pointerEvents: 'none' }} />
            </Box>

            {/* Completely performant solid gradient overlay - No GPU-choking backdropFilter! */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    zIndex: 15,
                    pointerEvents: 'none',
                    background: isDark 
                        ? 'linear-gradient(135deg, rgba(8,8,8,0.7) 0%, rgba(15,23,42,0.85) 100%)' 
                        : 'linear-gradient(135deg, rgba(248,250,252,0.85) 0%, rgba(255,255,255,0.95) 100%)',
                }}
            />
        </Box>
    );
}

const primary = "#3b82f6"; // Fallback primary color for the definition

export default GTRTireBackground;

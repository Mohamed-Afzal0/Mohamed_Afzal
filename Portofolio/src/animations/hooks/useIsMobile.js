import { useState, useEffect } from 'react';

/**
 * Custom hook to detect if the user is on a mobile/touch device
 * Used for performance optimizations - render lighter versions on mobile
 *
 * @returns {Object} - { isMobile, isTouch, screenWidth }
 */
export function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);
    const [isTouch, setIsTouch] = useState(false);
    const [screenWidth, setScreenWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 1024
    );

    useEffect(() => {
        const checkMobile = () => {
            const width = window.innerWidth;
            const touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            const isMobileDevice = width < 768 || touchDevice;

            setIsMobile(isMobileDevice);
            setIsTouch(touchDevice);
            setScreenWidth(width);
        };

        // Initial check
        checkMobile();

        // Debounced resize handler
        let resizeTimeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(checkMobile, 100);
        };

        window.addEventListener('resize', handleResize);

        // Check on orientation change (mobile)
        window.addEventListener('orientationchange', checkMobile);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('orientationchange', checkMobile);
            clearTimeout(resizeTimeout);
        };
    }, []);

    return { isMobile, isTouch, screenWidth };
}

/**
 * Returns animation props optimized for the device
 * Mobile devices get simpler, faster animations
 *
 * @param {Object} desktopProps - Animation props for desktop
 * @param {Object} mobileProps - Animation props for mobile (simpler)
 * @returns {Object} - Appropriate animation props
 */
export function useResponsiveAnimation(desktopProps, mobileProps = {}) {
    const { isMobile } = useIsMobile();

    if (isMobile) {
        return {
            ...desktopProps,
            ...mobileProps,
            // Mobile defaults: simpler, faster
            transition: mobileProps.transition || { duration: 0.2 },
        };
    }

    return desktopProps;
}

export default useIsMobile;
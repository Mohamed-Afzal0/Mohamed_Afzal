// Scale animation variants for Framer Motion
// These provide scale-based animations for elements

export const scaleIn = {
    hidden: {
        scale: 0.8,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

export const scaleInCenter = {
    hidden: {
        scale: 0,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

export const popIn = {
    hidden: {
        scale: 0.5,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
        },
    },
};

export const bounceIn = {
    hidden: {
        scale: 0.3,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 15,
        },
    },
};

// For hover interactions
export const scaleHover = {
    scale: 1.05,
    transition: {
        duration: 0.3,
        ease: 'easeOut',
    },
};

export const scaleHoverLarge = {
    scale: 1.1,
    transition: {
        duration: 0.3,
        ease: 'easeOut',
    },
};

// 3D tilt effect variants
export const tilt3D = {
    hidden: {
        rotateX: 15,
        rotateY: -15,
        opacity: 0,
    },
    visible: {
        rotateX: 0,
        rotateY: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

// Customizable scale variants
export const createScaleIn = (initialScale = 0.8, duration = 0.5) => ({
    hidden: { scale: initialScale, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration, ease: [0.25, 0.46, 0.45, 0.94] },
    },
});

export const createPopIn = (stiffness = 300, damping = 20) => ({
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { type: 'spring', stiffness, damping },
    },
});
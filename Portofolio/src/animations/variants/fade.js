// Fade animation variants for Framer Motion
// These provide smooth fade-in/out transitions from different directions

export const fadeIn = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

export const fadeInUp = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

export const fadeInDown = {
    hidden: {
        opacity: 0,
        y: -40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

export const fadeInLeft = {
    hidden: {
        opacity: 0,
        x: -40,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

export const fadeInRight = {
    hidden: {
        opacity: 0,
        x: 40,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

// Variants with customizable duration
export const createFadeIn = (duration = 0.5) => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration, ease: 'easeOut' },
    },
});

export const createFadeInUp = (duration = 0.5, distance = 40) => ({
    hidden: { opacity: 0, y: distance },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration, ease: 'easeOut' },
    },
});

export const createFadeInDown = (duration = 0.5, distance = 40) => ({
    hidden: { opacity: 0, y: -distance },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration, ease: 'easeOut' },
    },
});

export const createFadeInLeft = (duration = 0.5, distance = 40) => ({
    hidden: { opacity: 0, x: -distance },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration, ease: 'easeOut' },
    },
});

export const createFadeInRight = (duration = 0.5, distance = 40) => ({
    hidden: { opacity: 0, x: distance },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration, ease: 'easeOut' },
    },
});
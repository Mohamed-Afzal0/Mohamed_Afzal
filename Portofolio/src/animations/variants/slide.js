// Slide animation variants for Framer Motion
// These provide directional slide animations without fade

export const slideInLeft = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

export const slideInRight = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

export const slideInUp = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

export const slideInDown = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

// Customizable slide variants
export const createSlideInLeft = (distance = 100, duration = 0.6) => ({
    hidden: { x: -distance, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration, ease: [0.25, 0.46, 0.45, 0.94] },
    },
});

export const createSlideInRight = (distance = 100, duration = 0.6) => ({
    hidden: { x: distance, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration, ease: [0.25, 0.46, 0.45, 0.94] },
    },
});

export const createSlideInUp = (distance = 100, duration = 0.6) => ({
    hidden: { y: distance, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration, ease: [0.25, 0.46, 0.45, 0.94] },
    },
});

export const createSlideInDown = (distance = 100, duration = 0.6) => ({
    hidden: { y: -distance, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration, ease: [0.25, 0.46, 0.45, 0.94] },
    },
});
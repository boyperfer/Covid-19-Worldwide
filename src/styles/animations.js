import { keyframes } from 'styled-components';

export const animationText = keyframes`
    from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228DFF, 0 0 70px #228DFF, 0 0 80px #228DFF, 0 0 100px #228DFF, 0 0 150px #228DFF;
    }
    to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228DFF, 0 0 35px #228DFF, 0 0 40px #228DFF, 0 0 50px #228DFF, 0 0 75px #228DFF;
    }
`;

export const anmationBlueButton = keyframes`
    100% {
        transform: scale(1.5);
    }
`;

export const moveInLeft = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-10rem);
    }

    80% {
        transform: translateX(1rem);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const moveInRight = keyframes`
    0% {
        opacity: 0;
        transform: translateX(10rem);
    }

    80% {
        transform: translateX(-1rem);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const fadeIn = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

export const fadeOut = keyframes`
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
`;

export const moveInBottom = keyframes`
    0% {
        opacity: 0;
        transform: translateY(10rem)
    }

    80% {
        transform: translateY(-1rem)
    }

    100% {
        opacity: 1;
        transform: translate(0)
    }
`;

export const bounce = keyframes`
    to {
        width: 1.6rem;
        height: 1.6rem;
        transform: translate3d(0, -1.6rem, 0)
    }
`;

export const loadingCircle = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const loadingText = keyframes`
    to {
        transform: rotate(-360deg);
    }
`;

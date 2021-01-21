import styled from "styled-components";

import mainStyle from "../../styles/main";

const {
    utils: { boxShadowCircle },
    device: { mobile, mobileS, mobileSLanscape, mobileLanscape },
} = mainStyle;

export const NavigationControl = styled.label.attrs({
    htmlFor: "input",
})`
    height: 7rem;
    width: 7rem;
    border-radius: 50%;
    background-color: #2a1353;

    position: fixed;
    bottom: 6rem;
    right: 4rem;
    z-index: 2000;
    text-align: center;
    cursor: pointer;
    backface-visibility: hidden;

    ${boxShadowCircle}

    @media ${mobile}, ${mobileLanscape}, ${mobileS} {
        height: 10rem;
        width: 10rem;
        bottom: 8rem;
        right: 4rem;
    }

    @media ${mobileSLanscape} {
        height: 10rem;
        width: 10rem;
    }
`;

export const NavigationLogo = styled.span`
    position: relative;
    margin-top: 3.5rem;
    backface-visibility: hidden;

    &,
    &::after,
    &::before {
        width: 3rem;
        height: 2px;
        background-color: #e9d2db;
        display: inline-block;
    }

    &::after,
    &::before {
        content: "";
        position: absolute;
        left: 0;
        transition: all 0.2s;
    }

    &::before {
        top: -0.8rem;
    }

    &::after {
        top: 0.9rem;
    }

    @media ${mobileSLanscape} {
        margin-top: 2.5rem;
        position: relative;

        &,
        &::after,
        &::before {
            width: 2rem;
            height: 2px;
            background-color: #e9d2db;
            display: inline-block;
        }

        &::after,
        &::before {
            content: "";
            position: absolute;
            left: 0;
            transition: all 0.2s;
        }

        &::before {
            top: -0.7rem;
        }

        &::after {
            top: 0.8rem;
        }
    }

    @media ${mobile}, ${mobileLanscape} {
        margin-top: 5rem;
        position: relative;

        &,
        &::after,
        &::before {
            width: 4.5rem;
            background-color: #e9d2db;
        }

        &::after,
        &::before {
            content: "";
            position: absolute;
            left: 0;
            transition: all 0.2s;
        }

        &::before {
            top: -1.2rem;
        }

        &::after {
            top: 1.3rem;
        }
    }
`;

export const NavigationContainer = styled.input.attrs({
    id: "input",
    type: "checkbox",
})`
    display: none;

    &:checked + ${NavigationControl} ${NavigationLogo} {
        background-color: transparent;
        &::before {
            top: 0;
            transform: rotate(-135deg);
        }

        &::after {
            top: 0;
            transform: rotate(135deg);
        }
    }
`;

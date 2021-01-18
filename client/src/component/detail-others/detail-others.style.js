import styled, { css } from "styled-components";

import mainStyle from "../../styles/main";

const {
    variables: { white, black, greyDark4, greyDark1 },
    device: { mobile },
} = mainStyle;

const getColor = ({ deaths }) => {
    return deaths
        ? css`
              color: black;
          `
        : css`
              color: rgb(102, 189, 64);
          `;
};

const getSize = ({ isTenMillion }) => {
    return isTenMillion
        ? css`
              font-size: 4rem;
          `
        : css`
              font-size: 5rem;
          `;
};

export const DetailOthersContainer = styled.div`
    margin-left: 5rem;
    height: auto;
    @media ${mobile} {
        bottom: 1rem;
        width: 100vw;
        margin: 0;
    }
`;

export const DetailOthersWrap = styled.div`
    position: fixed;
    top: 75vh;
    font-size: 3rem;
    height: 100%;
    color: ${greyDark1};
    /* background-color: ${greyDark4}; */
    /* background-color: ${white}; */
    background-color: rgb(255, 249, 239);
    /* background-color: #e9d2db; */
    z-index: 3000;
    @media ${mobile} {
        width: 100vw;
    }
`;

export const CloseContainer = styled.div`
    font-size: 3rem;
    text-align: right;
    padding-right: 3rem;
    padding-top: 3rem;
`;

export const ButtonContainer = styled.img`
    height: 3rem;
    width: 3rem;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 3rem;
`;

export const NameContainer = styled.div`
    font-size: 4rem;
    font-weight: 600;
    text-align: center;
    /* background-color: ${greyDark1}; */
    /* background-color: rgb(108, 67, 110); */
    background-color: rgb(255, 249, 239);
    /* background-color: #e9d2db; */
    color: ${black};
`;

export const ConfirmedContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 3rem;
    /* border-bottom: 1px solid ${greyDark1}; */
    margin: 3rem 1.5rem 1rem 2rem;
`;

export const CasesContainer = styled.div`
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
`;

export const NumberContainer = styled.div`
    /* font-size: 6rem; */
    ${getSize}
    font-weight: 700;
    color: #3a1a74;
`;

export const RecoveredAndDeaths = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    position: absolute;
    right: 4rem;
`;

export const RecoveredContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 3rem;
`;

export const DeathsContainer = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 3rem;

    margin: 2rem 3rem 0 3rem;
`;

export const NameRecoveredDeaths = styled.img`
    position: relative;
    z-index: 4000;
    width: 6rem;
    height: 6rem;
`;

export const NumberRecoveredDeaths = styled.div`
    font-size: 3rem;
    align-self: center;
    margin-left: 1rem;
    font-weight: 600;
    ${getColor}
`;

export const ImgContainer = styled.img`
    width: 6rem;
    max-height: 6rem;
    margin-left: 1rem;
`;

export const EllipsisContainer = styled.div`
    font-size: 4rem;
    color: #185c16;
    text-align: center;
    align-self: center;
`;

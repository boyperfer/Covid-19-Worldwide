import styled, { css } from "styled-components";

import mainStyle from "../../styles/main";

const {
    variables: { white, black, greyDark1 },
    device: { mobile },
    utils: { boxShadownTable },
    animations: { fadeInUp },
} = mainStyle;

const getColorSizeDeaths = ({ deaths }) => {
    return deaths
        ? css`
              color: black;
              font-size: 2.5rem;
          `
        : css`
              color: rgb(102, 189, 64);
          `;
};

const getSize = ({ isTenMillion, isTenMillionRecovered }) => {
    return isTenMillion || isTenMillionRecovered
        ? css`
              font-size: 2.7rem;
              @media ${mobile} {
                  font-size: 4rem;
              }
          `
        : css`
              font-size: 3rem;
              @media ${mobile} {
                  font-size: 5rem;
              }
          `;
};

const getAnimation = ({ chosenCountry }) => {
    return !chosenCountry.length
        ? css``
        : css`
              animation: ${fadeInUp} 0.5s ease-out;
              @media ${mobile} {
                  animation: ${fadeInUp} 0.5s ease-out;
              }
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
    top: 4rem;
    height: 25vh;
    width: 30vw;
    color: ${greyDark1};
    background-color: ${white};
    ${boxShadownTable}
    ${getAnimation}
    z-index: 3000;
    @media ${mobile} {
        width: 100vw;
        top: 75vh;
        height: 100%;
    }
`;

export const CloseContainer = styled.div`
    text-align: right;
    padding-right: 1rem;
    padding-top: 1rem;
    @media ${mobile} {
        padding-right: 3rem;
        padding-top: 3rem;
    }
`;

export const ButtonContainer = styled.img`
    height: 2rem;
    width: 2rem;
    @media ${mobile} {
        height: 3rem;
        width: 3rem;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 3rem;
`;

export const NameContainer = styled.div`
    font-size: 3rem;
    font-weight: 600;
    text-align: center;
    background-color: ${white};
    color: ${black};
    @media ${mobile} {
        font-size: 4rem;
    }
`;

export const ConfirmedContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 3rem;
    margin: 2rem 1.5rem 2rem 0rem;
    @media ${mobile} {
        margin: 3rem 1.5rem 2rem 0rem;
    }
`;

export const CasesContainer = styled.div`
    text-align: center;
    font-weight: 700;
`;

export const NumberContainer = styled.div`
    font-weight: 700;
    ${getSize}
    color: #3a1a74;
`;

export const RecoveredAndDeaths = styled.div`
    display: flex;
    flex-direction: column;

    position: absolute;
    right: 1rem;
    margin-top: 2rem;
    @media ${mobile} {
        margin-top: 3rem;
        right: 4rem;
    }
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
    width: 3rem;
    height: 3rem;
    @media ${mobile} {
        width: 6rem;
        height: 6rem;
    }
`;

export const NumberRecoveredDeaths = styled.div`
    font-size: 2.5rem;
    align-self: center;
    margin-left: 1rem;
    font-weight: 600;

    ${getColorSizeDeaths}

    @media ${mobile} {
        font-size: 3rem;
    }
`;

export const ImgContainer = styled.img`
    width: 6rem;
    height: 3rem;
    @media ${mobile} {
        width: 10rem;
        height: 4rem;
    }
`;

export const EllipsisContainer = styled.div`
    font-size: 4rem;
    line-height: 1rem;
    height: 3rem;
    color: #185c16;
    text-align: center;
`;

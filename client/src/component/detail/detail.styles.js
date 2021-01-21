import styled, { css } from "styled-components";

import mainStyle from "../../styles/main";

const {
    variables: { textWhite, white },
    device: { mobile },
} = mainStyle;

const getName = ({ recovered, deaths }) => {
    return recovered
        ? css`
              color: #185c16;
          `
        : deaths
        ? css`
              color: #6b1a18;
          `
        : css`
              color: #3a1a74;
          `;
};

const getFontSize = ({ isMillion }) => {
    return isMillion
        ? css`
              font-size: 4.5rem;
              @media ${mobile} {
                  font-size: 7rem;
              }
          `
        : css`
              font-size: 7rem;
              @media ${mobile} {
                  font-size: 10rem;
              }
          `;
};

const getColorNumber = ({ recovered, confirmed, deaths }) => {
    return recovered
        ? css`
              color: #185c16;
              ${getFontSize}
          `
        : deaths
        ? css`
              color: #6b1a18;
              ${getFontSize};
          `
        : confirmed
        ? css`
              color: #3a1a74;
              ${getFontSize}
          `
        : css`
              color: ${textWhite};
          `;
};

const getItem = ({ one, two, three }) => {
    return one
        ? css`
              grid-row: 1 /2;
          `
        : two
        ? css`
              grid-row: 2 / 3;
          `
        : three
        ? css`
              grid-row: 3/ 4;
          `
        : null;
};

export const TableContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);

    background-color: ${white};
    align-items: stretch;
`;

export const WrapContainer = styled.div`
    text-align: center;
    position: relative;
    margin: 0 4rem 2rem 4rem;
    border-bottom: 1rem solid rgb(50, 93, 154);
    ${getItem}
    @media ${mobile} {
        margin: 0 7rem 3rem 7rem;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const NameContainer = styled.p`
    background-color: transparent;
    font-weight: 500;
    font-size: 3rem;
    margin: 0;
    text-align: center;
    ${getName}

    @media ${mobile} {
        font-size: 5rem;
    }
`;

export const NumberContainer = styled.span`
    text-align: center;
    font-weight: 700;
    ${getColorNumber}
`;

export const EllipsisContainer = styled.div`
    font-size: 6rem;
    color: #185c16;
`;

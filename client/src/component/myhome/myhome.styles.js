import styled, { css } from "styled-components";

import mainStyle from "../../styles/main";

import Flag from "../flag/flag.component";
import NavigationHome from "../navigation-home/navigation-home.component";
import Date from "../date/date.component";
import Detail from "../detail/detail.component";
import OtherCountries from "../other-countries/other-countries.component";

const {
    variables: { black },
    device: { mobile },
    animations: { fadeOutDown, fadeInUp },
} = mainStyle;

const getAnimation = ({ isOnHome }) => {
    return isOnHome
        ? css`
              animation: ${fadeInUp} 0.5s ease;
              visibility: visible;
          `
        : css`
              animation: ${fadeOutDown} 0.5s ease;
              visibility: hidden;
              transition: visibility 0.5s;
          `;
};

export const OverallContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HomeContainer = styled.div`
    height: 100vh;
    background-color: ${black};
    display: grid;
    grid-template-rows: max-content 1fr max-content min-content;
    grid-template-columns: 25vw;
    justify-content: center;
    @media ${mobile} {
        position: absolute;
        grid-template-columns: 90vw;
        height: 80vh;
        ${getAnimation}
        z-index: 500;
    }
    backface-visibility: hidden;
    overflow: hidden;
`;

export const FlagContainer = styled(Flag)`
    grid-row: 1/2;
`;

export const DetailContainer = styled(Detail)`
    grid-row: 2 / 3;
`;

export const FilterContainer = styled(OtherCountries)`
    grid-row: 2 / 3;
`;

export const NavigationHomeContainer = styled(NavigationHome)`
    grid-row: 3/4;
`;

export const DateContainer = styled(Date)`
    grid-row: 5/6;
`;

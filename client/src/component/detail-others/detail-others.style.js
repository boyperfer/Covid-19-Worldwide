import styled from "styled-components";

import mainStyle from "../../styles/main";

const {
    variables: { white, black, greyDark4, greyDark1 },
    device: { mobile },
} = mainStyle;

export const DetailOthersContainer = styled.div`
    position: fixed;
    top: 6rem;
    margin-left: 3rem;

    @media @{mobile} {
        bottom: 3rem;

    }
`;

export const DetailOthersWrap = styled.div`
    font-size: 3rem;
    color: ${white};
    /* background-color: ${greyDark4}; */
    background-color: ${white};
`;

export const NameContainer = styled.div`
    font-size: 3rem;
    text-align: center;
    background-color: ${greyDark1};
`;

export const ConfirmedContainer = styled.div`
    font-size: 3rem;
`;
export const RecoveredContainer = styled.div`
    font-size: 3rem;
`;

export const DeathsContainer = styled.div`
    font-size: 3rem;
`;

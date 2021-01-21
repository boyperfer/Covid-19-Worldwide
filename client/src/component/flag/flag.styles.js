import styled from "styled-components";

import mainStyle from "../../styles/main";

const {
    variables: { white, black },
    device: { mobile },
} = mainStyle;

export const CountryContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1rem solid rgb(50, 93, 154);
    background-color: ${white};
    margin: 3rem 5rem;
`;

export const NameCountryContainer = styled.h1`
    color: 2f173b;
    font-size: 5rem;
    margin: 0;
    padding: 0 1rem;
`;

export const ImgContainer = styled.img`
    width: 6rem;
    max-height: 6rem;
`;

export const TotalCasesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    margin: 1rem 1rem 1rem 0;
    @media ${mobile} {
        margin: 1rem 1rem 0 1rem;
    }
`;

export const TotalCasesNumberContainer = styled.div`
    color: #3a1a74;
    font-size: 5rem;
    font-weight: 700;
`;

export const TotalCaseNameConatiner = styled.h1`
    font-size: 2rem;
    color: ${black};
    margin: 0;

    @media ${mobile} {
        font-size: 3rem;
    }
`;

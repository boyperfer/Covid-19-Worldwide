import styled from "styled-components";

import mainStyles from "../../styles/main";
import { black } from "../../styles/variables";

const {
    variables: { greyDark1, greyDark4, greyDark3, textWhite, primary, white },
    device: { mobile },
} = mainStyles;

export const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    height: 100%;
    overflow: auto;
    overscroll-behavior-y: auto;

    @media ${mobile} {
        padding: 0 1rem;
    }
`;

export const SearchFieldWrap = styled.div`
    background-color: black;
    position: sticky;
    top: 0;
    margin-bottom: 1rem;
    padding-right: 1rem;
    @media ${mobile} {
        padding: 0;
    }
`;

export const SearchFieldContainer = styled.input`
    background-color: ${greyDark1};
    color: ${textWhite};
    text-align: center;
    width: 100%;
    font-size: 2.5rem;
    padding-right: 1rem;
    border: 1px solid ${black};
    border-top: none;
    @media ${mobile} {
        padding: 0;
        font-size: 3.5rem;
    }
`;

export const WrapContainer = styled.div`
    background-color: black;
    border: 1px solid black;
    padding-right: 1rem;
    border-bottom: none;
    /* overflow: auto;
    overscroll-behavior-y: auto; */

    @media ${mobile} {
        padding: 0;
    }
`;

export const CountryContainer = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    background-color: ${greyDark4};
    font-size: 2.3rem;
    color: ${textWhite};
    border-bottom: 2px solid ${greyDark1};
    padding: 0 1rem;

    @media ${mobile} {
        font-size: 3.5rem;
    }
`;

export const CasesContainer = styled.div`
    color: ${primary};
    margin-left: 1rem;
`;

export const NameContainer = styled.div`
    color: ${white};
`;

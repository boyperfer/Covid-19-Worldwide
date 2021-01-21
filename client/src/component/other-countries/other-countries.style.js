import styled from "styled-components";

import mainStyles from "../../styles/main";
import { black } from "../../styles/variables";

const {
    variables: { textWhite },
    device: { mobile },
} = mainStyles;

export const TableContainer = styled.div`
    display: flex;
    flex-direction: column;

    background-color: white;
    height: 100%;
    overflow: auto;
    overscroll-behavior-y: auto;

    @media ${mobile} {
        padding: 0 1rem;
    }
`;

export const SearchFieldWrap = styled.div`
    background-color: white;
    position: sticky;
    top: 0;
    margin-bottom: 1rem;
    padding-right: 1rem;
    @media ${mobile} {
        padding: 0;
    }
`;

export const SearchFieldContainer = styled.input`
    background-color: white;
    color: ${black};
    text-align: center;
    width: 100%;
    font-size: 2.5rem;
    padding-right: 1rem;
    border: 1px solid ${black};
    border-radius: 50px;
    @media ${mobile} {
        padding: 0;
        font-size: 3.5rem;
    }
`;

export const WrapContainer = styled.div`
    border-bottom: 1px solid black;
    padding-right: 1rem;

    @media ${mobile} {
        padding: 0;
    }
`;

export const CountryContainer = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid rgb(221, 221, 221);
    margin: 0 2rem;
    background-color: white;
    font-size: 2.3rem;
    color: ${textWhite};
    padding: 0 1rem;

    @media ${mobile} {
        font-size: 3.5rem;
    }
`;

export const CasesContainer = styled.div`
    color: #3a1a74;
    font-weight: 600;
    margin-left: 1rem;

    @media ${mobile} {
        margin-left: 1.5rem;
    }
`;

export const NameContainer = styled.div`
    color: ${black};
    font-size: 2.2rem;
    @media ${mobile} {
        font-size: 3.5rem;
    }
`;

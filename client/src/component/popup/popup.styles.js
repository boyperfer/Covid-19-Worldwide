import styled from "styled-components";

import { Popup } from "react-mapbox-gl";

import mainStyle from "../../styles/main";

const {
    device: { mobile },
} = mainStyle;

export const PopupContainer = styled(Popup)`
    display: flex;
    font-size: 15px;
`;

export const NameContainer = styled.div`
    font-weight: bold;
    padding: 5px;
    margin: 5px 10px;
    display: flex;

    @media ${mobile} {
    }
`;

export const NumberContainer = styled.div`
    padding: 5px;
    margin: 5px 10px;
`;

export const CountryContainer = styled.img`
    width: 20px;
    height: 20px;
    margin: 0 10px;
`;

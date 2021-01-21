import React from "react";

import { useSelector } from "react-redux";

import {
    selectDataObjectCorona,
    selectIsFetchingObject,
    selectTotalCases,
} from "../../redux/data/data.selectors";
import {
    selectHome,
    selectToggleBackgroundHome,
} from "../../redux/myhome/myhome.selectors";

import { numberWithCommas } from "../../assets/utils/utils";

import {
    CountryContainer,
    NameCountryContainer,
    ImgContainer,
    TotalCasesContainer,
    TotalCaseNameConatiner,
    TotalCasesNumberContainer,
} from "./flag.styles";

const Flag = () => {
    const dataObject = useSelector(selectDataObjectCorona);
    const totalCases = useSelector(selectTotalCases);
    const isOthers = useSelector(selectToggleBackgroundHome);
    const home = useSelector(selectHome);
    const isFetchingObject = useSelector(selectIsFetchingObject);
    const country = isFetchingObject ? {} : dataObject[home];
    const { name, code } = country;
    return isOthers[0] === "others" ? (
        <TotalCasesContainer>
            <TotalCaseNameConatiner>Total Cases</TotalCaseNameConatiner>
            <TotalCasesNumberContainer>
                {numberWithCommas(totalCases)}
            </TotalCasesNumberContainer>
        </TotalCasesContainer>
    ) : (
        <CountryContainer>
            <NameCountryContainer>{name}</NameCountryContainer>
            <ImgContainer
                src={`https://lipis.github.io/flag-icon-css/flags/4x3/${code}.svg`}
            />
        </CountryContainer>
    );
};

export default Flag;

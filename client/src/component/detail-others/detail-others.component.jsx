import React from "react";
import { useSelector } from "react-redux";

import { selectCountry } from "../../redux/myhome/myhome.selectors";
import {
    selectDataObjectCorona,
    selectIsFetchingObject,
} from "../../redux/data/data.selectors";

import {
    DetailOthersContainer,
    DeathsContainer,
    NameContainer,
    ConfirmedContainer,
    DetailOthersWrap,
    RecoveredContainer,
} from "./detail-others.style";

const DetailOthers = () => {
    const chosenCountry = useSelector(selectCountry);

    const dataObjectCorona = useSelector(selectDataObjectCorona);
    const isFetchingObject = useSelector(selectIsFetchingObject);
    const country = isFetchingObject
        ? {}
        : dataObjectCorona[chosenCountry[0].toLowerCase().replace(/\s+/g, "")];
    const { deaths, confirmed, recovered, name } = country;
    return (
        <DetailOthersContainer>
            <DetailOthersWrap>
                <NameContainer>{name}</NameContainer>
                <ConfirmedContainer>Cases: {confirmed}</ConfirmedContainer>
                <RecoveredContainer>Recovered: {recovered}</RecoveredContainer>
                <DeathsContainer>Deaths: {deaths}</DeathsContainer>
            </DetailOthersWrap>
        </DetailOthersContainer>
    );
};

export default DetailOthers;

import React from "react";

import { useSelector } from "react-redux";

import {
    selectDataObjectCorona,
    selectIsFetchingObject,
} from "../../redux/data/data.selectors";
import { selectHome } from "../../redux/myhome/myhome.selectors";
import { selectVietnamese } from "../../redux/language/language.selectors";

import { vernacular } from "../../assets/utils/utils";

import { DateContainer, TitleContainer, TimeContainer } from "./date.styles";

const Date = () => {
    const dataObject = useSelector(selectDataObjectCorona);
    const home = useSelector(selectHome);
    const isVietnamese = useSelector(selectVietnamese);
    const name = isVietnamese ? vernacular["VN"] : vernacular["ENG"];
    const isFetchingObject = useSelector(selectIsFetchingObject);
    const numnber = isFetchingObject ? {} : dataObject[home];
    const { lastUpdate } = numnber;
    const { lastUpdateW } = name;
    return (
        <DateContainer>
            <TitleContainer>{lastUpdateW} (M/D/YYYY)</TitleContainer>
            <TimeContainer>{lastUpdate}</TimeContainer>
        </DateContainer>
    );
};

export default Date;

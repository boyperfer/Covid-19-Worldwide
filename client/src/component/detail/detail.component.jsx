import React from "react";

import { useSelector } from "react-redux";

import {
    selectDataObjectCorona,
    selectIsFetchingObject,
} from "../../redux/data/data.selectors";
import { selectHome } from "../../redux/myhome/myhome.selectors";
import { selectVietnamese } from "../../redux/language/language.selectors";

import { numberWithCommas, vernacular } from "../../assets/utils/utils";

import {
    WrapContainer,
    NameContainer,
    NumberContainer,
    TableContainer,
    EllipsisContainer,
} from "./detail.styles";

const Detail = () => {
    const dataObject = useSelector(selectDataObjectCorona);
    const home = useSelector(selectHome);
    const isFetchingObject = useSelector(selectIsFetchingObject);
    const isVietnamese = useSelector(selectVietnamese);
    const number = isFetchingObject ? {} : dataObject[home];
    const title = isVietnamese ? vernacular["VN"] : vernacular["ENG"];
    const { confirmedW, recoveredW, deathsW } = title;
    const { confirmed, recovered, deaths } = number;
    const isMillion = confirmed >= 1000000 ? true : false;
    return isFetchingObject ? (
        <div />
    ) : (
        <TableContainer>
            <WrapContainer one>
                <NameContainer> {confirmedW} </NameContainer>
                <NumberContainer isMillion={isMillion} confirmed={confirmed}>
                    {!confirmed ? (
                        <EllipsisContainer>...</EllipsisContainer>
                    ) : (
                        numberWithCommas(confirmed)
                    )}
                </NumberContainer>
            </WrapContainer>
            <WrapContainer two>
                <NameContainer recovered> {recoveredW} </NameContainer>
                <NumberContainer isMillion={isMillion} recovered={recovered}>
                    {!recovered ? (
                        <EllipsisContainer>...</EllipsisContainer>
                    ) : (
                        numberWithCommas(recovered)
                    )}
                </NumberContainer>
            </WrapContainer>
            <WrapContainer three last>
                <NameContainer deaths> {deathsW} </NameContainer>
                <NumberContainer isMillion={isMillion} deaths={deaths}>
                    {!deaths ? (
                        <EllipsisContainer>...</EllipsisContainer>
                    ) : (
                        numberWithCommas(deaths)
                    )}{" "}
                </NumberContainer>
            </WrapContainer>
        </TableContainer>
    );
};

export default Detail;

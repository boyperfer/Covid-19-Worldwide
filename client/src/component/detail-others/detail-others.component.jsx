import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectCountry } from "../../redux/myhome/myhome.selectors";
import { selectDataObjectCorona } from "../../redux/data/data.selectors";

import { changeCountry } from "../../redux/myhome/myhome.actions";

import { numberWithCommas } from "../../assets/utils/utils";

import healthImage from "../../assets/icon/image-health.png";
import deathsImage from "../../assets/icon/deaths.png";
import closeImage from "../../assets/icon/close.png";

import {
    DetailOthersContainer,
    DeathsContainer,
    NameContainer,
    ConfirmedContainer,
    DetailOthersWrap,
    RecoveredContainer,
    NumberContainer,
    CasesContainer,
    Wrapper,
    RecoveredAndDeaths,
    NameRecoveredDeaths,
    NumberRecoveredDeaths,
    ImgContainer,
    CloseContainer,
    ButtonContainer,
    EllipsisContainer,
} from "./detail-others.style";

const DetailOthers = () => {
    const dispatch = useDispatch();
    const chosenCountry = useSelector(selectCountry);
    const dataObjectCorona = useSelector(selectDataObjectCorona);
    const country = !chosenCountry.length
        ? []
        : dataObjectCorona[chosenCountry[0].toLowerCase().replace(/\s+/g, "")];
    const { deaths, confirmed, recovered, name, code } = country;
    const isTenMillion = confirmed >= 10000000 ? true : false;
    const isTenMillionRecovered = recovered >= 10000000 ? true : false;
    return (
        <DetailOthersContainer>
            <DetailOthersWrap chosenCountry={chosenCountry}>
                <CloseContainer>
                    <ButtonContainer
                        src={closeImage}
                        onClick={() => dispatch(changeCountry([]))}
                    />
                </CloseContainer>
                <NameContainer>
                    {name}
                    <ImgContainer
                        src={`https://lipis.github.io/flag-icon-css/flags/4x3/${code}.svg`}
                    />
                </NameContainer>
                <Wrapper>
                    <ConfirmedContainer>
                        <CasesContainer>Cases </CasesContainer>
                        <NumberContainer isTenMillion={isTenMillion}>
                            {!confirmed ? (
                                <EllipsisContainer>...</EllipsisContainer>
                            ) : (
                                numberWithCommas(confirmed)
                            )}
                        </NumberContainer>
                    </ConfirmedContainer>
                    <RecoveredAndDeaths>
                        <RecoveredContainer>
                            <NameRecoveredDeaths src={healthImage} alt={1} />
                            <NumberRecoveredDeaths
                                isTenMillionRecovered={isTenMillionRecovered}
                            >
                                {!recovered ? (
                                    <EllipsisContainer>...</EllipsisContainer>
                                ) : (
                                    numberWithCommas(recovered)
                                )}
                            </NumberRecoveredDeaths>
                        </RecoveredContainer>
                        <DeathsContainer>
                            <NameRecoveredDeaths src={deathsImage} alt={1} />
                            <NumberRecoveredDeaths deaths>
                                {!deaths ? (
                                    <EllipsisContainer>...</EllipsisContainer>
                                ) : (
                                    numberWithCommas(deaths)
                                )}
                            </NumberRecoveredDeaths>
                        </DeathsContainer>
                    </RecoveredAndDeaths>
                </Wrapper>
            </DetailOthersWrap>
        </DetailOthersContainer>
    );
};

export default DetailOthers;

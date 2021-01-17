import React from "react";
import { useSelector } from "react-redux";

import { selectIsFetching } from "../../redux/data/data.selectors";
import {
    selectToggleHome,
    selectDisplayHome,
    selectToggleBackgroundHome,
} from "../../redux/myhome/myhome.selectors";

import { mobileAndTabletcheck } from "../../assets/utils/utils";

import {
    HomeContainer,
    DetailContainer,
    FlagContainer,
    NavigationHomeContainer,
    DateContainer,
    OverallContainer,
    FilterContainer,
} from "./myhome.styles";

const MyHome = () => {
    const isFetching = useSelector(selectIsFetching);
    const isOnHome = useSelector(selectToggleHome);
    const displayHome = useSelector(selectDisplayHome);
    const mobile = mobileAndTabletcheck();
    const isOthers = useSelector(selectToggleBackgroundHome);

    return isFetching ? (
        <div />
    ) : mobile ? (
        displayHome ? (
            <div>
                <OverallContainer>
                    <HomeContainer isOnHome={isOnHome}>
                        <FlagContainer />
                        {isOthers[0] === "others" ? (
                            <FilterContainer />
                        ) : (
                            <DetailContainer />
                        )}
                        <NavigationHomeContainer />
                        <DateContainer />
                    </HomeContainer>
                </OverallContainer>
            </div>
        ) : null
    ) : (
        <HomeContainer>
            <FlagContainer />
            {isOthers[0] === "others" ? (
                <FilterContainer />
            ) : (
                <DetailContainer />
            )}
            <NavigationHomeContainer />
            <DateContainer />
        </HomeContainer>
    );
};

export default MyHome;

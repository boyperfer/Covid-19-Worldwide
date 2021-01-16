import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
    selectIsFetching,
    selectDataObjectCorona,
    selectDataCorona,
} from "../../redux/data/data.selectors";
import { objectFilter } from "../../redux/data/data.utils";
import {
    selectToggleHome,
    selectDisplayHome,
    selectHome,
} from "../../redux/myhome/myhome.selectors";
import { changeMyHome } from "../../redux/myhome/myhome.actions";

import { mobileAndTabletcheck } from "../../assets/utils/utils";

import {
    HomeContainer,
    DetailContainer,
    FlagContainer,
    NavigationHomeContainer,
    DateContainer,
    OverallContainer,
} from "./myhome.styles";

const MyHome = () => {
    const isFetching = useSelector(selectIsFetching);
    const dataObjectCorona = useSelector(selectDataObjectCorona);
    const dataCorona = useSelector(selectDataCorona);
    const isOnHome = useSelector(selectToggleHome);
    const displayHome = useSelector(selectDisplayHome);
    const dispatch = useDispatch();
    const mobile = mobileAndTabletcheck();
    const home = useSelector(selectHome);

    const filter = isFetching
        ? null
        : dataCorona.filter((data) =>
              data.name.toLowerCase().includes(home[0].toLowerCase())
          );
    return isFetching ? (
        <div />
    ) : mobile ? (
        displayHome ? (
            <div>
                <OverallContainer>
                    <HomeContainer isOnHome={isOnHome}>
                        <FlagContainer />
                        <DetailContainer />
                        <NavigationHomeContainer />
                        <DateContainer />
                    </HomeContainer>
                </OverallContainer>
            </div>
        ) : null
    ) : (
        // <HomeContainer>
        //     <FlagContainer />
        //     <DetailContainer />
        //     <NavigationHomeContainer />
        //     <DateContainer />
        // </HomeContainer>
        <div>
            <input
                type="search"
                placeholder="search country"
                onChange={(e) => dispatch(changeMyHome(e.target.value))}
            />
            <div>{filter.map((obj) => obj.name)}</div>
        </div>
    );
};

export default MyHome;

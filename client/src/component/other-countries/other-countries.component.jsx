import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectFilter } from "../../redux/myhome/myhome.selectors";
import {
    filterCountries,
    changeCountry,
} from "../../redux/myhome/myhome.actions";

import {
    selectIsFetching,
    selectDataCorona,
} from "../../redux/data/data.selectors";

import { numberWithCommas } from "../../assets/utils/utils";

import {
    TableContainer,
    CountryContainer,
    WrapContainer,
    SearchFieldContainer,
    SearchFieldWrap,
    CasesContainer,
    NameContainer,
} from "./other-countries.style";

const OtherCountries = () => {
    const dispatch = useDispatch();
    const countriesFilter = useSelector(selectFilter);
    const dataCorona = useSelector(selectDataCorona);
    const isFetching = useSelector(selectIsFetching);

    const filter = isFetching
        ? null
        : dataCorona.filter((data) =>
              data.name.toLowerCase().includes(countriesFilter)
          );
    return (
        <TableContainer>
            <SearchFieldWrap>
                <SearchFieldContainer
                    type="search"
                    placeholder="Search Country"
                    onChange={(e) => dispatch(filterCountries(e.target.value))}
                />
            </SearchFieldWrap>
            <WrapContainer>
                {filter.map((obj) => (
                    <CountryContainer
                        onClick={() => dispatch(changeCountry(obj.name))}
                    >
                        <NameContainer>{obj.name}</NameContainer>
                        <CasesContainer>
                            {numberWithCommas(obj.confirmed)}
                        </CasesContainer>
                    </CountryContainer>
                ))}
            </WrapContainer>
        </TableContainer>
    );
};

export default OtherCountries;

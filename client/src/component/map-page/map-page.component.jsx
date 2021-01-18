import React, { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchDataStartAsync } from "../../redux/data/data.actions";

import { selectIsFetching } from "../../redux/data/data.selectors";
import { selectCountry } from "../../redux/myhome/myhome.selectors";

import WithLoader from "../with-loader/with-loader.component";
import { DetailOthersContainer } from "./map-page.style";

const Mapbox = lazy(() => import("../mapbox/mapbox.component"));

const MapLoader = WithLoader(Mapbox);

const MapPage = () => {
    const dispatch = useDispatch();
    const country = useSelector(selectCountry);
    const isFetching = useSelector(selectIsFetching);
    useEffect(() => {
        dispatch(fetchDataStartAsync());
    }, [dispatch]);
    return (
        <div>
            <Suspense fallback={<div>asdf</div>}>
                <MapLoader isFetching={isFetching} />
            </Suspense>
            {!country.length ? <div /> : <DetailOthersContainer />}
        </div>
    );
};

export default MapPage;

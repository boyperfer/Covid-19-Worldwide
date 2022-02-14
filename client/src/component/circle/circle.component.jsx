/* eslint-disable no-useless-escape */
import React from "react";
import { Feature, Marker, Layer } from "react-mapbox-gl";
import { useDispatch, useSelector } from "react-redux";

import { selectDataCorona, selectTotalCases } from "../../redux/data/data.selectors";
import {
    popupToggleClick,
    popupToggleHover,
} from "../../redux/popup/popup.actions";

import { mobileAndTabletcheck } from "../../assets/utils/utils";

import { CoronaContainer } from "./circle.style";
import coronaIcon from "../../assets/icon/icon_corona.png";

const Circle = () => {
    const dataCorona = useSelector(selectDataCorona);
    const totalCases = useSelector(selectTotalCases);
    console.log(totalCases);
    const dispatch = useDispatch();
    // device detection
    const mobileCheck = mobileAndTabletcheck();
    return dataCorona.map((country, i) => {
        const { name, coordinates, confirmed } = country;
        const sizeCircle = confirmed / totalCases * 100;
        console.log(name, sizeCircle);
        // const paint = {
        //     "circle-color": "#2a1353",
        //     "circle-opacity": 0.3,
        //     "circle-radius":
        //         confirmed > 0 && confirmed <= 1000
        //             ? 5
        //             : confirmed > 1000 && confirmed <= 10000
        //             ? 10
        //             : confirmed > 10000 && confirmed <= 50000
        //             ? 15
        //             : confirmed > 50000 && confirmed <= 100000
        //             ? 20
        //             : 4,
        // };
        const paint = {
            "circle-color": "#2a1353",
            "circle-opacity": 
                sizeCircle > 0 && sizeCircle <= 0.00001
                    ? 0.0625
                    : sizeCircle > 0.00001 && sizeCircle <= 0.0001
                    ? 0.125
                    : sizeCircle > 0.0001 && sizeCircle <= 0.001
                    ? 0.1875
                    : sizeCircle > 0.001 && sizeCircle <= 0.01
                    ? 0.25
                    : sizeCircle > 0.01 && sizeCircle <= 0.1
                    ? 0.3125
                    : sizeCircle > 0.1 && sizeCircle <= 1
                    ? 0.375
                    : sizeCircle > 1 && sizeCircle <= 10
                    ? 0.4375
                    : sizeCircle > 10 && sizeCircle <= 20
                    ? 0.5
                    : 0.6,
            "circle-radius":
                sizeCircle > 0 && sizeCircle <= 0.00001
                    ? 2
                    : sizeCircle > 0.00001 && sizeCircle <= 0.0001
                    ? 4
                    : sizeCircle > 0.0001 && sizeCircle <= 0.001
                    ? 6
                    : sizeCircle > 0.001 && sizeCircle <= 0.01
                    ? 8
                    : sizeCircle > 0.01 && sizeCircle <= 0.05
                    ? 13
                    : sizeCircle > 0.05 && sizeCircle <= 0.1
                    ? 18
                    : sizeCircle > 0.1 && sizeCircle <= 0.25
                    ? 23
                    : sizeCircle > 0.25 && sizeCircle <= 0.5
                    ? 28
                    : sizeCircle > 0.5 && sizeCircle <= 1
                    ? 32
                    : sizeCircle > 1 && sizeCircle <= 3
                    ? 35
                    : sizeCircle > 3 && sizeCircle <= 15
                    ? 40
                    : 60
        }

        return name.toLowerCase() === "china" ? (
            mobileCheck ? (
                <Marker
                    key={i}
                    coordinates={[105, 25]}
                    onClick={() => dispatch(popupToggleClick(country))}
                    anchor="bottom"
                >
                    <CoronaContainer src={coronaIcon} alt="1" />
                </Marker>
            ) : (
                <Marker
                    key={i}
                    coordinates={[105, 25]}
                    onClick={() => dispatch(popupToggleClick(country))}
                    onMouseEnter={() => dispatch(popupToggleHover(country))}
                    anchor="bottom"
                >
                    <CoronaContainer src={coronaIcon} alt="1" />
                </Marker>
            )
        ) : (
            <Layer key={i} type="circle" paint={paint}>
                {mobileCheck ? (
                    <Feature
                        onClick={() => dispatch(popupToggleClick(country))}
                        coordinates={[coordinates[0], coordinates[1]]}
                        properties={name}
                    />
                ) : (
                    <Feature
                        onClick={() => dispatch(popupToggleClick(country))}
                        onMouseEnter={() => dispatch(popupToggleHover(country))}
                        coordinates={[coordinates[0], coordinates[1]]}
                        properties={name}
                    />
                )}
            </Layer>
        );
    });
};

export default Circle;

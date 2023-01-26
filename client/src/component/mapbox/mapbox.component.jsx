/* eslint-disable react/style-prop-object */
import React from "react";
import ReactMapboxGl from "react-mapbox-gl";

import Circle from "../circle/circle.component";
import PopupNumber from "../popup/popup.component";

const MapGl = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoiYm95cGVyZmVyIiwiYSI6ImNrOGFyNWhncTAweXUzZm55cXRteTYyNmgifQ.OpfZm6alLebIm0iaOi5xYw",
    doubleClickZoom: false,
});
const MapBox = () => {
    return (
        <div>
            <MapGl
                style="mapbox://styles/boyperfer/ckk1rdqyd2r1h17p4j36mdj14"
                containerStyle={{
                    height: "100vh",
                    width: "100vw",
                    pitch: 0,
                    bearing: 0,
                }}
                zoom={[1.86]}
                center={[4.805043, 26.356606]}
            >
                <Circle />
                <PopupNumber />
            </MapGl>
        </div>
    );
};

export default MapBox;

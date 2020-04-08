/* eslint-disable react/style-prop-object */
import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

import Circle from '../circle/circle.component';
import PopupNumber from '../popup/popup.component';

import './mapbox.styles.scss';

const MapGl = ReactMapboxGl({
	accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
	doubleClickZoom: false,
});

const MapBox = () => {
	return (
		<div>
			<MapGl
				style='mapbox://styles/boyperfer/ck8c3jmqk2mjy1iqitxwkd1b6'
				containerStyle={{
					height: '100vh',
					width: '100vw',
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

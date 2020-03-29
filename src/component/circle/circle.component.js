import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { useSelector } from 'react-redux';

import { selectDataCorona } from '../../redux/data/data.selectors';

import { CircleContainer } from './circle.style';

const Circle = () => {
	const [viewPort, setViewPort] = useState({
		latitude: 37.8,
		longitude: -122.4,
		zoom: 2,
		width: '100vw',
		height: '100vh'
	});
	const dataCorona = useSelector(selectDataCorona);
	return (
		<ReactMapGL
			{...viewPort}
			onViewportChange={setViewPort}
			mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
			mapStyle='mapbox://styles/boyperfer/ck8c3jmqk2mjy1iqitxwkd1b6'
		>
			{dataCorona.map(({ coordinates }, i) => (
				<Marker
					key={i}
					latitude={coordinates[0]}
					longitude={coordinates[1]}
				>
					<CircleContainer />
				</Marker>
			))}
		</ReactMapGL>
	);
};

export default Circle;

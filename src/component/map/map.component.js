/* eslint-disable react/style-prop-object */
import React, { useState, useEffect } from 'react';
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import { useDispatch, useSelector } from 'react-redux';

import { selectDataCorona } from '../../redux/data/data.selectors';
import { selectToggleNumber } from '../../redux/toggle-hidden/toggle-hidden.selectors';

import {
	fetchDataStartAsync,
	toggleNumber
} from '../../redux/data/data.actions';

const MapGl = ReactMapboxGl({
	accessToken: process.env.REACT_APP_MAPBOX_TOKEN
});

const Map = () => {
	const dataCorona = useSelector(selectDataCorona);
	const onToggleNumber = useSelector(selectToggleNumber);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchDataStartAsync());
	}, [dispatch]);
	return (
		<div>
			<MapGl
				style='mapbox://styles/boyperfer/ck8c3jmqk2mjy1iqitxwkd1b6'
				containerStyle={{
					height: '100vh',
					width: '100vw',
					latitude: 37.8,
					longitude: -122.4
				}}
				zoom={[1]}
			>
				{dataCorona.map(({ coordinates }) => (
					<Layer type='sympol'>
						<Feature
							coordinates={[coordinates[1], coordinates[0]]}
						/>
					</Layer>
				))}
			</MapGl>
		</div>
	);
};

export default Map;

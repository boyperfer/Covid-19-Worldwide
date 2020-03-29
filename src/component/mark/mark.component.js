/* eslint-disable react/style-prop-object */
import React, { useEffect } from 'react';
import ReactMapboxGl, { Layer, Feature, Popup } from 'react-mapbox-gl';
import { useDispatch, useSelector } from 'react-redux';

import { selectDataCorona } from '../../redux/data/data.selectors';
import { selectToggleNumber } from '../../redux/toggle-hidden/toggle-hidden.selectors';

import {
	fetchDataStartAsync,
	toggleNumber
} from '../../redux/data/data.actions';
// import { toggleNumber } from '../../redux/toggle-hidden/toggle-hidden.actions';

import { CircleContainer } from '../mark/mark.style';

const MapGl = ReactMapboxGl({
	accessToken: process.env.REACT_APP_MAPBOX_TOKEN
});

const Mark = () => {
	const dataCorona = useSelector(selectDataCorona);
	const onToggleNumber = useSelector(selectToggleNumber);
	const dispatch = useDispatch();
	const cicle = {
		color: 'red'
	};
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
				{dataCorona.map(({ coordinates, name, confirmed }) => (
					<div>
						<CircleContainer
							type='circle'
							paint={{
								'circle-color': 'red',
								'circle-radius': 10
							}}
						>
							<Feature
								onClick={() => dispatch(toggleNumber(name))}
								coordinates={[coordinates[1], coordinates[0]]}
								properties={name}
							/>
						</CircleContainer>
						<Popup coordinates={[coordinates[1], coordinates[0]]}>
							${confirmed}
						</Popup>
					</div>
				))}
			</MapGl>
		</div>
	);
};

export default Mark;

import React from 'react';
import { Feature } from 'react-mapbox-gl';
import { useDispatch, useSelector } from 'react-redux';

import { selectDataCorona } from '../../redux/data/data.selectors';
import { popupToggle } from '../../redux/popup/popup.actions';

// import { selectDataCorona } from '../../redux/data/data.selectors';

import { CircleContainer } from './circle.style';

const Circle = () => {
	const dataCorona = useSelector(selectDataCorona);

	const dispatch = useDispatch();
	return dataCorona.map((country, i) => {
		const { name, coordinates, confirmed } = country;
		const paint = {
			'circle-color': 'red',
			'circle-radius':
				confirmed > 0 && confirmed <= 1000
					? 5
					: confirmed > 1000 && confirmed <= 10000
					? 10
					: confirmed > 10000 && confirmed <= 50000
					? 15
					: confirmed > 50000 && confirmed <= 100000
					? 20
					: 30
		};
		return (
			<CircleContainer key={i} type='circle' paint={paint}>
				<Feature
					onClick={() => dispatch(popupToggle(country))}
					onMouseEnter={() => dispatch(popupToggle(country))}
					coordinates={[coordinates[1], coordinates[0]]}
					properties={name}
				/>
			</CircleContainer>
		);
	});
};

export default Circle;

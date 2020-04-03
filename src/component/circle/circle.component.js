import React from 'react';
import { Feature, Marker, Layer } from 'react-mapbox-gl';
import { useDispatch, useSelector } from 'react-redux';

import { selectDataCorona } from '../../redux/data/data.selectors';
import {
	popupToggleClick,
	popupToggleHover
} from '../../redux/popup/popup.actions';

// import { selectDataCorona } from '../../redux/data/data.selectors';

import { CoronaContainer } from './circle.style';
import coronaIcon from '../../assets/corona.png';

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
		return name.toLowerCase() === 'china' ? (
			<Marker
				coordinates={[105, 25]}
				onClick={() => dispatch(popupToggleClick(country))}
				onMouseEnter={() => dispatch(popupToggleHover(country))}
				anchor='bottom'
			>
				<CoronaContainer src={coronaIcon} alt='1' />
				{console.log(country)}
			</Marker>
		) : (
			<Layer key={i} type='circle' paint={paint}>
				<Feature
					onClick={() => dispatch(popupToggleClick(country))}
					onMouseEnter={() => dispatch(popupToggleHover(country))}
					coordinates={[coordinates[0], coordinates[1]]}
					properties={name}
				/>
			</Layer>
		);
	});
};

export default Circle;

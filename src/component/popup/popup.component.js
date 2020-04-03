import React from 'react';
import { Popup } from 'react-mapbox-gl';
import { useSelector } from 'react-redux';

import { selectPopupCountries } from '../../redux/popup/popup.selectors';

import './popup.styles.scss';
import {
	NumberContainer,
	NameContainer,
	CountryContainer
} from './popup.styles';

const PopupNumber = () => {
	const popupCountries = useSelector(selectPopupCountries);
	return popupCountries !== undefined || popupCountries.length !== 0 ? (
		popupCountries.map(
			({ confirmed, deaths, recovered, name, coordinates, code }, i) => {
				console.log(popupCountries);
				return (
					<Popup
						key={i}
						coordinates={[coordinates[0], coordinates[1]]}
					>
						<NameContainer>
							{name}{' '}
							{typeof code !== 'undefined' ? (
								<CountryContainer
									src={`https://lipis.github.io/flag-icon-css/flags/4x3/${code}.svg`}
								/>
							) : (
								<div />
							)}
						</NameContainer>
						<NumberContainer>
							{' '}
							{confirmed} confirmed{' '}
						</NumberContainer>
						<NumberContainer> {deaths} deaths </NumberContainer>
						<NumberContainer>
							{' '}
							{recovered} recovered{' '}
						</NumberContainer>
					</Popup>
				);
			}
		)
	) : (
		<div />
	);
};

export default PopupNumber;

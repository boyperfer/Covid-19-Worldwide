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
	return popupCountries.map(
		({ confirmed, deaths, recovered, name, coordinates, code }, i) => {
			return (
				<Popup key={i} coordinates={[coordinates[1], coordinates[0]]}>
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
					<NumberContainer> {confirmed} confirmed </NumberContainer>
					<NumberContainer> {deaths} deaths </NumberContainer>
					<NumberContainer> {recovered} recovered </NumberContainer>
				</Popup>
			);
		}
	);
};

export default PopupNumber;

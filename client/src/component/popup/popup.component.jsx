import React from 'react';
import { useSelector } from 'react-redux';

import { selectPopupCountries } from '../../redux/popup/popup.selectors';

import './popup.styles.scss';
import {
	NumberContainer,
	NameContainer,
	CountryContainer,
	PopupContainer,
} from './popup.styles';

const PopupNumber = () => {
	const popupCountries = useSelector(selectPopupCountries);
	return popupCountries !== undefined || popupCountries.length !== 0 ? (
		popupCountries.map(
			({ confirmed, deaths, recovered, name, coordinates, code }, i) => {
				return (
					<PopupContainer
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
					</PopupContainer>
				);
			}
		)
	) : (
		<div />
	);
};

export default PopupNumber;

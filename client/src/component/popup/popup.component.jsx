import React from 'react';
import "flag-icon-css/css/flag-icons.css"
import { useSelector } from 'react-redux';

import { selectPopupCountries } from '../../redux/popup/popup.selectors';

import { selectVietnamese } from '../../redux/language/language.selectors';

import {
	NumberContainer,
	NameContainer,
	CountryContainer,
	PopupContainer,
} from './popup.styles';
import { vernacular } from '../../assets/utils/utils';

const PopupNumber = () => {
	const popupCountries = useSelector(selectPopupCountries);
	const isVietnamese = useSelector(selectVietnamese);
	const title = isVietnamese ? vernacular['VN'] : vernacular['ENG'];
	const { deathsW, confirmedW, recoveredW } = title;
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
								className={`flag-icon flag-icon-${code}`}
								/>
							) : (
								<div />
							)}
						</NameContainer>
						<NumberContainer>
							{' '}
							{confirmed} {confirmedW}{' '}
						</NumberContainer>
						<NumberContainer>
							{' '}
							{deaths} {deathsW}{' '}
						</NumberContainer>
						<NumberContainer>
							{' '}
							{recovered} {recoveredW}{' '}
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

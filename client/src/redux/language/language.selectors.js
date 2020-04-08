import { createSelector } from 'reselect';

const selectLanguage = ({ language }) => language;

export const selectVietnamese = createSelector(
	[selectLanguage],
	({ vietnamese }) => vietnamese
);

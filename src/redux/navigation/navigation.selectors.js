import { createSelector } from 'reselect';

const selectNavigation = ({ navigation }) => navigation;

export const selectOnNavigation = createSelector(
	[selectNavigation],
	({ onNavigation }) => onNavigation
);

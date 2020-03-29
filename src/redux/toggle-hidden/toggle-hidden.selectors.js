import { createSelector } from 'reselect';

const selectToggle = ({ toggle }) => toggle;

export const selectToggleNumber = createSelector(
	[selectToggle],
	({ onToggleNumber }) => onToggleNumber
);

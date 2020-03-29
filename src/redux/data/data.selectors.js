import { createSelector } from 'reselect';

const selectData = ({ data }) => data;

export const selectDataCorona = createSelector(
	[selectData],
	({ dataCorona }) => dataCorona
);

export const selectIsFetching = createSelector(
	[selectData],
	({ isFetching }) => isFetching
);

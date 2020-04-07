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

export const selectDataObjectCorona = createSelector(
	[selectData],
	({ dataObjectCorona }) => dataObjectCorona
);

export const selectIsFetchingObject = createSelector(
	[selectData],
	({ isFetchingObject }) => isFetchingObject
);

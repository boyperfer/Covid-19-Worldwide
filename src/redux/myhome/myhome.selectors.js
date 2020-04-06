import { createSelector } from 'reselect';

const selectMyHome = ({ myHome }) => myHome;

export const selectHome = createSelector([selectMyHome], ({ home }) => home);

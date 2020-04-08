import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchDataStartAsync } from '../../redux/data/data.actions';

import { selectIsFetching } from '../../redux/data/data.selectors';

import WithLoader from '../with-loader/with-loader.component';

const Mapbox = lazy(() => import('../mapbox/mapbox.component'));

const MapLoader = WithLoader(Mapbox);

const MapPage = () => {
	const dispatch = useDispatch();
	const isFetching = useSelector(selectIsFetching);
	useEffect(() => {
		dispatch(fetchDataStartAsync());
	}, [dispatch]);
	return (
		<div>
			<Suspense fallback={<div>asdf</div>}>
				<MapLoader isFetching={isFetching} />
			</Suspense>
		</div>
	);
};

export default MapPage;

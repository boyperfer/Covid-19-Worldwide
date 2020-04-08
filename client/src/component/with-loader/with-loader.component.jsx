import React from 'react';

import {
	WithLoaderContainer,
	LoaderContainer,
	LogoLoading,
} from './with-loader.style';

const WithLoader = (WrappedComponent) => {
	const spinner = ({ isFetching, ...otherProps }) => {
		console.log(isFetching);
		return isFetching ? (
			<WithLoaderContainer>
				<LoaderContainer></LoaderContainer>
			</WithLoaderContainer>
		) : (
			<WrappedComponent {...otherProps} />
		);
	};
	return spinner;
};

export default WithLoader;

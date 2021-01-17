import React from "react";

import { WithLoaderContainer, LoaderContainer } from "./with-loader.style";

const WithLoader = (WrappedComponent) => {
    const spinner = ({ isFetching, ...otherProps }) => {
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

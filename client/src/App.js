import React from "react";
import { useSelector } from "react-redux";

import { mobileAndTabletcheck } from "./assets/utils/utils";

import NavigationButton from "./component/navitation-button/navigation-button.component";

import { AppContainer, MapContainer, MyHomeContainer } from "./App.style";
import { GlobalStyles } from "./styles/global-style";
import { selectIsFetching } from "./redux/data/data.selectors";

const App = () => {
    const mobile = mobileAndTabletcheck();
    const isFetching = useSelector(selectIsFetching);

    return (
        <AppContainer>
            <GlobalStyles />
            <MyHomeContainer />
            <MapContainer isFetching={isFetching} />
            {mobile ? <NavigationButton /> : null}
        </AppContainer>
    );
};

export default App;

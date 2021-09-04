import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {MuiThemeProvider} from "@material-ui/core";
import {BrowserRouter} from "react-router-dom";

import store from "./store/store";
import theme from "./indexStyles";
import AppContainer from "./AppContainer";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <AppContainer />
            </MuiThemeProvider>
        </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);
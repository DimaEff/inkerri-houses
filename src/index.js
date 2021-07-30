import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {MuiThemeProvider} from "@material-ui/core";
import {BrowserRouter} from "react-router-dom";

import App from './App';
import store from "./store/store";
import theme from "./indexStyles";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <App />
            </MuiThemeProvider>
        </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);
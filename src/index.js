import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from "redux";
import reducers from './reducers';
import thunk from "redux-thunk";
import './css/style.css';

import App from './components/App';

const composeEnhance = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhance(applyMiddleware(thunk)));

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector("#root")
)
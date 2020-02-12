import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from "redux";
import reducers from './reducers';
import thunk from "redux-thunk";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {faBars,faSignInAlt,faSearch,faSeedling} from "@fortawesome/free-solid-svg-icons";
import './css/style.css';

import App from './components/App';

library.add(fab,faBars,faSignInAlt,faSearch,faSeedling);

const composeEnhance = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhance(applyMiddleware(thunk)));

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector("#root")
)
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom"
import {store} from "./store/store";
import reportWebVitals from './reportWebVitals';

import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();

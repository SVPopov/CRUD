import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import store from './store';

import './styles/main.scss';
import App from './containers/App';

ReactDOM.render(
    <Provider store={store}>
        <div className="app">
            <HashRouter>
                <Route path="" component={App} />
            </HashRouter>
        </div>
    </Provider>,
    document.getElementById('reactAppRoot'),
);

serviceWorker.unregister();

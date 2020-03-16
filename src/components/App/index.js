import React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from '../../store';
import { Router, Route, Switch } from 'react-router-dom';

import CreateBaby from '../CreateBaby';
import Events from '../Events';

import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const store = configureStore();

const App = () => (
    <Provider store = {store}>
        <Router history={history}>
            <div>
                <Switch>
                    <Route path='/baby'>
                        <Events />
                    </Route>
                    <Route path='/' component={CreateBaby}>
                    </Route> 
                </Switch>
            </div>
        </Router>
    </Provider>
);

export default App;
import React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from '../../store';
import { Router, Route, Switch } from 'react-router-dom';

import './styles.css';

import CreateBaby from '../CreateBaby';
import Events from '../Events';
import SelectBaby from '../SelectBaby';

import { createBrowserHistory } from 'history';
import AddEvent from '../EventForm';

export const history = createBrowserHistory();

const store = configureStore();

const App = () => (
    <Provider store = {store}>
        <Router history={history}>
            <div>
                <Switch>
                    <Route exact path='/' component={CreateBaby}>
                    </Route> 
                    <Route path='/baby'>
                        <div className="main-container">

                            <div className='baby-events-container'>
                                <SelectBaby />
                                <Events />
                            </div>
                            <div className='add-event-container'>
                                    <AddEvent />    
                        </div>
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    </Provider>
);

export default App;
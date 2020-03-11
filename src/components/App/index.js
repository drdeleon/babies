import React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from '../../store';

const store = configureStore();

const App = () => (
    <Provider store = {store}>
        <h1> Laboratorio de bebés </h1>
        <h2>En teoría acá van todos los componentes! </h2>
    </Provider>
);

export default App;
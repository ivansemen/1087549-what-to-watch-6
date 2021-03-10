import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import films from './mocks/films';
import {keysToCamel} from './utils/utils';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const correctFilms = films.map((film) => keysToCamel(film));
// Меняет названия свойств с snake_case на camelCase

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
      <App films={correctFilms}/>
    </Provider>,
    document.querySelector(`#root`)
);

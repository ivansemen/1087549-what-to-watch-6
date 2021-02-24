import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import films from './mocks/films';
import {keysToCamel} from './utils.js';

const correctFilms = films.map((film) => keysToCamel(film));
// Меняет названия свойств с snake_case на camelCase


ReactDOM.render(
    <App films={correctFilms}/>,
    document.querySelector(`#root`)
);

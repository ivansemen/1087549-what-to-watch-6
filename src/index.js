import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  NAME: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  DATE: 2014
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

ReactDOM.render(
    <App name={Setting.NAME} genre={Setting.GENRE} date={Setting.DATE} numbers={numbers}/>,
    document.querySelector(`#root`)
);

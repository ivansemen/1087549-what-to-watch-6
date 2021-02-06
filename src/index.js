import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  NAME: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  DATE: 2014
};

const numbers = Array.from(Array(19).keys());

ReactDOM.render(
    <App name={Setting.NAME} genre={Setting.GENRE} date={Setting.DATE} numbers={numbers}/>,
    document.querySelector(`#root`)
);

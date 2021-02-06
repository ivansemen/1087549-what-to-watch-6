import React from 'react';
import MainScreeen from '../main-screen/main-screen';
import PropTypes from 'prop-types';

const App = (props) => {
  const {name, genre, date, numbers} = props;


  return (
    <MainScreeen name={name} genre={genre} date={date} numbers={numbers}/>
  );
};

export default App;

App.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  numbers: PropTypes.array.isRequired,
};

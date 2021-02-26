import React from 'react';
import MainScreeen from '../main-screen/main-screen';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import AddReview from '../add-review/add-review';
import Film from '../film/film';
import MyList from '../my-list/my-list';
import NotFound from '../not-found/not-found';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';

const App = (props) => {
  const {films} = props;
  const [firstFilm] = films;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreeen films={films} firstFilm={firstFilm}/>
        </Route>
        <Route exact path="/login">
          <SignIn/>
        </Route>
        <Route exact path="/mylist">
          <MyList films={films}/>
        </Route>
        <Route exact path="/films/:id">
          <Film firstFilm={firstFilm}/>
        </Route>
        <Route exact path="/films/:id/review">
          <AddReview firstFilm={firstFilm}/>
        </Route>
        <Route exact path="/player/:id">
          <Player firstFilm={firstFilm}/>
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

App.propTypes = {
  films: PropTypes.array.isRequired,
};

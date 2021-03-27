import React, {useEffect} from 'react';
import MainScreeen from '../main-screen/main-screen';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import AddReview from '../add-review/add-review';
import Film from '../film/film';
import MyList from '../my-list/my-list';
import NotFound from '../not-found/not-found';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchMovieList} from "../../store/api-actions";
import {connect} from 'react-redux';
import {keysToCamel} from '../../utils/utils';

const App = (props) => {
  const {movieList, isDataLoaded, onLoadData} = props;
  const [firstFilm] = movieList;

  useEffect(() => {
    onLoadData();
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreeen films={movieList} firstFilm={firstFilm}/>
        </Route>
        <Route exact path="/login">
          <SignIn/>
        </Route>
        <Route exact path="/mylist">
          <MyList films={movieList}/>
        </Route>
        <Route exact path="/films/:id">
          <Film firstFilm={firstFilm} films={movieList}/>
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

App.propTypes = {
  movieList: PropTypes.array.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movieList: state.movieList.map((movie) => keysToCamel(movie)),
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchMovieList());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

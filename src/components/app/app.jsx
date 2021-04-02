import React, {useEffect} from 'react';
import MainScreeen from '../main-screen/main-screen';
import PropTypes from 'prop-types';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
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
import PrivateRoute from '../private-route/private-route';
import {AppRoute} from '../../const';
import browserHistory from "../../browser-history";

const App = (props) => {
  const {movieList, isDataLoaded, onLoadData} = props;
  const [firstFilm] = movieList;

  useEffect(() => {
    onLoadData();
  }, []);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact
          path={AppRoute.ROOT}
          render={({history}) => (
            <MainScreeen
              onAvatarButtonClick={() => history.push(`/mylist`)}
              onFilmButtonClick={(id) => history.push(`/films/:${id}`)}
              films={movieList}
              firstFilm={firstFilm}
            />
          )}
        />
        <Route exact
          path={AppRoute.LOGIN}
          render={({history}) => (
            <SignIn
              onSubmitButtonClick={() => history.push(`/`)}
            />
          )}
        />
        <PrivateRoute exact
          path={AppRoute.LIST}
          render={() => <MyList films={movieList}/>}
        >
        </PrivateRoute>

        <Route exact
          path={AppRoute.FILM}
          render={({history}) => (
            <Film
              onAvatarButtonClick={() => history.push(`/mylist`)}
              films={movieList}
            />
          )}
        />
        <PrivateRoute exact
          path={AppRoute.REVIEW}
          render={() => <AddReview firstFilm={firstFilm}/>}
        ></PrivateRoute>
        <Route exact path={AppRoute.PLAYER}>
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

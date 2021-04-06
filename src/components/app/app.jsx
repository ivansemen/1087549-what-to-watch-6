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
import PrivateRoute from '../private-route/private-route';
import {AppRoute} from '../../const';
import browserHistory from "../../browser-history";
import {getMovieList, getLoadedDataStatus, getPromoFilm, getLoadedPromoFilm} from '../../store/movies-data/selectors';

const App = (props) => {
  const {movieList, isDataLoaded, onLoadData} = props;

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
        <Route exact path={AppRoute.ROOT}>
          <MainScreeen films={movieList}/>
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignIn/>
        </Route>
        <PrivateRoute exact
          path={AppRoute.LIST}
          render={() => <MyList/>}
        />
        <Route exact path={AppRoute.FILM}>
          <Film/>
        </Route>
        <PrivateRoute exact
          path={AppRoute.REVIEW}
          render={() => <AddReview/>}
        />
        <Route exact path={AppRoute.PLAYER}>
          <Player/>
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
  movieList: getMovieList(state),
  isDataLoaded: getLoadedDataStatus(state),
  promoFilm: getPromoFilm(state),
  isPromoFilmLoaded: getLoadedPromoFilm(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchMovieList());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

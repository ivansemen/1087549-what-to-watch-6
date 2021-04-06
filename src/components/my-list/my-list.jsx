import React, {useEffect} from 'react';
import MovieList from '../movie-list/movie-list';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {getFavoriteFilms, getLoadedFavoriteFilms} from '../../store/movies-data/selectors';
import {connect} from 'react-redux';
import {fetchFavoriteMovies} from "../../store/api-actions";
import LoadingScreen from '../loading-screen/loading-screen';

const MyList = (props) => {
  const {favoriteFilms, isFavoriteFilmsLoaded, onLoadData} = props;

  useEffect(() => {
    onLoadData();
  }, []);

  if (!isFavoriteFilmsLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MovieList films={favoriteFilms}/>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};


MyList.propTypes = {
  favoriteFilms: PropTypes.array.isRequired,
  isFavoriteFilmsLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  favoriteFilms: getFavoriteFilms(state),
  isFavoriteFilmsLoaded: getLoadedFavoriteFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchFavoriteMovies());
  },
});

export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);

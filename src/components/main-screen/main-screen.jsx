import React, {useEffect} from 'react';
import MovieList from '../movie-list/movie-list';
import PropTypes from 'prop-types';
import GenreList from '../genre-list/genre-list';
import Avatar from '../avatar/avatar';
import {getPromoFilm, getLoadedPromoFilm} from '../../store/movies-data/selectors';
import {connect} from 'react-redux';
import {keysToCamel} from '../../utils/utils';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchPromoFilm} from "../../store/api-actions";

const MainScreeen = (props) => {
  const {films, promoFilm, isPromoFilmLoaded, onLoadData} = props;
  const {name, genre, posterImage, released, backgroundImage} = promoFilm;

  useEffect(() => {
    onLoadData();
  }, []);

  if (!isPromoFilmLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <Avatar/>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList films={films}/>
          <MovieList films={films}/>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
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
    </React.Fragment>
  );
};


MainScreeen.propTypes = {
  promoFilm: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    posterImage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
  }).isRequired,
  films: PropTypes.array.isRequired,
  isPromoFilmLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  promoFilm: keysToCamel(getPromoFilm(state)),
  isPromoFilmLoaded: getLoadedPromoFilm(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchPromoFilm());
  },
});

export {MainScreeen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreeen);

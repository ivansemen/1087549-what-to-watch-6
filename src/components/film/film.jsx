import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import SimilarMovieList from '../similar-movie-list/similar-movie-list';
import Tabs from '../tabs/tabs';
import {fetchMovie} from "../../store/api-actions";
import {connect} from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen';
import {AuthorizationStatus} from '../../const';
import Avatar from '../avatar/avatar';
import {getMovie, getLoadedMovieStatus} from '../../store/movies-data/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';
import browserHistory from "../../browser-history";
import {removeMovie} from '../../store/action';
import ButtonMyList from '../button-my-list/button-my-list';

const Film = (props) => {
  const {onLoadData, movie, isMovieLoaded, authorizationStatus, deleteFilm} = props;
  const {id} = useParams();

  const {name, genre, released, posterImage, backgroundImage, isFavorite} = movie;

  useEffect(() => {
    onLoadData(id);
  }, [id]);

  useEffect(() => {
    return () => {
      deleteFilm();
    };
  }, []);

  if (!isMovieLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const checkAuthReview = () => {
    return (
      authorizationStatus === AuthorizationStatus.AUTH ?
        <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link> : ``
    );
  };

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>
            <Avatar/>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={() => browserHistory.push(`/player/${id}`)}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <ButtonMyList id={+id} isFavorite={isFavorite}/>
                {checkAuthReview()}
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <Tabs film={movie}/>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <SimilarMovieList film={movie}/>
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
    </React.Fragment>
  );
};

Film.propTypes = {
  onLoadData: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
  isMovieLoaded: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  deleteFilm: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  movie: getMovie(state),
  isMovieLoaded: getLoadedMovieStatus(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData(id) {
    dispatch(fetchMovie(id));
  },
  deleteFilm: () => {
    dispatch(removeMovie());
  }
});

export {Film};
export default connect(mapStateToProps, mapDispatchToProps)(Film);

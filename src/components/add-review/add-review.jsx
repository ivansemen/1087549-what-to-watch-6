import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link, useParams} from 'react-router-dom';
import ReviewForm from '../review-form/review-form';
import {getMovie, getLoadedMovieStatus} from '../../store/movies-data/selectors';
import LoadingScreen from '../loading-screen/loading-screen';
import {connect} from 'react-redux';
import {keysToCamel} from '../../utils/utils';
import {fetchMovie} from "../../store/api-actions";

const AddReview = (props) => {
  const {onLoadData, movie, isMovieLoaded} = props;
  const {name, backgroundImage, posterImage} = movie;

  const {id} = useParams();

  useEffect(() => {
    onLoadData(id);
  }, [id]);

  if (!isMovieLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="movie-page.html" className="breadcrumbs__link">{name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm/>
      </div>

    </section>
  );
};


AddReview.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
  }).isRequired,
  isMovieLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movie: keysToCamel(getMovie(state)),
  isMovieLoaded: getLoadedMovieStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData(id) {
    dispatch(fetchMovie(id));
  },
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);

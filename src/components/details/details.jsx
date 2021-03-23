import React from 'react';
import PropTypes from 'prop-types';

const Details = (props) => {
  const {film} = props;
  const {starring, director, runTime, genre, released} = film;

  const starringArray = starring.map((star) => {
    return <>{star},<br/></>;
  });

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {starringArray}
          </span>
        </p>
      </div>
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{runTime}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
};


export default Details;

Details.propTypes = {
  film: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
    released: PropTypes.number.isRequired,
    runTime: PropTypes.number.isRequired,
  }).isRequired,
};

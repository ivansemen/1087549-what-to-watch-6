import React from 'react';
import PropTypes from 'prop-types';

const Overview = (props) => {
  const {film} = props;
  const {description, director, starring, rating} = film;

  const starringArray = starring.map((star) => {
    return star + `, `;
  });

  const convertRatingToText = () => {
    let textRating;
    if (rating < 3) {
      textRating = `Bad`;
    } else if (rating > 3 && rating <= 5) {
      textRating = `Normal`;
    } else if (rating > 5 && rating <= 8) {
      textRating = `Good`;
    } else if (rating > 8 && rating < 10) {
      textRating = `Very good`;
    } else if (rating === 10) {
      textRating = `Awesome`;
    }
    return textRating;
  };

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{convertRatingToText()}</span>
          <span className="movie-rating__count">240 ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starringArray} and other</strong></p>
      </div>
    </React.Fragment>
  );
};

export default Overview;

Overview.propTypes = {
  film: PropTypes.shape({
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

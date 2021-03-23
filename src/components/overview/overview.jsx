import React from 'react';
import PropTypes from 'prop-types';

const Overview = (props) => {
  const {film} = props;
  const {description, director, starring} = film;

  const starringArray = starring.map((star) => {
    return star + `, `;
  });

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">8,9</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
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
  }).isRequired,
};

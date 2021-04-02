import React from 'react';
import PropTypes from 'prop-types';

const Review = (props) => {
  const {text, name, date, reviewRating} = props;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          <time className="review__date" dateTime="2016-12-24">{date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{reviewRating}</div>
    </div>
  );
};


export default Review;

Review.propTypes = {
  films: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  reviewRating: PropTypes.number.isRequired,
};

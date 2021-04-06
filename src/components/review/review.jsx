import React from 'react';
import PropTypes from 'prop-types';

const Review = (props) => {
  const {review} = props;
  const {comment, date, rating, user} = review;
  const {name} = user;

  const options = {
    month: `long`,
    day: `numeric`,
    year: `numeric`,
  };

  const getDate = (str) => {
    let correctDate = new Date(str);
    return correctDate.toLocaleString(`en`, options);
  };

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          <time className="review__date" dateTime={date}>{getDate(date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};


export default Review;

Review.propTypes = {
  review: PropTypes.object,
  comment: PropTypes.string,
  date: PropTypes.string,
  rating: PropTypes.number,
  user: PropTypes.object,
  name: PropTypes.string,
};

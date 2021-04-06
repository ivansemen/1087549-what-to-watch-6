import React, {useEffect} from 'react';
import {getComments, getLoadedComments} from '../../store/movies-data/selectors';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchComments} from "../../store/api-actions";

const Overview = (props) => {
  const {film, onLoadData, comments, isCommentsLoaded} = props;
  const {description, director, starring, rating} = film;
  const {id} = useParams();

  const starringArray = starring.map((star) => {
    return star + `, `;
  });

  useEffect(() => {
    onLoadData(id);
  }, [id]);

  if (!isCommentsLoaded) {
    return (
      <LoadingScreen />
    );
  }

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
          <span className="movie-rating__count">{comments.length} ratings</span>
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

Overview.propTypes = {
  film: PropTypes.shape({
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  onLoadData: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
  isCommentsLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  comments: getComments(state),
  isCommentsLoaded: getLoadedComments(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData(id) {
    dispatch(fetchComments(id));
  },
});

export {Overview};
export default connect(mapStateToProps, mapDispatchToProps)(Overview);


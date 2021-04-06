import React, {useEffect} from 'react';
import {getComments, getLoadedComments} from '../../store/movies-data/selectors';
import {connect} from 'react-redux';
import {fetchComments} from "../../store/api-actions";
import LoadingScreen from '../loading-screen/loading-screen';
import {useParams} from 'react-router-dom';
import Review from '../../components/review/review';
import PropTypes from 'prop-types';

const Reviews = (props) => {

  const {comments, isCommentsLoaded, onLoadData} = props;
  const {id} = useParams();

  useEffect(() => {
    onLoadData(id);
  }, [id]);

  if (!isCommentsLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const reviews = comments.map((comment, index) => {
    return <Review review={comment} key={index}/>;
  });

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews}
      </div>
      {comments.length > 3 ?
        <div className="movie-card__reviews-col">
          {reviews.slice(4)}
        </div> : ``}
    </div>
  );
};

Reviews.propTypes = {
  comments: PropTypes.array.isRequired,
  isCommentsLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
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

export {Reviews};
export default connect(mapStateToProps, mapDispatchToProps)(Reviews);

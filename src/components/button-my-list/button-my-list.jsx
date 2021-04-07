import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {sendFavoriteMovie} from "../../store/api-actions";
import {getAuthorizationStatus} from '../../store/user/selectors';
import {AuthorizationStatus} from '../../const';
import browserHistory from "../../browser-history";

const ButtonMyList = (props) => {
  const {id, isFavorite, onAddUserListСlick, authorizationStatus} = props;
  const [inList, setInlist] = useState(isFavorite);

  return (
    <button className="btn btn--list movie-card__button" type="button" onClick={authorizationStatus === AuthorizationStatus.AUTH ? () => {
      onAddUserListСlick(id, inList);
      setInlist(!inList);
    } : browserHistory.push(`/login`)
    }>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={inList ? `#in-list` : `#add`}></use>
      </svg>
      <span>My list</span>
    </button>
  );
};

ButtonMyList.propTypes = {
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onAddUserListСlick: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onAddUserListСlick(id, isFavorite) {
    dispatch(sendFavoriteMovie(id, isFavorite));
  }
});

export {ButtonMyList};
export default connect(mapStateToProps, mapDispatchToProps)(ButtonMyList);

import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {AuthorizationStatus} from '../../const';
import browserHistory from "../../browser-history";
import {Link} from 'react-router-dom';
import {getAuthorizationStatus} from '../../store/user/selectors';

const Avatar = (props) => {

  const {authorizationStatus} = props;

  const checkAuthorizationStatus = () => {
    return (
      authorizationStatus === AuthorizationStatus.AUTH ?
        <div className="user-block__avatar" onClick={() => browserHistory.push(`/mylist`)}>
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div> : <Link className="user-block__link" to={`/login`}>Sign in</Link>
    );
  };

  return (
    <div className="user-block">
      {checkAuthorizationStatus()}
    </div>
  );
};

Avatar.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};


const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export {Avatar};
export default connect(mapStateToProps)(Avatar);


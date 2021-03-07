import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = (props) => {
  const {film} = props;
  const {previewVideoLink} = film;

  return (
    <Fragment>
      <video src={previewVideoLink} autoPlay muted ></video>
    </Fragment>
  );
};


export default VideoPlayer;


VideoPlayer.propTypes = {
  film: PropTypes.shape({
    previewVideoLink: PropTypes.string.isRequired,
  }).isRequired
};

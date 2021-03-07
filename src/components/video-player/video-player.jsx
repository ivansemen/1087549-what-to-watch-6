import React, {Fragment, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = (props) => {
  const {film} = props;
  const {previewVideoLink} = film;

  const videoRef = useRef();

  useEffect(() => {
    return () => {
      videoRef.current = null;
    };
  }, [previewVideoLink]);

  return (
    <Fragment>
      <video ref={videoRef} src={previewVideoLink} autoPlay muted ></video>
    </Fragment>
  );
};


export default VideoPlayer;


VideoPlayer.propTypes = {
  film: PropTypes.shape({
    previewVideoLink: PropTypes.string.isRequired,
  }).isRequired
};

import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchMovie} from "../../store/api-actions";
import {getMovie, getLoadedMovieStatus} from '../../store/movies-data/selectors';
import browserHistory from "../../browser-history";

const Player = (props) => {
  const {onLoadData, isMovieLoaded, movie} = props;
  const {videoLink, backgroundImage} = movie;
  const {id} = useParams();
  const [isPaused, setPause] = useState(true);
  const videoRef = useRef();
  const [time, setTime] = useState(``);
  const [progress, setProgress] = useState(``);

  useEffect(() => {
    onLoadData(id);
  }, [id]);

  if (!isMovieLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const handlePauseClick = () => {
    videoRef.current.pause();
    setPause(true);
  };

  const handlePlayClick = () => {
    videoRef.current.play();
    setPause(false);
  };

  const handleFullscreenClick = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen();
    }
  };

  const formatFilmTime = (seconds) => {
    return new Date(seconds * 1000).toISOString().substr(11, 8);
  };

  const handleTimeUpdate = () => {
    const duration = isNaN(videoRef.current.duration) ? 0 : videoRef.current.duration;
    const currentTime = videoRef.current.currentTime;
    setTime(formatFilmTime(duration - currentTime));
    const currentProgress = Math.floor(currentTime) / Math.floor(duration) * 100;
    setProgress(currentProgress);
  };

  return (
    <div className="player">
      <video src={videoLink} className="player__video" poster={backgroundImage} ref={videoRef} onTimeUpdate={handleTimeUpdate}></video>

      <button type="button" className="player__exit" onClick={() => browserHistory.push(`/`)}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"></progress>
            <div className="player__toggler" style={{left: progress}}>Toggler</div>
          </div>
          <div className="player__time-value">{time}</div>
        </div>

        <div className="player__controls-row">
          {isPaused === true ?
            <button type="button" className="player__play" onClick={handlePlayClick}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>

            </button> :
            <button type="button" className="player__play" onClick={handlePauseClick}>
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button>
          }

          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen" onClick={handleFullscreenClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};


Player.propTypes = {
  movie: PropTypes.shape({
    backgroundImage: PropTypes.string.isRequired,
    videoLink: PropTypes.string.isRequired,
  }).isRequired,
  onLoadData: PropTypes.func.isRequired,
  isMovieLoaded: PropTypes.bool.isRequired,
};


const mapStateToProps = (state) => ({
  movie: getMovie(state),
  isMovieLoaded: getLoadedMovieStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData(id) {
    dispatch(fetchMovie(id));
  },
});

export {Player};
export default connect(mapStateToProps, mapDispatchToProps)(Player);

import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import browserHistory from "../../browser-history";

const MovieCard = (props) => {
  const {film, onMouseOver, onMouseOut, activeFilm} = props;
  const {id, name, posterImage} = film;
  return (
    <article className="small-movie-card catalog__movies-card" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <div className="small-movie-card__image" onClick={() => browserHistory.push(`/films/${id}`)}>
        {id === activeFilm ? <VideoPlayer film={film}/> : <img src={posterImage} alt={name} width="280" height="175" />}
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
};


export default MovieCard;

MovieCard.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
  activeFilm: PropTypes.number,
};

import React from 'react';
import PropTypes from 'prop-types';

const ShowMore = (props) => {
  const {onclick} = props;

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onclick}>Show more</button>
    </div>
  );
};

export default ShowMore;

ShowMore.propTypes = {
  onclick: PropTypes.func.isRequired
};

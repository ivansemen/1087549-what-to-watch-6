import React, {useState} from 'react';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import {review} from "../../store/api-actions";
import PropTypes from 'prop-types';
import browserHistory from "../../browser-history";

const ReviewForm = ({onSubmit}) => {
  const [userForm, setUserForm] = useState({
    comment: ``,
    rating: ``
  });

  const [isSend, setIsSend] = useState(false);

  const disableButtonSubmit = () => {
    let status;
    if (userForm.comment.length < 50) {
      status = `disabled`;
    }
    return status;
  };

  const {id} = useParams();

  const handleFieldChange = (evt) => {
    setUserForm({...userForm, comment: evt.target.value});
  };

  const handleRadioChange = (evt) => {
    setUserForm({...userForm, rating: evt.target.value});
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit(id, {
      rating: userForm.rating,
      comment: userForm.comment,
    });

    browserHistory.push(`/films/${id}`);
    setIsSend(true);
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          <input className="rating__input" id="star-1" type="radio" name="rating" value="1" onChange={handleRadioChange} disabled={isSend}/>
          <label className="rating__label" htmlFor="star-1">Rating 1</label>

          <input className="rating__input" id="star-2" type="radio" name="rating" value="2" onChange={handleRadioChange} disabled={isSend}/>
          <label className="rating__label" htmlFor="star-2">Rating 2</label>

          <input className="rating__input" id="star-3" type="radio" name="rating" value="3" defaultChecked onChange={handleRadioChange} disabled={isSend}/>
          <label className="rating__label" htmlFor="star-3">Rating 3</label>

          <input className="rating__input" id="star-4" type="radio" name="rating" value="4" onChange={handleRadioChange} disabled={isSend}/>
          <label className="rating__label" htmlFor="star-4">Rating 4</label>

          <input className="rating__input" id="star-5" type="radio" name="rating" value="5" onChange={handleRadioChange} disabled={isSend}/>
          <label className="rating__label" htmlFor="star-5">Rating 5</label>

          <input className="rating__input" id="star-6" type="radio" name="rating" value="6" onChange={handleRadioChange} disabled={isSend}/>
          <label className="rating__label" htmlFor="star-6">Rating 6</label>

          <input className="rating__input" id="star-7" type="radio" name="rating" value="7" onChange={handleRadioChange} disabled={isSend}/>
          <label className="rating__label" htmlFor="star-7">Rating 7</label>

          <input className="rating__input" id="star-8" type="radio" name="rating" value="8" defaultChecked onChange={handleRadioChange} disabled={isSend}/>
          <label className="rating__label" htmlFor="star-8">Rating 8</label>

          <input className="rating__input" id="star-9" type="radio" name="rating" value="9" onChange={handleRadioChange} disabled={isSend}/>
          <label className="rating__label" htmlFor="star-9">Rating 9</label>

          <input className="rating__input" id="star-10" type="radio" name="rating" value="10" onChange={handleRadioChange} disabled={isSend}/>
          <label className="rating__label" htmlFor="star-10">Rating 10</label>
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" minLength="50" maxLength="400" value={userForm.value} onChange={handleFieldChange} disabled={isSend}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={disableButtonSubmit()}>Post</button>
        </div>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, commentData) {
    dispatch(review(id, commentData));
  }
});

export {ReviewForm};
export default connect(null, mapDispatchToProps)(ReviewForm);

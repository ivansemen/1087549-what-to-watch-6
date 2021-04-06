import React, {useRef, useState} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {login} from "../../store/api-actions";
import browserHistory from "../../browser-history";
import {Link} from 'react-router-dom';

const SignIn = ({onSubmit}) => {
  const loginRef = useRef();
  const passwordRef = useRef();

  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isInValidPassword, setIsInvalidPassword] = useState(false);

  const emailValidation = () => {
    if (!loginRef.current.validity.valid) {
      setIsInvalidEmail(true);
      return false;
    }
    setIsInvalidEmail(false);
    return true;
  };

  const passwordValidation = () => {
    if (!passwordRef.current.validity.valid) {
      setIsInvalidPassword(true);
      return false;
    }
    setIsInvalidPassword(false);
    return true;
  };

  const checkFormValidity = () => {
    return emailValidation() && passwordValidation();
  };


  const renderValidationErrorMessage = () => {
    return (
      <div className="sign-in__message">
        {
          (isInvalidEmail && <p>Please enter a valid email address</p>)
          ||
          (isInValidPassword && <p>Please enter a password</p>)
        }
      </div>
    );
  };


  const handleSubmit = (evt) => {
    evt.preventDefault();
    const isFormValid = checkFormValidity();
    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
    if (isFormValid) {
      browserHistory.push(`/`);
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit} noValidate>
          {renderValidationErrorMessage()}
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" ref={loginRef} required/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" ref={passwordRef} required/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit" onClick={handleSubmit}>Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {SignIn};
export default connect(null, mapDispatchToProps)(SignIn);

import React, {useState} from 'react';
import Overview from '../overview/overview';
import Details from '../details/details';
import Reviews from '../reviews/reviews';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const chooseTab = () => {
    switch (activeTab) {
      case 1:
        return <Overview/>;
      case 2:
        return <Details/>;
      case 3:
        return <Reviews/>;
      default:
        return <Overview/>;
    }
  };

  return (
    <div>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li key={1} className={ activeTab === 1 ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`} onClick={(evt) => {
            evt.preventDefault();
            setActiveTab(1);
          }
          }>
            <a href="#" className="movie-nav__link">Overview</a>
          </li>
          <li key={2} className={ activeTab === 2 ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`} onClick={(evt) => {
            evt.preventDefault();
            setActiveTab(2);
          }
          }>
            <a href="#" className="movie-nav__link">Details</a>
          </li>
          <li key={3} className={ activeTab === 3 ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`} onClick={(evt) => {
            evt.preventDefault();
            setActiveTab(3);
          }
          }>
            <a href="#" className="movie-nav__link">Reviews</a>
          </li>
        </ul>
      </nav>
      {chooseTab()}
    </div>
  );
};


export default Tabs;

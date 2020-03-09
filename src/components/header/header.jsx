import React from 'react';
import './header.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className = "header">
        <div className = "header-container">
          <div className = "header-logo">netflixroulette</div>
          <div className = "search-panel-header">find your movie</div>
          <div className = "search-panel">
            <input type = "text" className = "search-panel-input"/>
            <div className = "search-panel-filter">
              <span className = "search-panel-filter__header">search by</span>
              <button className = "search-panel-filter__button">title</button>
              <button className = "search-panel-filter__button">genre</button>
            </div>
            <button className = "search-panel__button-submit">search</button>
          </div>
        </div>
      </header>
    );
  }
}
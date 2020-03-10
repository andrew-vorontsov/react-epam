import React from 'react';
import './header.css';
import { HttpServiceContext } from "../../http-service-context/http-service-context";

class Header extends React.Component {

  searchMovies(value, searchBy, sortBy) {
    const httpService = this.context;

    httpService.getMoviesList(`?sortBy=${sortBy}&sortOrder=desc&search=${value}&searchBy=${searchBy}`).then(movies => {
      this.props.getMovies(movies)
    });
  }

  searchValue = '';

  onChanging(event) {
    this.searchValue = event.target.value;
  }

  render() {
    return (
      <header className = "header">
        <div className = "header-container">
          <div className = "header-logo">netflixroulette</div>
          <div className = "search-panel-header">find your movie</div>
          <div className = "search-panel">
            <input type = "text" className = "search-panel-input" onChange = {this.onChanging.bind(this)}/>
            <div className = "search-panel-filter">
              <span className = "search-panel-filter__header">search by</span>
              <button 
                onClick = {() => this.props.changeSearchBy("title")} 
                className = {this.props.searchBy === "title" ? "search-panel-filter__button search-panel-filter-active" : "search-panel-filter__button"}>
                title
              </button>
              <button 
                onClick = {() => this.props.changeSearchBy("genres")} 
                className = {this.props.searchBy === "genres" ? "search-panel-filter__button search-panel-filter-active" : "search-panel-filter__button"}>
                genre
              </button>
            </div>
            <button 
              onClick = {() => this.searchMovies(this.searchValue, this.props.searchBy, this.props.sortBy)} 
              className = "search-panel__button-submit">
              search
            </button>
          </div>
        </div>
      </header>
    );
  }
}
Header.contextType = HttpServiceContext;

export default Header;
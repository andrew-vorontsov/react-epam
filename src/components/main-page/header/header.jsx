import React, { useContext } from 'react';
import './header.css';
import { connect } from 'react-redux';
import * as actions from '../../../actions/actions';
import { HttpServiceContext } from "../../http-service-context/http-service-context";

const Header = (props) => {
  
  const httpService = useContext(HttpServiceContext);

  const searchMovies = (value, searchBy) => {
    httpService.getMoviesList(`?search=${value}&searchBy=${searchBy}`).then(movies => {
      props.getMovies(movies)
    });
  }

  let searchValue = '';

  const onChanging = (event) => {
    searchValue = event.target.value;
  }
    return (
      <header className = "header">
        <div className = "header-container">
          <div className = "header-logo">netflixroulette</div>
          <div className = "search-panel-header">find your movie</div>
          <div className = "search-panel">
            <input type = "text" className = "search-panel-input" onChange = {onChanging}/>
            <div className = "search-panel-filter">
              <span className = "search-panel-filter__header">search by</span>
              <button 
                onClick = {() => props.changeSearchBy("title")} 
                className = {props.searchBy === "title" ? "search-panel-filter__button search-panel-filter-active" : "search-panel-filter__button"}>
                title
              </button>
              <button 
                onClick = {() => props.changeSearchBy("genres")} 
                className = {props.searchBy === "genres" ? "search-panel-filter__button search-panel-filter-active" : "search-panel-filter__button"}>
                genre
              </button>
            </div>
            <button 
              onClick = {() => searchMovies(searchValue, props.searchBy)} 
              className = "search-panel__button-submit">
              search
            </button>
          </div>
        </div>
      </header>
    );
}

const mapStateToProps = (state) => {
  return {
    searchBy: state.searchBy
  }
}

export default connect(mapStateToProps, actions)(Header);
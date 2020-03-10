import React from 'react';
import Header from '../header/header';
import './main-page.css';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import { HttpServiceContext } from "../http-service-context/http-service-context";

class MainPage extends React.Component {

  sortActiveToggle(arg) {
    this.props.changeSortBy(arg)
  }

  componentDidMount() {
    let httpService = this.context;

    httpService.getMoviesList('').then(movies => {
      this.props.moviesLoaded(movies)
    })
  }

  render() {

    const elements = this.props.data.map((item, index) => {
      const genres = item.genres.map(genre => genre + " ");
      return (
        <div className = "movie" key = {index.toString()}>
          <div className = "movie-poster">
            <img className = "movie-poster-image" alt = {item.title} src = {item.poster_path} />
          </div>
          <div className = "movie-title">
            <span>{ item.title }</span>
            <span className = "movie-date">{ item.release_date.match(/^\d\d\d\d/) }</span>
          </div>
          <div className = "movie-genres">{ genres }</div>
        </div>
      )
    });

    return (
      <div className = "main-page">

        <Header 
          searchBy = {this.props.searchBy} 
          sortBy = {this.props.sortBy} 
          changeSearchBy = {this.props.changeSearchBy}
          moviesLoaded = {this.props.moviesLoaded}
        />

        <div className = "movie-info-container">
          <div className = "movie-info">
            <div>{ this.props.data.length } movies found</div>
            <div className = "movie-sort-options">
              <span>Sort by</span>
              <span 
                onClick = {() => this.sortActiveToggle("release_date")} 
                className = {this.props.sortBy === "release_date" ? "movie-sort-active " : ""}>
                release date
              </span>
              <span 
                onClick = {() => this.sortActiveToggle("rating")} 
                className = {this.props.sortBy === "rating" ? "movie-sort-active " : ""}>
                rating
              </span>
            </div>
          </div>
        </div>
        <div className = 'movies-container'>
          { elements}
        </div>
      </div>
    );
  }
}
MainPage.contextType = HttpServiceContext;

const mapStateToProps = (state) => {
  return {
    data: state.data,
    sortBy: state.sortBy,
    searchBy: state.searchBy
  }
}

export default connect(mapStateToProps, actions)(MainPage)
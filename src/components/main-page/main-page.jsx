import React from 'react';
import Header from './header/header';
import MovieInfo from './movie-info/movie-info';
import MovieItem from './movie-item/movie-item';
import './main-page.css';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import { HttpServiceContext } from "../http-service-context/http-service-context";

class MainPage extends React.Component {

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
        <MovieItem
          item = {item}
          index = {index}
          genres = {genres}   
        />
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
        <MovieInfo
          changeSortBy = {this.props.changeSortBy}
          sortBy = {this.props.sortBy}
          data = {this.props.data.length}
          />
        <div className = 'movies-container'>
          { elements }
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
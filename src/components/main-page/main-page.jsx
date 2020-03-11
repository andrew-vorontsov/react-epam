import React from 'react';
import Header from './header/header';
import MovieInfo from './movie-info/movie-info';
import './main-page.css';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import { HttpServiceContext } from "../http-service-context/http-service-context";
import Movies from './movies/movies';

class MainPage extends React.Component {

  changeMovies(id) {
    let httpService = this.context;

    httpService.getOneMovie(id).then(movie => {
      this.props.getMovie(movie);
      httpService.getMoviesList(`?search=${movie.genres[0]}&searchBy=genres`).then(movies => {
        this.props.getMovies(movies)
      })
    })
  }

  componentDidMount() {
    let httpService = this.context;

    httpService.getMoviesList('').then(movies => {
      this.props.getMovies(movies);
      this.props.changeSortBy("release_date");
    })
  }

  render() {

    return (
      <div className = "main-page">
        <Header 
          searchBy = {this.props.searchBy} 
          sortBy = {this.props.sortBy} 
          changeSearchBy = {this.props.changeSearchBy}
          getMovies = {this.props.getMovies}
        />
        <MovieInfo
          changeSortBy = {this.props.changeSortBy}
          sortBy = {this.props.sortBy}
          data = {this.props.data.length}
          />
        <Movies 
          changeMovies = {this.changeMovies.bind(this)}
          data = {this.props.data}
        />
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

export default connect(mapStateToProps, actions)(MainPage);
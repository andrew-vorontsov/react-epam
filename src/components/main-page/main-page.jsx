import React from 'react';
import Header from './header/header';
import MovieInfo from './movie-info/movie-info';
import MovieItem from './movie-item/movie-item';
import './main-page.css';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import { HttpServiceContext } from "../http-service-context/http-service-context";

class MainPage extends React.Component {

  changeMovies(id) {
    let httpService = this.context;

    httpService.getOneMovie(id).then(movie => {
      this.props.getMovie(movie)
      httpService.getMoviesList(`?search=${movie.genres[0]}&searchBy=genres`).then(movies => {
        this.props.getMovies(movies)
      })
    })
  }

  componentDidMount() {
    let httpService = this.context;

    httpService.getMoviesList('').then(movies => {
      this.props.getMovies(movies)
    })
  }

  render() {

    const movies = this.props.data.map((item, index) => {
      const genres = item.genres.join(' & ');
      return (
        <MovieItem
          changeMovies = {this.changeMovies.bind(this)}
          item = {item}
          key = {index}
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
          getMovies = {this.props.getMovies}
        />
        <MovieInfo
          changeSortBy = {this.props.changeSortBy}
          sortBy = {this.props.sortBy}
          data = {this.props.data.length}
          />
        <div className = 'movies-container'>
          { movies }
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

export default connect(mapStateToProps, actions)(MainPage);
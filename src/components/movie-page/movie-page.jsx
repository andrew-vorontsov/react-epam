import React from 'react';
import './movie-page.css';
import MovieDescription from './movie-description/movie-description';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import {Link} from 'react-router-dom';
import MovieItem from '../main-page/movie-item/movie-item';
import { HttpServiceContext } from "../http-service-context/http-service-context";

class MoviePage extends React.Component {
  componentDidMount() {
    let httpService = this.context;

    httpService.getMovie(this.props.match.params.id).then(movie => {
      this.props.getOneMovie(movie);
      httpService.getMoviesList(`?search=${movie.genres[0]}&searchBy=genres`).then(movies => {
        this.props.getMovies(movies)
      });
    });
  }

  render() {
    const movies = this.props.data.map((item, index) => {
      const genres = item.genres.map(genre => genre + " ");
      return (
        <MovieItem
          item = {item}
          key = {index}
          genres = {genres}   
        />
      )
    });

    return (
      <div className = "movie-page">
        <div className = "movie-page-top">
          <div className = "movie-page-header">
            <div className = "movie-page-header-container">
              <div className = "header-logo">netflixroulette</div>
              <Link to = "/"><button className = "movie-page-search-button">search</button></Link>
            </div>
            <MovieDescription movie = {this.props.movie}/>
          </div>
        </div>
        <div className = 'movies-container'>
          { movies }
        </div>
      </div>
    );
  }
}
MoviePage.contextType = HttpServiceContext;

const mapStateToProps = (state) => {
  return {
    data: state.data,
    movie: state.movie,
    searchBy: state.searchBy
  }
}

export default connect(mapStateToProps, actions)(MoviePage);
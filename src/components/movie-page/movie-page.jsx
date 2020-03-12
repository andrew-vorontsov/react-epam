import React from 'react';
import './movie-page.css';
import MovieDescription from './movie-description/movie-description';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import {Link} from 'react-router-dom';
import Movies from '../movies/movies';
import { HttpServiceContext } from "../http-service-context/http-service-context";
import MovieRec from './movie-recomendations/movie-recomendations';

class MoviePage extends React.Component {

  componentDidMount() {
    if (this.props.movie.length === 0) {
      let httpService = this.context;

      httpService.getOneMovie(this.props.match.params.id).then(movie => {
        this.props.getMovie(movie);
        httpService.getMoviesList(`?search=${movie.genres[0]}&searchBy=genres`).then(films => {
          this.props.getMovies(films);
          this.props.changeSortBy("release_date");
        })
      })
    }
  }

  render() {
    return (
      <div className = "movie-page">
        <div className = "movie-page-top">
          <div className = "movie-page-header">
            <div className = "movie-page-header-container">
              <div className = "header-logo">netflixroulette</div>
              <Link to = "/"><button className = "movie-page-search-button">search</button></Link>
            </div>
            <MovieDescription movie = { this.props.movie }/>
          </div>
        </div>
        <MovieRec genres = { this.props.movie.genres } />
        <Movies />
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
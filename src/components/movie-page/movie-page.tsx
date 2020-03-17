import React, { useEffect, useContext } from 'react';
import './movie-page.css';
import MovieDescription from './movie-description/movie-description';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import {Link} from 'react-router-dom';
import Movies from '../movies/movies';
import { HttpServiceContext } from "../http-service-context/http-service-context";
import MovieRec from './movie-recomendations/movie-recomendations';
import { ReduxState, Movie } from '../../types';

const MoviePage = (props: any) => {
    const httpService = useContext(HttpServiceContext);

    const { getMovies, changeSortBy, getMovie, match, movie } = props;

    useEffect(() => {
      if (movie.length === 0) {
        httpService.getOneMovie(match.params.id).then((film: Movie) => {
          getMovie(film);
          httpService.getMoviesList(`?search=${movie.genres[0]}&searchBy=genres`).then((films: Movie[]) => {
            getMovies(films);
            changeSortBy("release_date");
          })
        })
      }
    }, [httpService, getMovies, changeSortBy, match, movie, getMovie])

    return (
      <div className = "movie-page">
        <div className = "movie-page-top">
          <div className = "movie-page-header">
            <div className = "movie-page-header-container">
              <div className = "header-logo">netflixroulette</div>
              <Link to = "/"><button className = "movie-page-search-button">search</button></Link>
            </div>
            <MovieDescription movie = { props.movie }/>
          </div>
        </div>
        <MovieRec genres = { props.movie.genres } />
        <Movies />
      </div>
    );
  }

const mapStateToProps = (state: ReduxState) => {
  return {
    data: state.data,
    movie: state.movie,
    searchBy: state.searchBy
  }
}

export default connect(mapStateToProps, actions)(MoviePage);
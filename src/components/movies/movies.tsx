import React, { useContext } from "react";
import './movies.css';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import { HttpServiceContext } from "../http-service-context/http-service-context";
import MovieItem from '../movie-item/movie-item';

const Movies = (props: any) => {

    const httpService = useContext(HttpServiceContext);

    const changeMovies = (id: any) => {
      httpService.getOneMovie(id).then(movie => {
        props.getMovie(movie);
        httpService.getMoviesList(`?search=${movie.genres[0]}&searchBy=genres`).then(films => {
          props.getMovies(films)
        })
      })
    }

    const movies = props.data.map((item: any, index: number) => {
      const genres = item.genres.join(' & ');
      return (
        <MovieItem
          changeMovies = {() => changeMovies(item.id)}
          item = {item}
          key = {index}
          genres = {genres}
        />
      )
    });

  return (
    <div className = 'movies-container'>
      { movies }
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    data: state.data,
    sortBy: state.sortBy
  }
}

export default connect(mapStateToProps, actions)(Movies);
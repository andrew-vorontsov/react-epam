import React from "react";
import './movies.css';
import MovieItem from '../movie-item/movie-item';

const Movies = (props: any) => {

    const movies = props.data.map((item: any, index: number) => {
      const genres = item.genres.join(' & ');
      return (
        <MovieItem
          changeMovies = {() => props.changeMovies(item.id)}
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

export default Movies;
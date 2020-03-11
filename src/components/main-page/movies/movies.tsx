import React from "react";
import './movie-info.css';
import MovieItem from '../movie-item/movie-item';

const Movies = (props: any) => {

  const movies = props.data.map((item: any, index: number) => {
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
    <div className = 'movies-container'>
      { movies }
    </div>
  )
}

export default Movies;
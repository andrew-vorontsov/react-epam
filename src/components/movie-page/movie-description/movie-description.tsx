import React from 'react';
import './movie-description.css';

const MovieDescription = (props: any) => {
  return (
    <div className = "movie-data">
      <div className = "movie-poster">
        <img className = "movie-poster-image" src = { props.movie.poster_path } alt = ""/>
      </div>
      <div className = "common-movie-disc">
        <div className = "common-movie-disc__title">
          <div className = "common-movie-disc__title-text">{props.movie.title}</div>
          <div className = "common-movie-disc__title-rate">{props.movie.vote_count}</div>
        </div>
        <div className = "common-movie-disc__subtitle">{props.movie.tagline}</div>
        <div className = "common-movie-disc__year">
          { props.movie.release_date === undefined ? '' :  props.movie.release_date.match(/^\d\d\d\d/)}
          <div className = "common-movie-time">{props.movie.runtime}</div>
        </div>
        <div className = "common-movie-disc__disc">{props.movie.overview}</div>
      </div>
    </div>
  );
}

export default MovieDescription;
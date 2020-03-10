import React from 'react';
import './movie-item.css';

const MovieItem = (props: any) => {
  return (
    <div className = "movie" key = {props.index.toString()}>
      <div className = "movie-poster">
        <img className = "movie-poster-image" alt = {props.item.title} src = {props.item.poster_path} />
      </div>
      <div className = "movie-title">
        <span>{ props.item.title }</span>
        <span className = "movie-date">{ props.item.release_date.match(/^\d\d\d\d/) }</span>
      </div>
      <div className = "movie-genres">{ props.genres }</div>
    </div>
  )
}

export default MovieItem;
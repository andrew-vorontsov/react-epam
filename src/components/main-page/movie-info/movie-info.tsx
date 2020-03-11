import React from "react";
import './movie-info.css';

const MovieInfo = (props: any) => {

  return (
    <div className = "movie-info-container">
      <div className = "movie-info">
        <div>{ props.data } movies found</div>
        <div className = "movie-sort-options">
          <span>Sort by</span>
          <span
            onClick = {() => props.changeSortBy("release_date")}
            className = {props.sortBy === "release_date" ? "movie-sort-active " : ""}>
            release date
          </span>
          <span
            onClick = {() => props.changeSortBy("vote_average")}
            className = {props.sortBy === "vote_average" ? "movie-sort-active " : ""}>
            rating
          </span>
        </div>
      </div>
    </div>
  )
}

export default MovieInfo;


import React from "react";
import '../../main-page/movie-info/movie-info.css';

const MovieRec = (props: any) => {

  return (
    <div className = "movie-info-container">
      <div className = "movie-info">
        <div>Films by { props.genres === undefined ? '' : props.genres[0] } genre</div>
      </div>
    </div>
  )
}

export default MovieRec;
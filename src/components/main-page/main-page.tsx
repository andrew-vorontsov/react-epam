import React, { useContext, useEffect } from 'react';
import Header from './header/header';
import MovieInfo from './movie-info/movie-info';
import './main-page.css';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import { HttpServiceContext } from "../http-service-context/http-service-context";
import Movies from '../movies/movies';
import { ReduxState, Movie } from '../../types';

const MainPage = (props: any) => {
  const httpService = useContext(HttpServiceContext);

  const { getMovies, changeSortBy } = props;

  useEffect(() => {
    httpService.getMoviesList().then((movies: Movie[]) => {
      getMovies(movies);
      changeSortBy("release_date");
    })
  }, [httpService, getMovies, changeSortBy])

    return (
      <div className = "main-page">
        <Header />
        <MovieInfo
          changeSortBy = {props.changeSortBy}
          sortBy = {props.sortBy}
          data = {props.data.length}
          />
        <Movies />
      </div>
    );
  }

const mapStateToProps = (state: ReduxState) => {
  return {
    data: state.data,
    sortBy: state.sortBy,
    searchBy: state.searchBy
  }
}

export default connect(mapStateToProps, actions)(MainPage);
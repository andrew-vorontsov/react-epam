import React from 'react';
import Header from './header/header';
import MovieInfo from './movie-info/movie-info';
import './main-page.css';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import { HttpServiceContext } from "../http-service-context/http-service-context";
import Movies from '../movies/movies';

class MainPage extends React.Component {

  componentDidMount() {
    let httpService = this.context;

    httpService.getMoviesList('').then(movies => {
      this.props.getMovies(movies);
      this.props.changeSortBy("release_date");
    })
  }

  render() {

    return (
      <div className = "main-page">
        <Header />
        <MovieInfo
          changeSortBy = {this.props.changeSortBy}
          sortBy = {this.props.sortBy}
          data = {this.props.data.length}
          />
        <Movies />
      </div>
    );
  }
}
MainPage.contextType = HttpServiceContext;

const mapStateToProps = (state) => {
  return {
    data: state.data,
    sortBy: state.sortBy,
    searchBy: state.searchBy
  }
}

export default connect(mapStateToProps, actions)(MainPage);
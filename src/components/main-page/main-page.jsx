import React from 'react';
import Header from '../header/header';
import './main-page.css';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import { HttpServiceContext } from "../http-service-context/http-service-context";

class MainPage extends React.Component {

  componentDidMount() {
    const httpService = this.context;

    httpService.getMoviesList().then(value => {
      this.props.moviesLoaded(value)
    })
  }

  render() {

    const elements = this.props.data.map((item, index) => {
      const genres = item.genres.map(genre => genre + " ");
      return (
        <div className = "movie" key = {index.toString()}>
          <div className = "movie-poster">
            <img className = "movie-poster-image" alt = {item.title} src = {item.poster_path} />
          </div>
          <div className = "movie-title">
            { item.title }
            <span className = "movie-date">{ item.release_date.match(/^\d\d\d\d/) }</span>
          </div>
          <div className = "movie-genres">{ genres }</div>
        </div>
      )
    });

    return (
      <div className = "main-page">
        <Header />
        <div className = 'movies-container'>
          { elements}
        </div>
      </div>
    );
  }
}
MainPage.contextType = HttpServiceContext;

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps, actions)(MainPage)
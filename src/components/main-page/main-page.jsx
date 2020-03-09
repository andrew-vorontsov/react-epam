import React from 'react';
import Header from '../header/header';
import './main-page.css';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

class MainPage extends React.Component {

  componentDidMount() {
    this.props.moviesLoaded();
  }

  render() {
    const { moviesLoaded, data } = this.props;
    return (
      <div className = "main-page">
        <Header />
        <div>Main page</div>
        <div onClick = { moviesLoaded }>{ data }</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps, actions)(MainPage)
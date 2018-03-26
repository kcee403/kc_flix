import React, { Component } from 'react';
import Search from '../components/Search';
import Navbar from '../components/includes/Navbar';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import MovieItem from '../components/MovieItem';
import FavoriteMovieList from '../components/FavoriteMovieList';

class MovieResults extends Component {
  render() {
    return (
    <div>

    <Navbar showSearch={true} /> {/* Everytime you want to use Navbar you may hide the search bar by passing true or false */}

      <div className="container">
      <h2> Movie Search Results </h2>
        { this.props.movies ?        // ===== If there is nothing there, 'undefined', return null so that you don't get "can't use property of null"
          this.props.movies.map(item =>
          <MovieItem movie={item} showButton={true} key={item.id} /> ) :
            null}
      </div>
    </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    movies: state.movies, // === GLOBAL STATE from the store prop = { store }
  }
}
export default connect(mapStateToProps)(MovieResults);

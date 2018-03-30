import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from './MovieItem';
import Navbar from './includes/Navbar';
import { NavLink } from 'react-router-dom';
class FavoriteMovieList extends Component {
  render() {
    {console.log(this.props.favorites)}
    return(
      <div>
      <div className="container">
      <h2 className="page-header"> My Favorite Movies </h2>
      {this.props.favorites.map(movie => {
        return <MovieItem movie={movie} key={movie.id} />
      })}
      </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log("FavoriteMovieList: " + state);
  return {
      favorites: state.fav.favorites
  }
}
// const mapStateToProps = state => {
//   return {
//     favorites: state.fav.favorites,
//   };
// };
export default connect(mapStateToProps, null)(FavoriteMovieList);

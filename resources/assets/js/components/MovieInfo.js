import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

import {addToFavorite, removeFromFavorite, postToFavorite} from '../actions';

import { Rating } from 'material-ui-rating';
import NO_IMAGES from '../images/no_image.jpg';
import { connect } from 'react-redux';

class MovieInfo extends Component {
  state = {
    isFavorited: false,
  }


  render() {

    return(
      <div>
          <ul className="card col-sm-6 col-md-4 row movieCard">
          <li className="crop">
            <img className="card-img-top " src={(this.props.movie.poster_path ? urlComponent+this.props.movie.poster_path : NO_IMAGES)} target="_blank" alt={"Movie of " + `${this.props.movie.title}`} />
          </li>
          <div className="card-body">
            <h5 className="card-title movieTitle">{this.props.movie.title}</h5>

            <p className="card-text">Release Date: {this.props.movie.release_date}</p>
            <span className="card-text">Rating:
              <span className="material-rating">
                <Rating
                   style={this.style}
                   value={Math.ceil(this.props.movie.vote_average/2)}
                   max={5}
                   onChange={(value) => console.log(`Rated with value ${value}`)}
                />
              </span>
              <span>{this.props.movie.overview}</span>
              <hr />
            </span>
            <a href="#" className="btn btn-primary">
             <i className="fas fa-info"></i>
            </a>
          </div>
        </ul>
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
export default connect(mapStateToProps)(MovieInfo);

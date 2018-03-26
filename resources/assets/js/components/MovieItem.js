import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

import {addToFavorite, removeFromFavorite} from '../actions';
import {connect} from 'react-redux';
import { Rating } from 'material-ui-rating';
import NO_IMAGES from '../images/no_image.jpg';
const urlComponent = "https://image.tmdb.org/t/p/w342";
const movieUrl = "https://www.themoviedb.org/movie/";

class MovieItem extends Component {
  state = {
    isFavorited: false,

  }
  style = {
    padding: '0px'
  }

addToFavorite = () => {
  this.setState({isFavorited: !this.state.isFavorited});
  this.props.addToFavorite(this.props.movie);
}
  removeFromFavorite = () => {
    this.setState({isFavorited: !this.state.isFavorited});
    this.props.removeFromFavorite(this.props.movie);
  }
  displayFav = () => {
    if(!this.state.isFavorited)
      return <span className={"glyphicon glyphicon-heart-empty"} // ONLY IF THE isFavorited is equal to false
                    onClick={ () => this.addToFavorite() } />
    else
      return <span className={"glyphicon glyphicon-heart"}
                    onClick={ () => this.removeFromFavorite()} /> // ONLY IF THE isFavorited is equal to true
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
            <hr />
          </span>
          <span>{this.props.showButton ? this.displayFav() : null}</span>
          <a href="#" className="btn btn-primary">
              Info
          </a>
        </div>
      </ul>
    </div>
    )
  }
}
export default connect(null, { addToFavorite, removeFromFavorite } )(MovieItem);

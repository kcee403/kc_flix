import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

import {addToFavorite, removeFromFavorite} from '../actions';
import {connect} from 'react-redux';
import { Rating } from 'material-ui';
import NO_IMAGES from '../images/no_image.jpg';

class MovieInfo extends Component {
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

    )
  }
}
export default connect(null, { addToFavorite, removeFromFavorite } )(MovieItem);

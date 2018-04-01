import React, { Component } from 'react';

import { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { API_KEY } from '../secrets.js';
import { requestMovies } from '../actions';
import { connect } from 'react-redux';

class Search extends Component {

  state = {
    query: '',
  }
  search() {
    console.log('Search button clicked', this.state.query);
    let url = ` https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${this.state.query}`;
    fetch(url, {
      method: 'GET',
    }).then(response=> response.json())
    .then(jsObj => {this.props.requestMovies(jsObj.results)}); //== HERE movies becomes the prop of SEARCH.js
  }
  handleSubmit = event => {
    if(this.state.query == 'f') {
      event.target.preventDefault();
      console.log('Search query prevented from entering an empty space.');
    }
      else {
        return this.state.formMessage;
      }
  }
  render() {
    return (
      <div className="search">
        <Form style={{float: 'none'}} noValidate className="col-md-12 col-md-offset-3" onSubmit={this.handleSubmit}>
          <FormGroup style={{margin: '-10px 0px 0px 0px'}}>
            <ControlLabel>Search</ControlLabel> {' '}

             <input type="text"
              required
              placeholder="Type Movie Name"
              onChange={(event)=>this.setState({query: event.target.value})}
             /> {' '}
             <NavLink className="transparentBtn" to="/"> <Button bsStyle="primary"
                     className="glyphicon glyphicon-search"
                     onClick={()=>this.search()}
                     ></Button>
             </NavLink>
          </FormGroup>
        </Form>
      </div>
    );
  }
}  <NavLink className="title-mobile" to="/">KC FLIX</NavLink>
export default connect(null, { requestMovies })(Search); // ?? Why brackets?

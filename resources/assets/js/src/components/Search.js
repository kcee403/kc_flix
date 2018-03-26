import React, { Component } from 'react';

import { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

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
    if(this.state.query === '') {
      event.target.preventDefault();
    }
      else {
        return this.state.formMessage;
      }
  }
  render() {
    return (
      <div className="search">
        <Form style={{float: 'none'}} noValidate className="col-md-12 col-md-offset-3" onSubmit={this.handleSubmit}>
          <FormGroup>
            <ControlLabel>Search</ControlLabel> {' '}

             <input type="text"
              required
              placeholder="Type Movie Name"
              onChange={(event)=>this.setState({query: event.target.value})}
             /> {' '}
             <Button bsStyle="primary"
                     className="glyphicon glyphicon-search"
                     onClick={()=>this.search()}
                     ></Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
export default connect(null, { requestMovies })(Search); // ?? Why brackets?

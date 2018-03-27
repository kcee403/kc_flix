import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Navbar from '../includes/Navbar';
import { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

import { connect } from 'react-redux';

import registerServiceWorker from '../../registerServiceWorker';

class Register extends Component {

  state = {
    name: '',
    email: '',
    password: '',
  }

  handleSubmit = event => {

  }
  render() {

    return (

      <div className="container">

          <form className="mt-lg-5">
          <div className="form-group">

            <input type="name"
            className="form-control"
            placeholder="Enter Name"
               onChange={(event)=>this.setState({name : event.target.value})}
             />

            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>

           <div className="form-group">
             <label htmlFor="exampleInputEmail1">Email address</label>

             <input type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(event)=>this.setState({email : event.target.value})}
              />

             <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small>
           </div>

           <div className="form-group">
             <label htmlFor="exampleInputPassword1">Password</label>

             <input type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Password"
              onChange={(event)=>this.setState({password : event.target.value})} />

           </div>

           <button
             type="submit"
             className="btn btn-primary"> Submit
           </button>
          </form>

      </div> // End
    );
  }
}
if( document.getElementById('register') ) {
  ReactDOM.render(<Register />, document.getElementById('register')); // ?? Why brackets?
}

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Navbar from '../includes/Navbar';
import { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import $ from 'jquery';
import registerServiceWorker from '../../registerServiceWorker';

class Register extends Component {

  state = {
    name: '',
    email: '',
    password: '',
  }

  componentDidMount() {
    $(".input-button button").click(function(event) {

	$(".form-wrapper").addClass("send");

	event.preventDefault();
})
  }

  handleSubmit = event => {

  }
  render() {

    return (
<div className="form-body ">

    <div className="col-md-3 form-side-header">
        <h2 style={{color: 'white'}}>Sign Up to start watching your favorite films!</h2>
    </div>
    <div className="form-wrapper col-md-4 form-header">
        <h2 className="form-title ">Register with KC-Flix</h2>
        <div className="success">
          <i className="fa fa-check fa-3x"></i>
          <h1>Thank you for subscribing</h1>
        </div>

        <div className="input-text">
          <input type="text" id="label1" placeholder="Your name"/>
          <label htmlFor="label1">Your name</label>
        </div>

        <div className="input-text">
          <input type="text" id="label2" placeholder="E-mail" />
          <label htmlFor="label2">E-mail</label>
        </div>

        <div className="input-text">
          <input type="text" id="label3" placeholder="Password" />
          <label htmlFor="label3">Password</label>
        </div>

        <div className="input-button">
          <button><i className="fa fa-paper-plane"></i></button>
        </div>
    </div>

</div>
    );
  }
}
if( document.getElementById('register') ) {
  ReactDOM.render(<Register />, document.getElementById('register')); // ?? Why brackets?
}

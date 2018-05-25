import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../includes/Navbar';
import { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { NavLink, Redirect, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import $ from 'jquery';
import registerServiceWorker from '../../registerServiceWorker';
import axios from 'axios';
import {login, logout} from '../../actions';

class Login extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    loggedin: false
  }

  componentDidMount() {
     $(".input-button button").click(function(event) {

     $(".form-wrapper").addClass("send");
   });
  }
  handleNameChange = event => {
    this.setState({
      name: event.target.value,
  });
  }
  handleEmailChange = event => {
    this.setState({
      email: event.target.value,
  });
  }
  handlePasswordChange = event => {
    this.setState({
      password: event.target.value,
  });
  }

  handleSubmit = event => {
    event.preventDefault();

    const INMOTION = 'https://www.kcflix.site/api/users/login';
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
          console.log( "User Name is: " + user.name);
          console.log("Site api Call to: " + INMOTION);
    axios.post(INMOTION, user)
      .then(res => {
        console.log("Response is: ", res);
        console.log("SuccessStatus is: ", res.data);
        localStorage.setItem('token', res.data.success.token.accessToken);
        let token = localStorage.getItem('token');
        token ? (this.props.login()) : null;
        console.log("Token is :" + token);
          if(token) {
              $(".input-button button").click(function(event) {

                  $(".form-wrapper").addClass("send");
              });
          }
      }).catch(error => {
    console.log(error.response);
});
  }

  render() {

    let authRedirect = null;
    if(this.props.isAuthenticated) {
      authRedirect = <Redirect to="/" />
    }
    return (
    <div className="form-body ">
        {authRedirect}
        <div className="col-md-3 form-side-header">
            <h2 style={{color: 'white'}}>Login to start watching your favorite films!</h2>
            <h4>
              Not registered, <NavLink to="/register"><strong>Sign Up</strong> with us.. </NavLink>
            </h4>
            <h4>
                ..Or head<NavLink to="/"><strong> back</strong> <i className="fas fa-arrow-left"></i> </NavLink>
            </h4>
        </div>
        <form className="form-wrapper login-wrapper col-md-4 form-header" onSubmit={this.handleSubmit}>
            <h2 className="form-title ">Login to <span className="kcflix">KC-FLIX</span></h2>

            <div className="input-text">
              <input type="text" id="label1" placeholder="Name" name="name"
              onChange={this.handleNameChange}
              value={this.state.name} />
              <label htmlFor="label1">Name</label>
            </div>

            <div className="input-text">
              <input type="text" id="label2" placeholder="E-mail" name="email"
              onChange={this.handleEmailChange}
              value={this.state.email} />
              <label htmlFor="label2">E-mail</label>
            </div>

            <div className="input-text">
              <input type="text" id="label3" placeholder="Password" name="password"
              onChange={this.handlePasswordChange}
              value={this.state.password} />
              <label htmlFor="label3">Password</label>
            </div>

            <div className="input-button">
              <button type="submit"><i className="fa fa-paper-plane"></i></button>
            </div>

        </form>

    </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    isAuthenticated: state.auth.isAuthenticated, // === GLOBAL STATE from the store prop = { store }
  }
}

export default connect(mapStateToProps, { login, logout } )(Login);

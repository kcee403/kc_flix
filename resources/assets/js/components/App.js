import React, { Component } from 'react';
import MovieResults from '../containers/MovieResults.js';
import FavoriteMovieList from './FavoriteMovieList';
import { BrowserRouter, Route, Redirect, NavLink, Switch, HashRouter } from 'react-router-dom';
import Navbar from './includes/Navbar';
import Register from './auth/Register';
import Login from './auth/Login';
import MovieInfo from './MovieInfo';
import decode from 'jwt-decode';
import {connect} from 'react-redux';
import Modal from './UI/Modal/Modal';
import {closingModal} from '../actions';

const CheckAuth = () => {
  const token = localStorage.getItem('token');
  console.log(token);
  if(!token) {
    console.log("Current Token: " + token);
    return false;
  }

  try {
    const { exp } = decode(token);

      console.log(exp);
      console.log(new Date().getTime() / 1000);
    if( exp < new Date().getTime() / 1000) {
      return false;
    }
  }
    catch (event){
          return false;
  }

  return true;
}
const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest}
         render={ props =>
                       CheckAuth() ? ( <Component {...props} /> ) :
                                   ( <Redirect to={{pathname: "/login"}} />   ) }
  />
);

class App extends Component {

  render() {
    return (
          <div>
            <HashRouter>
            <div>
            <Navbar showSearch={true} />
              <Switch>
                    <Route exact path='/' component={MovieResults} />
                    <Route path='/register' component={Register} />
                    <Route path='/login' component={Login} />
                    <Route path='/movieinfo' component={MovieInfo} />
                    <AuthRoute path='/fav' component={FavoriteMovieList} />
              </Switch>
              </div>
            </HashRouter>
          </div>
          );
  }
}

function mapStateToProps(state) {
  console.log("isAuthenticated state is: ", state);
  return {
      isAuthenticated: state.auth.isAuthenticated,
      isAttemptingToAccess: state.atmpt.isAttemptingToAccess
  }
}

export default connect(mapStateToProps, {closingModal})(App);

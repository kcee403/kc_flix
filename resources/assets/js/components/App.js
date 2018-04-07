import React, { Component } from 'react';
import MovieResults from '../containers/MovieResults.js';
import FavoriteMovieList from './FavoriteMovieList';
import { BrowserRouter, Route, Redirect, NavLink, Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom'
import Navbar from './includes/Navbar';
import Register from './auth/Register';
import Login from './auth/Login';
import decode from 'jwt-decode';

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

  return false;
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
            <BrowserRouter>
            <div>
            <Navbar showSearch={true} />
              <Switch>
                    <Route exact path='/' component={MovieResults} />

                    <Route path='/register' component={Register} />
                    <Route path='/login' component={Login} />
                    <AuthRoute path='/fav' component={FavoriteMovieList} />
              </Switch>
              </div>
            </BrowserRouter>
          </div>
          );
  }
}
export default App;

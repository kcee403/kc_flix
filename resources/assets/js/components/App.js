import React, { Component } from 'react';
import MovieResults from '../containers/MovieResults.js';
import FavoriteMovieList from './FavoriteMovieList';
import { BrowserRouter, Route, Redirect, NavLink, Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom'
import Navbar from './includes/Navbar';
import Register from './auth/Register';
class App extends Component {

  render() {
    return (
          <div>
            <HashRouter>
            <div>
            <Navbar showSearch={true} />
              <Switch>

                    <Route exact path='/' component={MovieResults} />
                    <Route path='/fav' component={FavoriteMovieList} />

                    <Route path="/register" component={Register} />
              </Switch>
              </div>
            </HashRouter>
          </div>
          );
  }
}
export default App;

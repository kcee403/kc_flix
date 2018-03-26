import React, { Component } from 'react';
import MovieResults from '../containers/MovieResults.js';
import FavoriteMovieList from './FavoriteMovieList';
import { BrowserRouter as Router, Route, Redirect, NavLink, Switch } from 'react-router-dom';
import Navbar from './includes/Navbar';

class App extends Component {

  render() {
      return (
              <div>
                <Router>
                  <Switch>

                        <Route exact path='/' component={MovieResults} />
                        <Route path='/fav' component={FavoriteMovieList} />
                  </Switch>
                </Router>
              </div>
            );
  }
}
export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, NavLink, Switch } from 'react-router-dom';
import Search from './Search';
import MovieInfo from '../MovieInfo';
import $ from 'jquery';
import {logout} from '../../actions';
import {connect} from 'react-redux';

class Navbar extends Component {
  componentDidMount() {
    $(document).ready(function(){
    		$('.navbar-fostrap').click(function(){
    			$('.nav-fostrap').toggleClass('visible');
    			$('body').toggleClass('cover-bg');
    		});
    	});
  }

  render(){
      return(
      <div>
        <nav>
        <div id="FOSTRAP NAVBAR">
          <div className="">
            <nav>
              <div className="nav-fostrap">
                <ul>
                  <li><NavLink className="title-mobile" to="/">KC FLIX</NavLink></li>
                  <li>{this.props.showSearch ? <Search /> : null}  </li>
              <div className="float-right">
                  <li><NavLink to="/fav">Your Favs</NavLink></li>
                  <li><a href="javascript:void(0)" className="useraccount">User Account<span className="arrow-down"></span></a>
                    <ul className="dropdown">
                      <li><NavLink to="/login">Login</NavLink></li>
                      <li> <a href="" onClick={ () => {this.props.logout()}}>Logout</a> </li>
                      <li><NavLink to="/register">Register</NavLink></li>
                    </ul>
                  </li>
              </div>
                </ul>
              </div>
              <div className="nav-bg-fostrap">
                <div className="navbar-fostrap"> <span></span> <span></span> <span></span> </div>
                <NavLink className="title-mobile" to="/">KC FLIX</NavLink>
              </div>
            </nav>
            <div className='content'>
            </div>
        </div>
        </div>
        </nav>
      </div>
    );
  }
} export default connect(null, {logout})(Navbar);

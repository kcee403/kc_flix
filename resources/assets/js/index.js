import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import registerServiceWorker from './registerServiceWorker';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';

const logger = store => {
   return next => {
     return action => {
       console.log('[Middleware] Dispatching', action);
       const result = next(action);
       console.log('[Middleware] next state', store.getState() );
       return result;
     }
   }
 }

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger) ) );


ReactDOM.render(  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}><Provider store={store}><App /></Provider></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();

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

import thunk from 'redux-thunk';

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const store = createStore(rootReducer, composeEnhancers(
     applyMiddleware(thunk)
 ));


if( document.getElementById('root') ) {
ReactDOM.render(  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}><Provider store={store}><App /></Provider></MuiThemeProvider>, document.getElementById('root'));
}
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Second from './Second';
import First1 from './First1';
import Third from './Third';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from  'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/" exact component={First1} />
      <Route path="/second" component={Second} />
      <Route path='/third' component={Third} />
      
    
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
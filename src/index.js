import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import RouteConfig  from './router';
ReactDOM.render(
  <React.Fragment>
    <RouteConfig  />
  </React.Fragment>,
  document.getElementById('root')
);
serviceWorker.unregister();

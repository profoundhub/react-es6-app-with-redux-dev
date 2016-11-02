import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
import Raven from 'raven-js';
import { sentry_url, logException } from './data/config';

// Raven.config(sentry_url).install();
// Raven.config(sentry_url).install();

/*
Raven.config(sentry_url, {
  tags: {
    git_commit: 'gy7h90574f',
    userLevel: 'queen'
  }
}).install();
*/

/*
logException(new Error('download Errors'), {
  email: 'daniel@re-re-gallery.com'
});
*/

/*
Raven.captureMessage('Something bad is happening!');
Raven.showReportDialog();
*/

/*
console.log(window.didNotExist.sadHappyFace);
*/


const rootDiv = document.getElementById('root');
const router = (
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ App }>
        <IndexRoute component={ PhotoGrid }></IndexRoute>
        <Route path="/view/:postId" component={ Single }></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, rootDiv);

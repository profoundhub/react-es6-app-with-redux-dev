import React from 'react';
import { render } from 'react-dom';
// Import CSS
import css from './styles/style.styl';
const rootDiv = document.getElementById('root');

// Import Components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={ history }>
      <Route path="/" component={ Main }>
        <IndexRoute component={ PhotoGrid }></IndexRoute>
        <Route path="/view/:postId" component={ Single }></Route>
      </Route>
    </Router>
  </Provider>
)

// render(<Main><p>Child</p></Main>, rootDiv);
render(router, rootDiv);

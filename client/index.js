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

const router = (
  <Router history={ browserHistory }>
    <Route path="/" component={ Main }>
      <IndexRoute component={ PhotoGrid }></IndexRoute>
      <Route path="/view/:postId" component={ Single }></Route>
    </Route>
  </Router>
)

// render(<Main><p>Child</p></Main>, rootDiv);
render(<Main />, rootDiv);

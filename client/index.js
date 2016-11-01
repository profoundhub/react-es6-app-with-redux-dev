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


render(<Main />, rootDiv);

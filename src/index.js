import React from 'react';
import ReactDOM from 'react-dom';
//import { withRouter } from 'react-router';
import App from './views/App.jsx';
import store from './reducers';

const render = () => ReactDOM.render(<App />, document.getElementById('root'));
render();
store.subscribe(render);

import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
//importation des composants de page
import Home from './page/Home';
import Contact from './page/Contact';
import Admin from './page/Admin';
import Article from './page/Article';
import Error404 from './page/Error404';
import * as serviceWorker from './serviceWorker';
//importation du système de routes
import { BrowserRouter, Switch, Route} from 'react-router-dom'
//importation de font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment,faSearch,faUserCircle,faBan,faBars } from '@fortawesome/free-solid-svg-icons'
library.add(faComment,faSearch,faUserCircle,faBan,faBars)

const Root = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route exact path="/contact" component={Contact} />
		<Route exact path="/admin" component={Admin} />
		<Route path="/article/:name" component={Article} />
		<Route component={Error404} />
	</Switch>
)

//j'encapsule le composant principal par le composant de routage
ReactDOM.render(
	<BrowserRouter>
		<Root />
	</BrowserRouter>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

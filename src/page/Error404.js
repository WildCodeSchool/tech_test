import React, { Component } from 'react';
import '../css/Home.css';
//importation des composants
import Header from '../composant/Header.js'
import Footer from '../composant/Footer.js'
//importation du jeu d'icones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Home extends Component {

	componentDidMount(){
		//mise à jour de la balise title de la page
		document.title = "Erreur | Blog Mika"
	}

	render() {
		return (
			<div className="blogContainer">
				<Header />
				<article className="articleDetailArticle">
					<h1><FontAwesomeIcon icon="ban" /> Erreur</h1>
					<p>Désolé mais la page que vous recherchez n'existe pas ou a été déplacée/supprimée</p>
				</article>
        		<Footer />
			</div>
		);
	}
}

export default Home;

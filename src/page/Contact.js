import React, { Component } from 'react';
import '../css/Home.css';
//importation des composants
import Header from '../composant/Header.js'
import Footer from '../composant/Footer.js'

class Home extends Component {

	componentDidMount(){
		//mise à jour de la balise title de la page
		document.title = "Contact | Blog Mika"
	}

	render() {
		return (
			<div className="blogContainer">
				{/* Je passe l'identifiant de page pour afficher le menu actif */}
				<Header idPage={1} />
				<article className="articleDetailArticle">
					<h1>Contact</h1>
					<form method="post" action="sendMail" className="formContact">
						{/* formulaire non fonctionnel */}
						<p>Veuillez utiliser le formulaire ci-dessous pour toute information supplémentaire</p>
						<label htmlFor="nomContact" className="labelContact">Nom</label>
						<input type="text" name="nom" id="nomContact" className="champContact" required />
						<label htmlFor="prenomContact" className="labelContact">Prénom</label>
						<input type="text" name="prenom" id="prenomContact" className="champContact" required />
						<label htmlFor="telContact" className="labelContact">Téléphone</label>
						<input type="text" name="tel" id="telContact" className="champContact" required />
						<label htmlFor="mailContact" className="labelContact">Email</label>
						<input type="email" name="email" id="mailContact" className="champContact" required />
						<label htmlFor="msgContact" className="labelContact">Message</label>
						<textarea name="message" id="msgContact" className="champContact" required></textarea>
						<input type="submit" className="boutonContact" value="Envoyer" />
						{/* balise de réception du message de feedback du formulaire */}
						<div className="feedBackContact"></div>
					</form>
				</article>
        		<Footer />
			</div>
		);
	}
}

export default Home;

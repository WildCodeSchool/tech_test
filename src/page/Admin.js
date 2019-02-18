import React, {Component} from 'react';
import '../css/Home.css';
//importation des composants
import Header from '../composant/Header.js'
import Footer from '../composant/Footer.js'

class Home extends Component {

	componentDidMount(){
		//mise à jour de la balise title de la page
		document.title = "Connexion adminsitration | Blog Mika"
	}

	render() {
		return (
			<div className="blogContainer">
				<Header idPage={2} />
				<article className="articleDetailArticle">
					<h1>Connexion à l'administration</h1>
					<form method="post" action="login" className="formContact">
						<p>Veuillez vous connecter pour accéder à l'administration</p>
						<label htmlFor="loginAdmin" className="labelContact">Login</label>
						<input type="text" name="login" id="loginAdmin" className="champContact" required />
						<label htmlFor="passAdmin" className="labelContact">Mot de passe</label>
						<input type="password" name="pass" id="passAdmin" className="champContact" required />
						<input type="submit" className="boutonContact" value="Connexion" />
						<div className="feedBackLogin"></div>
					</form>
				</article>
        		<Footer />
			</div>
		);
	}
}

export default Home;

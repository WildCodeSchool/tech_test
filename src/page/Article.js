import React, {Component} from 'react';
import '../css/Home.css';
//importation des composants
import Header from '../composant/Header.js'
import Footer from '../composant/Footer.js'
//importation du tableau de données fictives
import MY_DATAS from '../composant/data.js'
//importation des icones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//composant pour affichage des commentaires
function ListeCommentaires({entries}) {
	return (
		<ul className="listeCommentaires">
			{/* boucle sur le tableau des commentaires */}
			{entries.map(({auteur, commentaire, date}) => (
				<li className="liCommentaire">
					<header className="headerCommentaire">
						<span><FontAwesomeIcon icon="user-circle" /> {auteur}</span>
						<span>{date}</span>
					</header>
					<p>{commentaire}</p>
				</li>
			))}
		</ul>
	);
}

class Home extends Component {
	//fonction qui va rechercher l'article actif dans la tableau de données
	//on récupère l'url demandée dans les props du composant
	//on boucle sur le tableau de données et on renvoi un objet contenant les informations
	getArticle(){
		const urlActive = `article/${this.props.match.params.name}`
		var myArticle
		MY_DATAS.forEach(({url, title, date, img, texte, nbCommentaires, commentaires}) => {
			if(url === urlActive){
				myArticle = {
					titre: title,
					date: date,
					img: img,
					texte: texte,
					nbCommentaires: nbCommentaires,
					commentaires: commentaires
				}
			}
		})
		return myArticle
	}
	
	componentDidMount(){
		//mise à jour dynamique de la balise title de la page
		const monArticle = this.getArticle()
		document.title = `${monArticle.titre} | Blog Mika`
	}
	render() {
		const monArticle = this.getArticle()
		return (
			<div className="blogContainer">
				<Header />
				<article className="articleDetailArticle">
					<h1>{ monArticle.titre }</h1>
					<figure className="figDetailArticle">
						<img src={monArticle.img} alt={ monArticle.titre } className="imgListeArticle" />
					</figure>
					{/* j'utilise la props dangerouslySetInnerHTML pour interpréter les balises html enregistrées dans le tableau de données */}
					<div dangerouslySetInnerHTML={{__html: monArticle.texte}}></div>
					<footer className="footerArticle">
						<time pubDate>Publié le : {monArticle.date}</time>
						{/* affichage conditionnel en fonction du nombre de commentaire */}
						<span><FontAwesomeIcon icon="comment" /> {monArticle.nbCommentaires===0 ? "Pas encore de commentaire" : monArticle.nbCommentaires}
						</span>
					</footer>
					{/* Si commentaires enregistrées, j'affiche la liste des commentaires */}
					{monArticle.nbCommentaires > 0 && 
						<ListeCommentaires entries={monArticle.commentaires} />
					}
					<form action="saveCom" method="post" className="formCommentaire">
						<p>Laissez votre commentaire en utilisant le formulaire ci-dessous</p>
						<label htmlFor="nomCommentaire" className="labelCommentaire">Nom</label>
						<input type="text" name="nom" id="nomCommentaire" className="champCommentaire" required />
						<label htmlFor="txtCommentaire" className="labelCommentaire">Commentaire</label>
						<textarea name="commentaire" id="txtCommentaire" className="champCommentaire" required></textarea>
						<input type="submit" className="boutonFormCommentaire" value="Envoyer" />
						<div className="feedBackCommentaire"></div>
					</form>
				</article>
        		<Footer />
			</div>
		);
	}
}

export default Home;

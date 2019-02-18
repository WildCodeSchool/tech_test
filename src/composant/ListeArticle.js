import React from 'react'
import '../css/Home.css'
//importation du jeu d'icones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//composant pour afficher la liste des articles avec comme paramètres un tableau de données
function ListeArticle({entries}) {
	return (
		<ul className="listeArticle">
			{/* boucle sur le tableau de données pour afficher les articles */}
			{entries.map(({id, title, url, img, accroche, date, nbCommentaires}) => (
				<li className="liArticle" key={id}>
					<figure className="figListeArticle">
						<a href={url} title="Lire la suite"><img src={img} alt={title} className="imgListeArticle" /></a>
					</figure>
					<h1>{title}</h1>
					<p>{accroche}</p>
					<a href={url} title="Lire la suite" className="lienListeArticle">Lire la suite</a>
					<footer className="footerListeArticles">
						<time className="pubTimeListeArticle">{date}</time>
						<span className="nbComListeArticle"><FontAwesomeIcon icon="comment" /> {nbCommentaires}</span>
					</footer>
				</li>
			))}
		</ul>
	);
}

export default ListeArticle
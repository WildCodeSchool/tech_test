import React from 'react'
import '../css/Home.css'
//importaion du composant de bouton pour le menu burger
import MenuButton from './MenuButton'
//importation du logo et du jeu d'icones
import logo from '../images/Metallica-M.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//tableau pour afficher le menu
const monMenu = [
	{ 
		ancre: "Accueil",
		url: "/",
		title: "Retour à l'accueil"
	},
	{
		ancre: "Contact",
		url: "/contact",
		title:"Contactez-moi"
		
	},
	{
		ancre: "Admin",
		url: "/admin",
		title: "Connexion administrateur"
	}
]

//composant d'entête de page avec comme paramètre l'identifiant de page qui correspond à l'index du tableau de menu
function Header({idPage}){
	return (
		<header className="blogHeader">
			<a
				className="lienLogo"
				href="/"
				title="Retour à l'accueil"
			>
				<img src={logo} className="logo" width="800" height="800" alt="Logo" />
			</a>
			{/* composant MenuButton qui affiche le menu burger quand l'écran est inférieur à 850px de large */}
			<MenuButton />
			<nav className="navMenu">
				{/* boucle sur le tableau de menu, si l'identifiant de page correspond à l'index du tableau du menu on affiche la classe active en plus pour indiquer la page active */}
				{monMenu.map((lien, index) => (
					<a 
						href={lien.url} 
						className={idPage===index ? "lienMenu actif" : "lienMenu"} 
						key={index} 
						title={lien.title}
					>
						{lien.ancre}
					</a>
				))}
				{/*formulaire de recherche non actif pour le moment*/}
				<form method="post" action="search" className="formSearch">
					<input type="search" name="search" className="champSearch" placeholder="Recherche..." />
					<button action="submit" className="boutonFormSearch"><FontAwesomeIcon icon="search" /></button>
				</form>
			</nav>
		</header>
	);
}

export default Header
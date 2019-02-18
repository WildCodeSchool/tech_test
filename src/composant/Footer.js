import React from 'react'
import '../css/Home.css'

//composant pied de page
function Footer(){
	return (
		<footer className="blogFooter">
			<address className="adrFooter">
				Michaël Cheloudtchenko<br />
				Quartier Peña Elhortzeta<br />
				64240 Hasparren<br />
				06 75 40 99 00
			</address>
			<p className="infoBlog">Blog de test sur plateforme React. Partie front fonctionnelle, partie back et formulaires non fonctionnels pour le moment</p>
		</footer>
	);
}

export default Footer
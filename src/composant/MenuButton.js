import React, {Component} from 'react';
import '../css/Home.css';
//importation des icones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MenuButton extends Component {

	//j'utilise l'état local pour afficher ou effacer le menu dans le cas où l'écran est petit (<850px)
	state = {
		open : false
	}
	
	//fonction appelée au click sur le bouton, on change l'état local et on le met à jour
	toggleMenu(e){
		const newButtonState = !this.state.open
		this.setState({open:newButtonState})
	}
	
	render() {
		const open = this.state.open
		return (
			<button className={`menuBurger ${open && "ouvert"}`} onClick={() => this.toggleMenu()}>
				<FontAwesomeIcon icon="bars" />
			</button>
		);
	}
}

export default MenuButton;

import React, { Component } from 'react';
import '../css/Home.css';
//importation des composants
import Header from '../composant/Header.js'
import Footer from '../composant/Footer.js'
import ListeArticles from '../composant/ListeArticle.js'
//tableau de données fictives
import MY_DATAS from '../composant/data.js'

class Home extends Component {
  render() {
    return (
      <div className="blogContainer">
      	{/* Je passe l'identifiant de page pour afficher le menu actif */}
        <Header idPage={0} />
        {/* Affichage de la liste des articles en passant le tableau de données */}
        <ListeArticles entries={MY_DATAS} />
        <Footer />
      </div>
    );
  }
}

export default Home;

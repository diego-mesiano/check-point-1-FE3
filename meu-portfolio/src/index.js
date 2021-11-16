import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Header from './components/Header';
import Banner from './components/Banner';
import Projetos from './components/Projetos';
import Footer from './components/Footer';

let cont = !localStorage.getItem("contador")?localStorage.setItem("contador", 1):localStorage.getItem("contador");
window.onbeforeunload = function () {
    cont++;
    localStorage.setItem("contador", cont);
}


ReactDOM.render(
  <>
    <header id="home">
      <Header />
    </header>
    <main>
      <Banner contador={cont}/>
      <p id="guia-projetos"></p>
      <h2 id="titulo-projetos">Meus Projetos</h2>
      <div id="sessao-projetos">
        <Projetos />
      </div>
    </main>
    <Footer/>

  </>,
  document.getElementById('root')
  
  
);



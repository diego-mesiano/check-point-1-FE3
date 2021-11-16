import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import Header from './components/Header';
import Banner from './components/Banner';
import Projetos from './components/Projetos';
import Footer from './components/Footer';

if(!localStorage.getItem("contador") === true)
  localStorage.setItem("contador", 1);
let cont = localStorage.getItem("contador");
window.onbeforeunload = function () {
    cont++;
    localStorage.setItem("contador", cont);
}

let mensagem = "";
if(cont>1 && cont<4){
  mensagem = "Bom te ver novamente!"
}else if(cont>=4){
  mensagem = "Me contrata? =)"
}


ReactDOM.render(
  <>
    <header id="home">
      <Header />
    </header>
    <main>
      <Banner contador={cont} mensagem={mensagem}/>
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



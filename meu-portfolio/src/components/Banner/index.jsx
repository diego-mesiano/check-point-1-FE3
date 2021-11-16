import './style.scss';
import eu from '../../img/eu.png'
import curriculo from '../../img/curriculo-diego-mesiano.pdf'


const Banner = (props) => {
    return (
        <section id="banner">
                <h1>Seja bem vindo ao meu Portfólio</h1>
                <h3>Esta é a {props.contador}ª vez que te vejo por aqui!</h3>
                
                <div>
                    <a class="btn btn-primary" href="#guia-projetos" role="button" id="botoes">Ver Meus Projetos</a>
                    <a class="btn btn-danger" href={curriculo} role="button" id="botoes" target="_blank" rel="noreferrer">Ver Meu Curriculo</a>
                </div>
                <img id="eu" src={eu} alt="Minha foto"/>
           
        </section>
    )
}

export default Banner;
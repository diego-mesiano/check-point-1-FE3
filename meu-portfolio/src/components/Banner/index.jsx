import './style.scss';
import eu from '../../img/eu.png'
import curriculo from '../../img/curriculo-diego-mesiano.pdf'


const Banner = (props) => {
    return (
        <section id="banner">
                <h1>Seja bem vindo ao meu Portfólio</h1>
                <h3><strong>{props.contador}ª</strong> vez que te vejo por aqui!</h3>
                <h3>{props.mensagem}</h3>
                
                <div>
                    <a className="btn btn-primary" href="#guia-projetos" role="button" id="botoes">Ver Meus Projetos</a>
                    <a className="btn btn-danger" href={curriculo} role="button" id="botoes" target="_blank" rel="noreferrer">Ver Meu Curriculo</a>
                </div>
                <img id="eu" src={eu} alt="Minha foto"/>
           
        </section>
    )
}

export default Banner;
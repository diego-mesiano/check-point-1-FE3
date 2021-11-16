import './style.scss';
import eu from '../../img/eu.png'
import curriculo from '../../img/curriculo-diego-mesiano.pdf'


const Banner = (props) => {
    return (
        <>
            <section id="banner">
                <h1>Bem vindo ao <strong className="destaque">meu Portfólio</strong></h1>
                <h3>Essa é a sua <strong className="destaque">{props.contador}ª</strong> visita!</h3>
                <h3>{props.mensagem}</h3>

                <div>
                    <a className="btn btn-danger" href="#guia-projetos" role="button" id="botoes">Ver Meus Projetos</a>
                    <a className="btn btn-primary" href={curriculo} role="button" id="botoes2" target="_blank" rel="noreferrer">Ver Meu Curriculo</a>
                </div>
                <img id="eu" src={eu} alt="Minha foto" />

            </section>
        </>
    )
}

export default Banner;
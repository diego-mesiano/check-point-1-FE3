import './style.scss';
import eu from '../../img/eu.png'

const Banner = () => {

    return (
        <section id="banner">
            
                <h1>Seja bem vindo ao meu Portfólio</h1>
                <h3>Esta é a 1ª vez que te vejo por aqui!</h3>
                <a class="btn btn-primary" href="#" role="button">Ver Meus Projetos</a>
                <img id="eu" src={eu}/>
           
        </section>
    )
}

export default Banner;
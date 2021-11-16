import './style.scss';
import linkedin from '../../img/linkedin.png';
import github2 from '../../img/github2.png';
import email from '../../img/email.png';
import curriculoPdf from '../../img/curriculo-diego-mesiano.pdf';
import curriculo from '../../img/curriculo.png';

const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top" id="rodape">
      <p className="col-md-4 mb-0" id="p">© 2021 Diego Mesiano</p>

      <a href="#banner" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none" id="logo-footer">
        <h2>D.M</h2>
      </a>

      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item"><a href="https://www.linkedin.com/in/diego-mesiano-87b680213/" target="_blank" rel="noreferrer" className="nav-link px-2 text-muted"><img id="img-contato" src={linkedin} alt="Meu Linkedin"/></a></li>
        <li className="nav-item"><a href="https://github.com/diego-mesiano" className="nav-link px-2 text-muted" target="_blank" rel="noreferrer"><img id="img-contato" src={github2} alt="Meu GitHub"/></a></li>
        <li className="nav-item"><a href="mailto:diego.mesiano1@gmail.com" className="nav-link px-2 text-muted" target="_blank" rel="noreferrer"><img id="img-contato" src={email} alt="Meu email"/></a></li>
        <li className="nav-item"><a href={curriculoPdf} className="nav-link px-2 text-muted" target="_blank" rel="noreferrer"><img id="img-contato" src={curriculo} alt="Meu curriculo"/></a></li>
      </ul>
    </footer>
  )
}

export default Footer;
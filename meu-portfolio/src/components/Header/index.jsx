
import './style.scss';

function Header() {

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light" id="cabecalho">
      <div className="container-fluid">
        <a className="navbar-brand" href="#banner" id="logo">Diego Mesiano</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#banner">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#guia-projetos">Projetos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#rodape">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;
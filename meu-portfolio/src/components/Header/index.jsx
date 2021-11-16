
import './style.scss';

function Header() {

  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light" id="cabecalho">
      <div class="container-fluid">
        <a class="navbar-brand" href="#" id="logo">Diego Mesiano</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#guia-projetos">Projetos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#rodape">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;
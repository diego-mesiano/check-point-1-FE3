import './style.scss';
import img1 from '../../img/img1.png';
import img2 from '../../img/img2.png';
import img3 from '../../img/img3.png';
import img4 from '../../img/img4.png';
import img5 from '../../img/img5.png';
import img6 from '../../img/img6.png';
import img7 from '../../img/img7.png';
import img8 from '../../img/img8.png';
import git from '../../img/github.png';
import ver from '../../img/ver.png';

function Projetos() {
    const projetos = [
        {
            id: 1,
            titulo: "Portfolio Pessoal (Este Site)",
            imagem: `${img1}`,
            ferramentas: "Html, Css, JavaScript, React, Bootstrap e Sass",
            descricao: "Site elaborado individualmente para servir de primeiro instrumento avaliativo da disciplina de Front-End 3 do curso CTD - Web Developer Full Stack da Digital House (3º bimestre). O objetivo é treinar os conceitos básicos de React, Bootstrap e Sass além de utilizar o .map() para gerar essa lista de projetos.",
            site: "",
            codigofonte: "https://github.com/diego-mesiano/check-point-1-FE3/tree/main/meu-portfolio"
        },
        {
            id: 2,
            titulo: "Lista de tarefas",
            imagem: `${img2}`,
            ferramentas: "Html, Css, JavaScript, GitHub",
            descricao: "Site Elaborado em grupo para servir de instrumento avaliativo final da disciplina de Front-End 2 do curso CTD - Web Developer Full Stack da Digital House (2º bimestre). O objetivo do projeto é possibilitar que o usuário cadastre tarefas a fazer(to-do) e que as mesmas permaneçam no navegador mesmo após seu fechamento. Nesse projetos aprendemos a trabalhar com JSON, consumir uma fake API e utilizar o local storage e session storage do navegador.",
            site: "https://diego-mesiano.github.io/CheckPoint2Front/",
            codigofonte: "https://github.com/diego-mesiano/CheckPoint2Front"
        },
        {
            id: 3,
            titulo: "Gerador de Card de Filmes",
            imagem: `${img3}`,
            ferramentas: "Html, Css, JavaScript",
            descricao: "Site Elaborado individualmente para servir de primeiro instrumento avaliativo da disciplina de Front-End 2 do curso CTD - Web Developer Full Stack da Digital House (2º bimestre). O objetivo do projeto é possibilitar que o usuário gere cards de filmes que ficam salvos no navegador mesmo após seu fechamento. Nesse projetos aprendemos a trabalhar com formulários e válida-los, local storage e session storage do navegador.",
            site: "https://diego-mesiano.github.io/GeradorCardsFilmes/",
            codigofonte: "https://github.com/diego-mesiano/GeradorCardsFilmes"
        },
        {
            id: 4,
            titulo: "Turma 1 - CTD",
            imagem: `${img4}`,
            ferramentas: "Html, Css, GitHub",
            descricao: "Site elaborado em grupo para servir de instrumento avaliativo final da disciplina de Front-End 1 do curso CTD - Web Developer Full Stack da Digital House (1º bimestre). O tema do projeto era livre, escolhemos falar sobre o curso CTD e sobre os integrantes do projeto. Nesse projetos aplicamos os conceitos básicos de HTML, Css, responsividade e Git-Hub.",
            site: "https://marivaldocarmo.github.io/projeto-empresa",
            codigofonte: "https://github.com/marivaldocarmo/projeto-empresa"
        },
        {
            id: 5,
            titulo: "Replica do site Codar.",
            imagem: `${img5}`,
            ferramentas: "Html, Css",
            descricao: "Esse foi meu primeiro site \"apresentável\", foi elaborado individualmente. O objetivo é replicar um modelo de site que se encontra na pasta /design do repositório. Nesse projeto coloquei em prática os conceitos adquiridos em Html e Css, em especial o uso de Flex-box no Css.",
            site: "https://diego-mesiano.github.io/codar/",
            codigofonte: "https://github.com/diego-mesiano/codar"
        },
        {
            id: 6,
            titulo: "\"Fake\" Login",
            imagem: `${img6}`,
            ferramentas: "Html, Css, JavaScript",
            descricao: "Site elaborado individualmente. Criei um site que cadastra e gerencia usuários, e faz login através do Front-End. O objetivo foi praticar o uso de local storage e manipulação de arrays. Ciente que esse modelo de autenticação não é seguro, não armazena dados e não é uma pratica de mercado.",
            site: "https://diego-mesiano.github.io/ProjectToDo/",
            codigofonte: "https://github.com/diego-mesiano/ProjectToDo"
        },
        {
            id: 7,
            titulo: "Base de Dados de Clinica Odontológica",
            imagem: `${img7}`,
            ferramentas: "Java, Sql, Maven, Log4j, JUnit e H2",
            descricao: "Projeto elaborado individualmente como primeiro instrumento avaliativo da disciplina de Back-End do curso CTD - Web Developer Full Stack da Digital House (3º bimestre). Automatizado com Maven, o objetivo é simular um consultório odontológico, onde o usuário pode cadastrar, ler, alterar e deletar dados (CRUD) de pacientes e dentistas armazenados em uma base de dados H2. Além de gerar logs a cada operação CRUD utilizando a biblioteca Log4J. Projeto testado utilizando a bibloteca JUnit.",
            site: "",
            codigofonte: "https://github.com/diego-mesiano/ctdDigitalHouse/tree/main/backEnd/CheckPoint1/clinica/src"
        },
        {
            id: 8,
            titulo: "Gerador de diretórios municipais Brasileiros",
            imagem: `${img8}`,
            ferramentas: "Shell Script, PowerShell",
            descricao: "Projeto elaborado individualmente com objetivo de praticar scripts de automação utilizando Shell Script. Cria automaticamente diretórios (pastas) contendo todos os municípios do Brasil organizados por estado.",
            site: "",
            codigofonte: "https://github.com/diego-mesiano/Criar-Diretorios-Municipios-Estados-BR"
        }
    ];

    return (
        projetos.map((projetos) => {
            return (
            
                <ul id="card-projetos" key={projetos.id}>
                    <li>
                        <h3>{projetos.titulo}</h3>    
                    </li>
                    <li>
                        <a href={projetos.site === "" ? projetos.codigofonte:projetos.site} target="_blank" rel="noreferrer" role="button" >
                        <img id="imagem-card" src={projetos.imagem} alt="Imagem do projeto"/>
                        </a>
                    </li>
                    <li>
                        <strong>Ferramentas: </strong>{projetos.ferramentas}
                    </li>
                    <li id="descricao">
                        <strong>Descrição: </strong>{projetos.descricao}
                    </li>
                    <li class={projetos.site === "" ? "d-none":""}>
                        <strong>Ver o projeto: </strong>
                        <a class="btn btn-link" href={projetos.site} target="_blank" rel="noreferrer" role="button">
                            <img id="icones" src={ver} alt="Visualizar o projeto"/>
                        </a>
                    </li>
                    <li>
                        <strong>Código-fonte: </strong>
                        <a class="btn btn-link" href={projetos.codigofonte} target="_blank" rel="noreferrer" role="button">
                            <img id="icones" src={git} alt="Código fonte do projeto"/>
                        </a>
                    </li>
                </ul>
            
            )
        })
    )
}

export default Projetos;
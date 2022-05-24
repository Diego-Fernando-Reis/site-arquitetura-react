import React from "react";

function Home(props) {
    return (
        <>
            <div className="header">
                <h1>Olá, somos a Rodrigues Projetos e Obras uma empresa especializada em
                execução e gerenciamento de obras, com profissionais há mais de 10
                anos acompanhando todos os detalhes da obra para você.</h1>

                <link href="">Saiba mais</link>
            </div>
            <div className="oque">
                <h2>O QUE E COMO FAZEMOS</h2>
                <h3>Sendo uma ponte que conecta arquitetos e clientes, gerenciamos e
                executamos todos os processos da obra (residencial, predial, corporativo,
                comercial), sempre priorizando as melhores soluções de projeto.</h3>
                <div className="lista">
                    <ul>
                        <li>Construção e Reforma</li>
                        <li>Gerenciamento de Obras</li>
                        <li>Desenvolvimento de Projetos</li>
                    </ul>
                </div>
                <link href="">Saiba mais</link>
            </div>
            <div className="conheca">
                <h2>CONHEÇA NOSSAS OBRAS</h2>
                <div className="galeria">
                </div>
                <link href="">Ver Galeria Completa</link>
            </div>
            <footer>
                <div className="mapa"></div>
                <div className="fale-conosco"></div>
            </footer>
        </>
      
    );
  }
  
  export default Home;
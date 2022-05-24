import React from "react";

function Contato(props) {
    return (
        <>
            <div className="header">
                <h1>Tem uma obra ou um projeto que quer iniciar e precisa de uma empresa
                de confiança? Pode contar com a gente!
                Ficaremos felizes em ajudar e cuidar de todos os detalhes do início ao fim
                para você.</h1>
            </div>
            <div className="formulario">
                <form>
                    <input className="usuario" placeholder="Insira seu Nome: "/>
                    <input className="email" placeholder="Insira seu Email: "/>
                    <button />
                </form>
            </div>
            <footer>
                <div className="mapa"></div>
                <div className="fale-conosco"></div>
            </footer>
        </>
      
    );
  }
  
  export default Contato;
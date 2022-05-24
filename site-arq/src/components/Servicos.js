import React from "react";

function Servicos() {
    return (
        <>
            <div className="header">
                <h1>Sendo uma ponte que conecta arquitetos e clientes, gerenciamos e
                executamos todos os processos da obra (residencial, predial, corporativo,
                comercial), sempre priorizando as melhores soluções de projeto.</h1>
            </div>
            <div className="oque">
                <h2>Construção e Reforma</h2>
                <div className="lista">
                    <ul>
                        <li>Demolição</li>
                        <li>Construção</li>
                        <li>Elétrica</li>
                        <li>Hidráulica</li>
                        <li>Forros e divisórias em drywall</li>
                        <li>Pisos e revestimentos</li>
                        <li>Pintura</li>
                    </ul>
                    <ul>
                        <li>Iluminação</li>
                        <li>Instalações (luminárias e
                        acabamentos especiais)</li>
                        <li>Manutenção</li>
                        <li>Limpeza periódica e pós-obra</li>
                    </ul>
                </div>
            </div>
            <div className="conheca">
                <h2>Gerenciamento de Obras</h2>
                <div className="lista">
                    <ul>
                        <li>Acompanhamento integral de todo o processo de obra</li>
                        <li>Gerenciamento de contratos, cronogramas e prazos</li>
                        <li>Logística de compra e recebimento de materiais e produtos</li>
                        <li>Gerenciamento de serviços e mão de obra específica terceirizada</li>
                        <li>Vistoria e recebimento de chave de apartamento.</li>
                        <li>Consultoria de contratação de serviços terceirizados e compra de materiais</li>
                    </ul>
                </div>
            </div>
            <div className="conheca">
                <h2>Desenvolvimento de Projetos</h2>
                <div className="lista">
                    <ul>
                        <li>Projetos de arquitetura e interiores</li>
                        <li>Projetos executivos</li>
                        <li>Modelagem 3D</li>
                        <li>Renderização (projetos com imagens foto realísticas)</li>
                    </ul>
                </div>
            </div>
            <footer>
                <div className="mapa"></div>
                <div className="fale-conosco"></div>
            </footer>
        </>
      
    );
  }
  
  export default Servicos;
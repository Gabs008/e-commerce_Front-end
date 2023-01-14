import React from "react";
import '../css/header.css';

function header(){
    return(
    <header className="cabecalho">
    {/* <img src="" href="http://localhost:3000" alt="logo"> */}
    <h1 id="titulo">E-commerce</h1>
    <div className="opcoes">
        <a className="link" href="/cadastroProduto">Cadastro Produto</a> 
        <a  className="link" href="/produtos">Produtos</a> 
        <a  className="link" id="login" href="/" title="login">Tela inicial</a> 
    </div>
    
       

</header>
    )
}

export default header
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Cadastro from '../pages/cadastro'
import Form from '../pages/formProduto'
import Produto from '../pages/Produtos'

const rota = () => {
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" exact element = {< Cadastro/>}   />
            <Route path="/cadastroProduto" element = {< Form/> }  />
            <Route path="/produtos" element = {< Produto/>}  />
            </Routes>
        </BrowserRouter>
    )
 }
 
 export default rota;
import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import Axios from "axios"
import imagem from'../img/form.jpg'
import'../css/formProd.css'
function form(){
    const [values, setValue] = useState();

    // const navigate = useNavigate();
   

    const changeValues = (value) =>{
        console.log(value);
        setValue((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    };

    
    const clickButton = () => {
        Axios.post("http://localhost:3030/produto",{
            titulo: values.titulo,
            descricao: values.descricao,
            valor: values.valor
        }).then((res) => {
           if(res.mensagenError){
             alert("Ocorreu um erro, tente mais tarde")
           }
           if(res){
            swal({
                title: "",
                text: "Produto cadastrado com sucesso, vá para a aba produtos",
                icon: "success",
              });
            navigate("/produto")
           }
        })
    };

    return(
        <div>
        <main className="corpo">
        <div className="container">

        <div className="left-side-form">
           
            <form id="signup">
            <input type="text" placeholder="Titulo" id="inputTitulo" name='titulo' onChange={changeValues} required />
            <input type="text" placeholder="Descrição" id="inputDescricao" name='descricao' onChange={changeValues} required />
            <input type="text" placeholder="Valor" id="inputValor" name='valor' onChange={changeValues} required />
            <button type="button" onClick={() => clickButton() } >Cadastrar</button>
             </form>
            
        </div>
        <div className="right-side-form">
            <h1>Cadastro Produto</h1>
            <img className="img-login" src={imagem}  alt="" />
        </div>

    </div>
</main>

    </div>
    )
}

export default form
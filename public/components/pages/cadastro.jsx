import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import '../css/cadastro.css'
import imagem from '../img/imgCadastro.jpg'
// import Criar from './js/fetch/postUser'
import Axios from "axios"
import swal from 'sweetalert'



function cadastro(){

    const [login, setLogin] = useState(true);

    const [values, setValue] = useState();

    const navigate = useNavigate();
   

    const changeValues = (value) =>{
        console.log(value);
        setValue((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    };

    const clickButton = () => {
        Axios.post("http://localhost:3030/usuario",{
            nome: values.nome,
            senha: values.senha,
            email: values.email
        }).then((res) => {
           if(res.mensagenError){
             alert("Ocorreu um erro, tente mais tarde")
           }
           if(res){
            swal({
                title: "Seja bem vindo",
                text: "Cadastrado com sucesso, vá para a aba produtos",
                icon: "success",
              });
           
           }
        })
    };

    const clickLogin = () => {
        Axios.post("http://localhost:3030/login",{
            senha: values.senha,
            email: values.email
        }).then((res) => {
            if(res.data.mensagemError){
                swal({
                    title: "Seja bem vindo",
                    text: "Email ou senha invalidos",
                    icon: "error",
                  });
            }
            if(res){
             navigate("/produtos")
            }
         })
    };
    



    return(
        <div>
            <main className="corpo">
        <div className="container">

            <div className="left-side-form">

                <div className="buttonsForm">
                    <div className="btnColor"></div>
                    <button id="btnSignin" onClick={()=>setLogin(true)}>Login</button>
                    <button id="btnSignup" onClick={()=>setLogin(false)}>Cadastro</button>
                </div>
                {login === true ? (<form id="signin" >
                    <input type="text" placeholder="Email" id="input-email" onChange={changeValues} required />
                    <i className="fas fa-envelope iEmail"></i>
                    <input type="password" placeholder="Senha" id="input-senha" onChange={changeValues} required />
                    <i className="fas fa-lock iPassword"></i>
                    <button type="button" onClick={()=> clickLogin() } >Login</button>
                    </form>
                ) : (<form id="signup">
                <input type="text" placeholder="Nome" id="inputNome" name='nome' onChange={changeValues} required />
                <i className="fas fa-lock iPassword"></i>
                <input type="password" placeholder="Senha" id="inputSenha" name='senha' onChange={changeValues} required />
                <i className="fas fa-envelope iEmail"></i>
                <input type="text" placeholder="Email" id="inputEmail" name='email' onChange={changeValues} required />
                <button type="button" onClick={() => clickButton() } >Cadastrar</button>
                 </form>)}
                
            </div>
            <div className="right-side-form">
                <h1>E-commerce</h1>
                <img className="img-login" src={imagem} alt="" />
            </div>

        </div>
    </main>
  
        </div>
    )
        
}

export default cadastro
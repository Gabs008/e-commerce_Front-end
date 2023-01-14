import React from "react";
import Axios from "axios";
import imagem from "../img/card.jpg"
import '../css/card.css';


function  produtos (){

    const [produto, setPost] = React.useState([]);

    React.useEffect(() => {
        Axios.get("http://localhost:3030/Produto").then((res) => {
        setPost(res.data.produto);
        })
        .catch(erro => {
            console.log(erro)
        })

    }, [])
    
    return(
        <>
        <main className="corpo">
        <div className="collum">
            {produto.map((elemento)=> <div className="card">
             <div className="titulo" >
             <h1>{elemento.titulo}</h1>
             </div>
             <div className="img">
                 <img src={imagem} alt="" />
             </div>
             <div className="descricao" >
             <h2>{elemento.descricao}</h2> 
             </div>
             <div className="descricao" >
             <h2>R${elemento.valor}</h2>
             
             </div>
           </div>
        )}

       </div>
        </main>
           
        </>     
            
       
       
    )

}

export default produtos
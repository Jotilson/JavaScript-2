
import './produtoStyle.css'
import Mostrar from './javas'
import './javas'
 function Produtos({nome,preco,url}){
 
 
    return(
<div className="caixaProduto" onClick={()=>Mostrar(nome,preco)}>
    <h1 className="titulo">{nome}</h1>
    <img src={url} alt="" />
    <p >{preco} €</p>
      
   </div>      
    )
}
export default Produtos
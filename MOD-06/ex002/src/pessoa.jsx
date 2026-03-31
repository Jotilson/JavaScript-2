
 function Pessoa({nome,idade,imagem}){
    return(
        <div>
    <h1>Usuarios</h1>
    <p>Nome:{nome} </p>
    <p>Idade:{idade}</p>
    <img src={imagem} alt="" width="100px"/>

        </div>
    )
 }

 export default Pessoa
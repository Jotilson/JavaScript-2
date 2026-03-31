import './App.css'
import Produtos from './produtos'
import './javas'

function App() {
  
 return (
  
  <div className="div">
   <h1 className="h1">Lojas de Roupas</h1>
     <Produtos nome="Cadernos" preco="10" url="/canetas.jpg" />
     <Produtos nome="Estojo" preco="5" url="./estojo.jpg"/>
      <Produtos nome="Computador" preco="100" url="./hp.jpg"/>
       <Produtos nome="Mochila" preco="20" url="./mochila.jpg"/>
        <Produtos nome="Sapato" preco="55" url="./nike.jpg"/>
        <div id="info">
          
        <p id="price"></p>
        </div>
         <footer className="footer"><p className="Pf">Teste de site criado com React</p></footer>
  </div>
   

  
  )
}

export default App

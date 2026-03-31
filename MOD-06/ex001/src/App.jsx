
import './App.css'
import botao from './appscript'
import Header from './header'
import Camisa from './ListaProdutos/Camisa'
import Sapato from './ListaProdutos/SapatoNike'
import Partis from './ListaProdutos/Partiscorno'

function App() {
  

  return (
    <div>
      <h1>Minha Loja Online</h1>
     <p>Bem-vindo ao meu e-commerce</p>
    <Header/>
    <Camisa/>    <Sapato/>
    <Partis/>
     <button onClick={botao}>Ver Produtos</button>
    </div>
  )
}

export default App

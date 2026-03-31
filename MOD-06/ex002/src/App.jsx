
import Pessoa from './pessoa'
import Livros from './livros'
import './App.css'

function App() {
  return (
  
 <div>
      <Pessoa nome="Domingos" idade="16" imagem="/foto.jpg"/> <hr />
        <Pessoa nome="Sebastião" idade="20" imagem="/foto2.jpg"/>
     
        <Livros titulo="A minha juventude" autor="Domingos Miala"/>
    </div>
  )
}

export default App

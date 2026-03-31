import { useState } from 'react'
import './App.css'
import {Mensagem} from './javas'
import { Mensagem2 } from './javas'

function App() {
   return (
    <div>
    <h1>Eventos em React (onClick)</h1>
    <h3>Onclick com funções sem parametros</h3>
      <p id="paragrafo"></p>
     <button onClick={Mensagem}>Ver a mensagem</button>
    <hr />
     <h3>Onclick com funções com parametros</h3>
      <p id="paragrafo2" >1921</p>
     <button onClick={()=> Mensagem2(3)}>Ver a mensagem</button>
    <hr />

    </div>
  )
}

export default App

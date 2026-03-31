import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import sobre from './sobre'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
     <Link to="/">sobre</Link>
    <Routes>
      <Route path='/' element={<sobre/>}>
   
      </Route>
    </Routes>
   
   </BrowserRouter>
  )
}

export default App

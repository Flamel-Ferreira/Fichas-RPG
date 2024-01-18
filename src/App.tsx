import { Link } from 'react-router-dom'
import './App.css'
import { RoutesPages } from './routes'

function App() {

  return (
    <>
      <div>
        <Link to='/detetives'>Detetives</Link>
        <Link to='/npcs'>Npcs</Link>
        <Link to='/monstros'>Monstros</Link>
      </div>
      <RoutesPages/>
      

    </>
  )
}

export default App

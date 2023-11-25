import { useState } from 'react'
import Navigation from './components/Navigation/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">

      <Navigation />

      <h1>PlayDates está en fase de desarrollo...</h1>


    </div>

  )
}

export default App

import { useState } from 'react'
import ComponenteB from './components/ComponenteB'

function App() {
  return (
    <div className="App">
      <ComponenteB contacto={true} />
      <br />
      <ComponenteB  />
      <br />
      <ComponenteB  />
      <br />
      <ComponenteB contacto={true} />
    </div>
  )
}

export default App

import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import GetRouters from './router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <GetRouters></GetRouters>
    </BrowserRouter>
  )
}

export default App

import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button>count is {count}</button>
    </>
  )
}

export default App

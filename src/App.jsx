import { useState } from 'react'

import './App.css'



function App() {
  const [count, setCount] = useState(0)

  const increment=()=>{
    setCount(count +1)
   }
   const decrementar=()=>{
    setCount(count -1)
   }
  return (
    <>
      <div >
        <h1>Contador es : {count}</h1>
        <button onClick={increment}>
          +
        </button>
        <button onClick={decrementar}>
         -
        </button>
      </div>
       
    </>
  )
}

export default App

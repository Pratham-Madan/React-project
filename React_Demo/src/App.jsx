import { useState } from 'react'
import Navbar from './components/Navbar'
import {Route, Routes } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  function Increment() {
    setCount((prev) => prev + 1)
  }

  function Decrement() {
    setCount((prev) => prev - 1)
  }
  return (
    <Routes>
      <Route path="/test" element={<Navbar name="John Doe" />}></Route>
      <Route path="/" element={
        <div>
          <Navbar name="John Doe" />
          <h1>{count}</h1>
          <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
      </div>}
       ></Route>
    </Routes>
     
  )
}


export default App;

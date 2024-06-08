import { useState } from 'react'
import './App.css'    
import Routers from './routers/Routers';
import { BrowserRouter } from 'react-router-dom';

function App() { 
  return ( 
    <BrowserRouter>
      <Routers/>
    </BrowserRouter> 
  )
}

export default App








 {/* <h1>Ashish Portfolio</h1>
      <p>{count} </p>
      <div className="card">
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </div> */}
      {/* <SignUp/> */}
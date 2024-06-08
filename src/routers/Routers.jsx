import React from 'react'
import {  Routes,Route, Outlet} from 'react-router-dom' 
import LayoutCompo from '../Layout/LayoutCompo'
import LandingPage from '../Pages/home/LandingPage'
import Skills from '../Pages/Skills/Skills'
import About from '../Pages/About/About'

function Routers  ()  {
  return (
    <div>
      <Routes>
          <Route path='/' element={<LayoutCompo></LayoutCompo>} >
           <Route  index element={<LandingPage/>} /> 
           <Route path='skills' element={<Skills/>}/>
           <Route path='about' element={<About/>}/>
          </Route> 
      </Routes>
    </div>
  )
}

export default Routers

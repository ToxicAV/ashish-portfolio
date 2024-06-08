import React from 'react'
import { Outlet } from 'react-router'
import Header from '../hero/Header'
import LandingPage from '../Pages/home/LandingPage'
import Skills from '../Pages/Skills/Skills'

const LayoutCompo = () => {
  return (
    <main className=' w-full h-[100vh] '>
      <Header/>
      <Outlet/>
      {/* <LandingPage/>
      <Skills/> */}
    </main>
  )
}

export default LayoutCompo

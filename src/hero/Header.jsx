import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <section className=' flex justify-end bg-red-400 bg-transparent fixed top-0 right-0 '>
            <nav className=' p-4'>
                <div className='  flex space-x-5 bgwhite  font-semibold   '>
                    <a className=' hover:scale-125 hover:text-sky-600 text-lg transform  transition-transform duration-300 ease-in-out text- ' href="/">Home</a>
                    <a className=' hover:scale-125 hover:text-sky-600 text-lg transform  transition-transform duration-300 ease-in-out text- ' href="about">About</a>
                    <a className=' hover:scale-125 hover:text-sky-600 text-lg transform  transition-transform duration-300 ease-in-out text- ' href="skills">Skills</a>
                    <a className=' hover:scale-125 hover:text-sky-600 text-lg transform  transition-transform duration-300 ease-in-out text-  ' href="/">Projects</a>
                    <a className=' hover:scale-125 hover:text-sky-600 text-lg transform  transition-transform duration-300 ease-in-out text- ' href="/">Contact</a>
                    <a className=' hover:scale-125 hover:text-sky-600 text-lg transform  transition-transform duration-300 ease-in-out text- ' href="/"></a>
                </div>
            </nav>
        </section>
    )
}

export default Header

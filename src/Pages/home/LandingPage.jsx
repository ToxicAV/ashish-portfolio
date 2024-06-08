import React from 'react'
import Header from '../../hero/Header'
import '/src/Pages/Components/Shining.css'
import { Link } from 'react-router-dom'



const LandingPage = () => {


  return (
    <section className=' bggreen-700 w-[100%] h-[100%] max-w-[1920px] '>

      {/*################################# FIRST SECTION #####################################*/}

      <div className='w-[100%] h-[100vh] flex '>
        <div className=' w-[40%] h-[100%] '>
          <img className='h-[100%] w-[100%] object-cover' src="/src/assets/landingpage/pexels-junior-teixeira-1064069-2047905.jpg" alt="" />
        </div>

        {/*################################# SECOND SECTION #####################################*/}

        <div className=' bg-gradient-to-r from-black via-slate-800 to-indigo-700 h-[100vh] w-[60%]'>
          <div className='rounded-lg w-fit border- border-slate-500 text-xl text-gray-300 p-12 mr-10 ml-16 mt-28'>
            <p>Hi this is,</p>
            <MainName />
            <p>I am a React <span className=''>frontend developer</span>  focus to become a full-stack developer.</p>
            <p>Bulding a beautifull website and engaging in digital era</p>
            <p>Creating UI </p>
          </div>

          <div className='  flex items-center justify-center mt-36'>
            <Link to="/">
              <button className=' flex gap-2 items-center hover:bg-fuchsia-500 ml-64 p-2 px-5 rounded-3xl bg-fuchsia-400'>
                <p className=' text-lg'>
                  Explore
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingPage



export const MainName = () => {
  return (
    <div>
      <p className=' text-4xl font-semibold py-3 '>
        <span className=" text-white red-500 shine shine-1">A</span>
        <span className=" text-white green-500 shine shine-2">s</span>
        <span className=" text-white blue-500 shine shine-3">h</span>
        <span className=" text-white yellow-500 shine shine-4">i</span>
        <span className=" text-white purple-500 shine shine-5">s</span>
        <span className=" text-white pink-500 shine shine-6 mr-5">h</span>
        <span className=" text-white green-500 shine shine-7  ">V</span>
        <span className=" text-white violet-500 shine shine-7">i</span>
        <span className=" text-white yellow-500 shine shine-8">s</span>
        <span className=" text-white gray-500 shine shine-8">h</span>
        <span className=" text-white pink-500 shine shine-9">w</span>
        <span className=" text-white white shine shine-9">a</span>
        <span className=" text-white pink-500 shine shine-10">k</span>
        <span className=" text-white blue-500 shine shine-10">a</span>
        <span className=" text-white orange-500 shine shine-6">r</span>
        <span className=" text-white rose-500 shine shine-6">m</span>
        <span className="text- shine shine-6">a</span>
      </p>
    </div>
  )
}
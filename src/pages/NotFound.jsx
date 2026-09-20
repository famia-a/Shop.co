import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'

function NotFound() {
  return (
    <div>
      <NavBar/>
      <div className='w-screen h-screen flex justify-center items-center text-xl text-red-400 '>
        <h1>Page Not Found</h1>
      </div>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default NotFound
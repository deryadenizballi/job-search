import { useState } from 'react'

import React from 'react'
import NavBar from './Components/Navbar/NavBar'
import Search from './Components/SearchDiv/SearchDiv'
import Job from './Components/JobDiv/JobDiv'
import Value from './Components/ValueDiv/ValueDiv'
// import Footer from './Components/FooterDiv/FooterDiv'

const App = () => {
  return (
    <div className='w-[85%] m-auto bg-white'>
        <NavBar/>
        <Search/>
        <Job/>
        <Value/>
    </div>
  )
}

export default App

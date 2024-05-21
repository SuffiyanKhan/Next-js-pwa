import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Services from './Components/Service/Service'
import Servicess from './Components/Services/Servicess'

function page() {
  return (
    <div>
      <Navbar/>
      <About/>
      <Services/>
      <Servicess/>
    </div>
  )
}

export default page
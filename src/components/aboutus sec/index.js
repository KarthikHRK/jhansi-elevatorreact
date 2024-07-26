import React from 'react'
import About1 from './about1'
import Abouttwo from './about2'
import Aboutthree from './about3'
import Navbar from '../Navsec/navbar'
import Footer from '../Navsec/footer'


const Index = () => {
  return (
    <div>
      <Navbar />
        <About1 />
        <Aboutthree />
        <Abouttwo />
        <Footer />
   
    </div>
  )
}

export default Index
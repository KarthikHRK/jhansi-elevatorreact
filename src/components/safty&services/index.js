import React, { useLayoutEffect } from 'react'
import Navbar from '../Navsec/navbar'
import SaftySection from '../safty&services/sec1'
import Footer from '../Navsec/footer'


const Index = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
},[]);

  return (
    <>
 
    <Navbar />
    <SaftySection/>
    <Footer />
    </>
  )
}

export default Index
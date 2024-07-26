import React, { useLayoutEffect } from 'react'
import Banner from './banner'
import Table from './table'
import Navbar from '../../Navsec/navbar'
import Footer from '../../Navsec/footer'


const Index = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
},[]);
  return (
    <div>  
    <Navbar/>
    <Banner />
    <Table/> 
    <Footer/>  
    </div>
  )
}

export default Index
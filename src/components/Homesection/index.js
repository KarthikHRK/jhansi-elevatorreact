import React from 'react'
import Sec1 from './banner'
import Sec2 from './homesec2'
import Sec3 from './homesec3'
import Sec4 from './homesec4'
import Sec5 from './homesec5'
import Navbar from '../Navsec/navbar'
import Footer from '../Navsec/footer'
// import Products from './Products'
// import Happyclient from './happyclients'
// import Fade from 'react-reveal/Fade';


const Index = () => {
    return ( <div>
        {/* <Fade bottom> */}
        <Navbar/>
        <Sec1/>
        <Sec2 /> 
        <Sec3 />
        <Sec4  />
        <Sec5/>
        <Footer/>
        {/* <Products /> */}
        {/* <Happyclient /> */}
        {/* </Fade> */}
    </div>
    )
}

export default Index
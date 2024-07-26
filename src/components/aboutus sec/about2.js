import React from 'react'
import Image1 from '../Images/aboutusimg/abb.jpg'

const About2 = () => {
  return (
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-28 lg:px-16 lg:py-10">
    <div className="grid gap-10 lg:grid-cols-2">
    <div className="lg:pr-8">
    <h1 className="sm:text-3xl text-start  text-2xl font-medium title-font mb-6 text-[#060A4C] " style={{ fontFamily: 'Poppins', fontWeight: '400' }}> Quality Assurance</h1>        
    <p className="mb-6 text-gray-900 text-start" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>
    Quality is the first Choice of business. Quantity products are key to business property and safety. We attach great importance to quality and safety. We provide world class quality
    products on time to our prestigious customers.
    Safety: We follow “Safety First” approach As a responsible organization, we constantly enhance protection levels while educating the public on safety
    Proper Installation: Jhansi elevators employe only licensed mechanics, We adhere to commercial elevator safety codes for all installations
    Built-In Safety: UL fire rated sliding doors, Solid fully automatic/ manual elevator doors.
    Modernization: These services ensure upgraded performance and appearance of an elevator, The elevators fulfill the buildings’ traffic patterns, and protect the value of the property 
    </p>
    <hr className="mb-5 border-gray-300" />   
    </div>
    <div>
    <img src={Image1} alt="feature image" className='py-5' />
    </div>
    
    </div>       
    </div>
 
  )
}

export default About2
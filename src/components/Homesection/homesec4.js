import React from 'react'
import Image1 from '../Images/models/homeysmart.jpg'
import Image2 from '../Images/models/homeyplus.jpg'

import Image3 from '../Images/models/electra.webp'
import Image4 from '../Images/models/suraksha.jpg'
import { Link } from 'react-router-dom'

const section4 = () => {

 
  return (
    
    // <div style={{ backgroundImage: `url(${Backgroundimage1})`, backgroundRepeat: "no-repeat"}}>
    <div>
     <section class="text-gray-600 body-font px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-">
  <div class="container px-5 md:py-12 mx-auto" bis_skin_checked="1">
    <div class="flex flex-wrap w-full  mb-10" bis_skin_checked="1">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0" bis_skin_checked="1">
      <h1 className="sm:text-3xl text-start text-2xl font-medium title-font md:mb-12 mb-2 text-[#060A4C] underline">Our Featured Categories</h1>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-[#00235A]"> We have been providing good service to customers in other businesses for almost years and have earned their appreciation.And we have gained and are gaining experience in the field of elevators.</p>
    </div>
    <div class="flex flex-wrap -m-4" bis_skin_checked="1">
     



   
      <div class="xl:w-1/4 md:w-1/2 p-4" bis_skin_checked="1">
        <div class="bg-gray-100 duration-150 hover:-translate-y-2 text-[#00235A] hover:text-white hover:bg-[#060A4C] p-6 rounded-lg" bis_skin_checked="1">
          <Link to='/product'>
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={Image1} alt="content"/>
          
          <h2 class="text-lg = font-medium title-font mb-4">Homey smart</h2>
          <p class="leading-relaxed text-base">This model is suitable for home elevator. It comes with gear less technology.</p>
        <br/>
        </Link>
        </div>
      </div>









      <div class="xl:w-1/4 md:w-1/2 p-4" bis_skin_checked="1">
        <div class="bg-gray-100 duration-150 hover:-translate-y-2 text-[#00235A] hover:text-white hover:bg-[#060A4C] p-6 rounded-lg" bis_skin_checked="1">
          <Link to='/product2'>
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={Image2} alt="content"/>
          
          <h2 class="text-lg = font-medium title-font mb-4">Homey plus</h2>
          <p class="leading-relaxed text-base">This model is suitable for home elevator comes with gear and gear less technology. </p>
        <br/>
        </Link>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4" bis_skin_checked="1">
        <div class="bg-gray-100 duration-150 hover:-translate-y-2 text-[#00235A] hover:text-white hover:bg-[#060A4C] p-6 rounded-lg" bis_skin_checked="1">
          <Link to='/product3'>
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={Image3} alt="content"/>
          
          <h2 class="text-lg  font-medium title-font mb-4">Electra</h2>
          <p class="leading-relaxed text-base">These are the main means of transportation elevators installed in appraments, offices, hospitals, hotels. </p>
          </Link>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4" bis_skin_checked="1">
        <div class="bg-gray-100 duration-150 hover:-translate-y-2 text-[#00235A] hover:text-white hover:bg-[#060A4C] p-6 rounded-lg" bis_skin_checked="1">
         <Link to='/product6'>
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={Image4} alt="content"/>
          
          <h2 class="text-lg font-medium title-font mb-4">Suraksha</h2>
          <p class="leading-relaxed text-base">These models are used in hospitals, nursing homes and polyclinic as they carry stretcher.</p>
          </Link>
       
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default section4
import React from 'react'

import about from '../../Images/models/homeyplus.jpg'


const Banner = () => {
    return ( 
        <div class="container px-5 py-24 mx-auto" bis_skin_checked="1">
    <div class="lg:w-4/5 mx-auto flex flex-wrap" bis_skin_checked="1">
      <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0" bis_skin_checked="1">
        
        <h1 class=" text-3xl text-[#060A4C] text-start title-font font-medium mb-4">2. Homey plus </h1>
       
        <p class="leading-relaxed text-justify mb-4">this model is suitable for home elevator comes with gear and gear less technology.
Transporting heavy objects between floors, including groceries, laundry, luggage or packages. Providing a smooth and comfortable ride . this is a high speed model running on 3 phase power.
</p>
       
      
      
      </div>
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-96 h-full object-cover object-center rounded" src={about}/>
    </div>
  
  

        
        </div>











       
       





        
    )
}

export default Banner
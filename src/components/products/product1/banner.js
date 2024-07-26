import React from 'react'

import about from '../../Images/models/homeysmart.jpg'


const Banner = () => {
    return ( 
    <div class="container px-5 py-24 mx-auto" bis_skin_checked="1">
    <div class="lg:w-4/5 mx-auto flex flex-wrap" bis_skin_checked="1">
    <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0" bis_skin_checked="1">        
    <h1 class="text-[#060A4C] text-3xl text-start title-font font-medium mb-4">1. Homey smart</h1>
    <p class="leading-relaxed text-justify mb-4">this model is suitable for home elevator. It comes with gear less technology eliminating the risk of falls on the steps, particularly among children and the elderly. this model is a low speed  single phase running  energy saver.</p>     
    </div>
    <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-96 h-full object-cover object-center rounded" src={about}/>
    </div>
    </div>    
    )
    }

export default Banner
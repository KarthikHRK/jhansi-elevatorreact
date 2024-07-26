import React from 'react'
import about from '../../Images/models/virat.webp'


const Banner = () => {
    return ( 
    <div class="container px-5 py-24 mx-auto" bis_skin_checked="1">
    <div class="lg:w-4/5 mx-auto flex flex-wrap" bis_skin_checked="1">
    <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0" bis_skin_checked="1">     
    <h1 class="text-[#060A4C] text-start text-3xl title-font font-medium mb-4">7. Virat xtra large        </h1>    
    <p class="leading-relaxed text-justify mb-4">This model suitable for industries. <br/>
     Goods lifts reduce the risks of injury caused by manual lifting, and they offer low power consumption which is a highly cost-effective solution. 
    </p>   
    </div>
    <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-96 h-full object-cover object-center rounded" src={about}/>
    </div>    
    </div>       
    )
}

export default Banner
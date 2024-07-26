import React from 'react'
import slider1 from '../../images/demo/maxresdefault.jpg'

const Faq = () => {
  return (
    <section class="px-0 py-12 mx-auto max-w-7xl sm:px-4">
  <div class="grid items-center grid-cols-1 gap-10 px-4 py-6 overflow-hidden text-gray-900 bg-blue-100 border-pink-100 rounded-none card card-body sm:rounded-lg md:px-10 md:grid-cols-5 lg:gap-0">
    <div class="col-span-1 md:col-span-3">
      <h2 class="mb-3 font-serif text-2xl font-normal leading-tight lg:text-3xl">Sleep peacefully knowing that your website is performing at it’s best.</h2>
      <p class="mb-6 text-sm font-semibold lg:text-base">We deliver a guaranteed number of high-quality new leads every month. Combined with the sales tools to convert them into paying clients.</p>
      <a href="#" class="w-full text-white shadow btn btn-white btn-lg sm:w-auto">Get In touch Now</a>
    </div>
    <div class="col-span-1 md:col-span-2">
      <img src={slider1} class="w-full ml-0 select-none lg:ml-48" alt="Mac App" />
    </div>
  </div>
</section>

  )
}

export default Faq
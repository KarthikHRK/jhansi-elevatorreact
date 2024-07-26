import React from 'react';
import Image from '../Images/aboutusimg/vission.jpg';
import about from '../Images/aboutusimg/about.jpg';

const Aboutthree = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden sm:ml-2">
      <div className="sm:px-2 md:py-8 py-4 mx-auto" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 md:mx-0 mx-3">
            <h2 className="text-sm  title-font text-gray-700 tracking-widest text-start">8+ YEARS OF EXPERIENCE</h2>
            <h1 className="sm:text-3xl text-start text-2xl font-medium title-font mb-3 text-[#060A4C]">Who we are</h1>
            <p className="leading-relaxed text-justify mb-4">Jhansi is a leading growing company in Karnataka.</p>
            <p className="leading-relaxed text-justify mb-4">
              We have been providing good service to customers in other businesses for almost years and have earned their appreciation. And we have gained and are gaining experience in the field of elevators.
            </p>
            <p className="leading-relaxed text-justify mb-4">
              Jhansi has expert engineers & technicians to serve its customers 24/7. Jhansi incorporates new technologies and safety and is successful in saving power.
            </p>
            <p className="leading-relaxed text-justify mb-4">
              Jhansi aims at creating employment at tier 3 cities, thereby contributing to building the nation. Jhansi is an Indian company making a small contribution to India's prosperity by using Indian products. Let us contribute to India's prosperity by using Indian products.
              <br />
              * We provide elevator solutions for residential, commercial establishments, hospitals, apartments, factories & industries,
            </p>
          </div>
          <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-60 object-cover object-center rounded" src={about} />
        </div>

        <div className="grid gap-8 row-gap-5 lg:grid-cols-3 md:mt-20 mt-6 items-center justify-center md:mx-20">
          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-[#29456A] group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-[#29456A] group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-[#29456A] group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-[#29456A] group-hover:scale-y-100" />
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex ustify-start gap-2 mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-gray-50 lg:mb-0">
                  <svg className="w-8 h-8 text-[#29456A]" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
                  </svg>
                </div>
                <h6 className="font-semibold text-[#29456A] md:mt-0 mt-3 md:text-[20px] text-[16px] leading-5" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>Our vision and mission</h6>
              </div>
              <p className="mb-2 text-start text-sm text-gray-900" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>
                Our vision is to make Jhansi Elevator a name for quality and safety in India.
                Listen to the needs of our customers, offer more options than expected and provide excellent service using high-quality products.
              </p>
            </div>
          </div>

          <img src={Image} alt="feature image" className="py-5 h-60 w-full hover:scale-105 hover:shadow-xl" />

            <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-[#29456A] group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-[#29456A] group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-[#29456A] group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-[#29456A] group-hover:scale-y-100" />
            <div className="relative p-5 bg-white rounded-sm">
            <div className="flex justify-start gap-2 mb-2  lg:items-center lg:flex-row">
            <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-gray-50 lg:mb-0">
            <svg className="w-8 h-8 text-[#29456A]" stroke="currentColor" viewBox="0 0 52 52">
            <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
            </svg>
            </div>
            <h6 className="font-medium leading-5 md:mt-0 mt-3 md:text-[20px] text-[16px] text-[#29456A]" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>Our value</h6>
            </div>
            <p className="mb-2 text-sm text-start text-gray-900" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>
                * Providing high-quality products and services.<br />
                * Doing business honestly and fairly.<br />
                * Creating a safe and healthy work environment.<br />
                * Continuously training our employees and improving teamwork.<br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutthree;
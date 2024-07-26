import React from 'react'
import { FaMobileAlt } from 'react-icons/fa';
import about from '../Images/homeimages/about3.jpeg'


const homesec2 = () => {
    return (
        <div className="bg-[rgb(249,251,253)]">
        <div className="w-full max-w-screen-xl mx-auto">
        <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
        <h1 className="sm:text-3xl text-start text-2xl font-medium title-font md:mb-8 mb-4 text-[#060A4C] underline">About Us</h1>
              
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
        <img
                  alt="ecommerce"
                  className="lg:w-1/2 w-full lg:h-auto h-auto object-cover object-center rounded mb-8 lg:mb-0"
                  src={about}
                />
                
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <div className="flex items-start justify-start md:flex-row border-b-4 border-[#860509] mb-8">
                    <div className="flex  justify-between  mx-auto my-auto  md:mb-0">
                      <h2 className="text-7xl font-bold text-[#00235A]">8+</h2>
                    </div>
                    <div className="mx-auto my-auto pr-4">
                      <h2 className="mb-1 font-sans text-xl font-bold tracking-tight text-[#950C09] sm:text-xl sm:leading-none">
                        YEARS OF
                      </h2>
                      <p className="text-3xl text-[#00235A] md:text-5lg">
                        EXPERIENCE
                      </p>
                    </div>
                  </div>
                  
                  <p className="md:text-xl text-[16px] text-start text-[#00235A]">
                    Jhansi Elevator always meets world class quality and safety. Jhansi is a leading growing company in Karnataka. We have been providing good service to customers in other businesses for almost years and have earned their appreciation. And we have gained and are gaining experience in the field of elevators.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
    

export default homesec2
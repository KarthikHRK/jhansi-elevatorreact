import React from 'react';
import bannerImage from '../Images/saftyimages/safty.jpg';
import safetyIcon from '../Images/saftyimages/s1.png'; // Replace with actual image paths
import servicesIcon from '../Images/saftyimages/s2.png';

const SafetyAndServices = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      {/* Banner */}
      <div className="relative w-full h-64">
        <img
          src={bannerImage}
          alt="Banner"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl text-white font-bold" style={{ fontFamily: 'Poppins', fontWeight: '700' }}>
            Safety & Services
          </h1>
        </div>
      </div>

      {/* Paragraph */}
      <div className="container mx-auto py-8 px-4">
        <p className="text-lg leading-relaxed  text-gray-700 text-center" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>
          At Jhansi Elevators, we prioritize safety and excellence in service. Our team of dedicated professionals works around the clock to ensure that all our installations and maintenance services adhere to the highest standards of safety and reliability. We are committed to providing our customers with the best possible elevator solutions, ensuring their satisfaction and safety at all times.
        </p>
      </div>

      <h1 className="sm:text-3xl text-center md:text-2xl text-xl font-medium title-font mb-8 text-[#060A4C]">.....Inspiring Purposeful Excellence.....</h1>

      {/* Cards */}
      <div className="container mx-auto grid gap-8 row-gap-5 lg:grid-cols-2 items-center justify-center ">
        {/* Safety Card */}
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-[#29456A] group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-[#29456A] group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-[#29456A] group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-2 w-1 h-full duration-300 origin-top transform scale-y-0 bg-[#29456A] group-hover:scale-y-100" />
          <div className="relative p-5 bg-white rounded-sm">
            <div className="flex justify-start gap-4 mb-2 lg:items-center lg:flex-row">
              <div className="flex items-center justify-center w-16 h-16 mb-4  rounded-full bg-gray-50 lg:mb-0">
                <img src={safetyIcon} alt="Safety Icon" className="w-8 h-8" />
              </div>
              <h6 className="font-semibold text-[#29456A] md:pt-0 pt-6 text-[18px]  md:text-[16px]  leading-5" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>Safety First</h6>
            </div>
            <p className="mb-2 text-start text-[16px]  md:text-[14px] text-gray-900" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>
              Safety is our top priority. We adhere to strict safety protocols and conduct regular inspections to ensure the utmost safety for our customers.
            </p>
          </div>
        </div>

        {/* Services Card */}
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-[#29456A] group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-[#29456A] group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-[#29456A] group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-[#29456A] group-hover:scale-y-100" />
          <div className="relative p-5 bg-white rounded-sm">
            <div className="flex justify-start gap-4 mb-2 lg:items-center lg:flex-row">
              <div className="flex items-center justify-center w-16 h-16 mb-4 mr-2 rounded-full bg-gray-50 lg:mb-0">
                <img src={servicesIcon} alt="Services Icon" className="w-8 h-8" />
              </div>
              <h6 className="font-semibold md:pt-0 pt-6 text-[18px] md:text-[16px] text-[#29456A] leading-5" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>Excellent Services</h6>
            </div>
            <p className="mb-2 text-start text-[16px]  md:text-[14px] text-gray-900 " style={{ fontFamily: 'Poppins', fontWeight: '400' }}>
              We provide top-notch services, from installation to maintenance, ensuring that our customers receive the best support and expertise.
            </p>
          </div>
        </div>

      </div>

        {/* Note */}
        <div className="container mx-auto py-8 px-4 mt-8 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4" style={{ fontFamily: 'Poppins', fontWeight: '600' }}>Important Note</h2>
        <p className="text-[16px] text-start  md:text-[16px] leading-relaxed text-gray-700 mb-2" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>
          Any physical damages, accidental damages, or tampering by unauthorized persons are not covered by any of the above packages. For any assistance, please contact our customer care so that our representative can assist you. Contact – +91-8762037457
        </p>
        <p className="text-[16px] text-start md:text-[16px] leading-relaxed text-gray-700" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>
          Annual Maintenance Contract will be taken up on receipt of the signed agreement copy along with relevant payment and upon clearing of all pending dues pertaining to the supply, installation, testing, and commissioning of the said elevator (if any).
        </p>
      </div>
    </section>
  );
}

export default SafetyAndServices;

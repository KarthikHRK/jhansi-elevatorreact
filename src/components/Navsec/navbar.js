import React, { useState, useEffect, useRef } from 'react';
import logo from '../Images/navimg/logo.png';
import EnquiryForm from './enquiryform';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white text-[#060A4C] text-lg font-medium p-2 shadow-md sticky top-0 z-50" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>
    <div className="flex justify-between items-center">
    <Link to='/'><img src={logo} className="h-14 hidden sm:block" alt="Logo" /></Link>
    <ul className={`sm:flex space-x-4 items-center ${isOpen ? 'block' : 'hidden'}`}>
    <li className="relative group">
    <Link to="/" className="block p-2 hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-0.5 hover:after:bg-[#1a5a9a] hover:after:mt-1">Home</Link>
    </li>
    <li className="relative group">
    <Link to='/about' className="block p-2 hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-0.5 hover:after:bg-[#1a5a9a] hover:after:mt-1">About Us</Link>
    </li>
   
    <li className="relative group" ref={dropdownRef}>
    <button className=" block p-2 hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-0.5 hover:after:bg-[#1a5a9a] hover:after:mt-1" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
    <span className='flex gap-1' ><span>Products </span><RiArrowDropDownLine className='text-[26px] mt-[0.5]' /></span>
    </button>
    {isDropdownOpen && (
    <ul className="absolute left-0 mt-1 bg-white text-[#060A4C] w-44 text-start space-y-2 z-10 p-2 rounded-md shadow-lg" >
    <li><Link to='/ProductHomeySmart'>Homey Smart</Link></li>
                <li><Link to='/ProductHomeyplus'>Homey Plus</Link></li>
                <li><Link to='/ProductElectra'>Electra</Link></li>
                <li><Link to='/ProductElectraexpress'>Electra Express</Link></li>
                <li><Link to='/ProductAchyuta'>Achyuta</Link></li>
                <li><Link to='/ProductSuraksha'>Suraksha</Link></li>
                <li><Link to='/ProductViratextralarge'>Virat xtra large</Link></li>
              </ul>
            )}
          </li>
          <li className="relative group">
          <Link to="/Projects" className="block hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-0.5 hover:after:bg-[#1a5a9a] hover:after:mt-1">Projects</Link>
    </li>
          <li className="relative group">
          <Link to="/Safty&services" className="block hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-0.5 hover:after:bg-[#1a5a9a] hover:after:mt-1">Safety & Services</Link>
          </li>
          
          <li className="relative group">
            <FontAwesomeIcon icon={faEnvelope} className="block p-2" />
            <span className="absolute left-0 mt-2 hidden group-hover:block bg-gray-600 text-white p-2 rounded-md z-10">
            info@jhansielevator.com
            </span>
          </li>
          <li className="relative group">
            <FontAwesomeIcon icon={faPhone} className="block p-2" />
            <span className="absolute left-0 mt-2 hidden group-hover:block bg-gray-600 text-white p-2 rounded-md z-10 w-44">
              +918762037457
            </span>
          </li>
          <li>
            <button
              onClick={openMenu}
              className="inline-flex items-center justify-center md:h-8 h-8 md:px-3 px-2  tracking-wide text-white transition duration-200 rounded shadow-md bg-[#060A4C] hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              aria-label="Enquire Now"
              title="Enquire Now"
            >
              Enquire Now
            </button>
            {isMenuOpen && <EnquiryForm closeModal={closeMenu} />}
          </li>
        </ul>
      </div>

      {/* Mobile View */}
      <div className="sm:hidden flex justify-between items-center" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="btn btn-ghost btn-circle text-2xl">
          ☰
        </button>
        <Link to="/"><img src={logo} className="h-14" alt="Logo" /></Link>
      </div>
      {isMobileMenuOpen && (
      <ul className="sm:hidden p-4 text-[19px] ml-3 shadow bg-white rounded-box w-52 text-start absolute top-full left-0" ref={mobileMenuRef} style={{ fontFamily: 'Poppins', fontWeight: '400' }}>
      <li className='pb-2'><Link to='/' onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
      <li className='pb-2'><Link to='/about'  onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
      <li className="relative group" ref={dropdownRef}>
      <button className="block pb-2  hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-0.5 hover:after:bg-[#1a5a9a] hover:after:mt-1" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
      <span className='flex gap-1' ><span>Products </span><RiArrowDropDownLine className='text-[26px] mt-[0.5]' /></span>
      </button>
      {isDropdownOpen && (
      <ul className="ml-1 mt-1 bg-white text-[#060A4C] w-full text-start space-y-2 z-10 p-2 rounded-md shadow-lg">
      <li><Link to='/ProductHomeySmart' onClick={() => setIsMobileMenuOpen(false)}>Homey Smart</Link></li>
      <li><Link to='/ProductHomeyplus' onClick={() => setIsMobileMenuOpen(false)}>Homey Plus</Link></li>
      <li><Link to='/ProductElectra' onClick={() => setIsMobileMenuOpen(false)}>Electra</Link></li>
      <li><Link to='/ProductElectraexpress' onClick={() => setIsMobileMenuOpen(false)}>Electra Express</Link></li>
      <li><Link to='/ProductAchyuta' onClick={() => setIsMobileMenuOpen(false)}>Achyuta</Link></li>
      <li><Link to='/ProductSuraksha' onClick={() => setIsMobileMenuOpen(false)}>Suraksha</Link></li>
      <li><Link to='/ProductViratextralarge' onClick={() => setIsMobileMenuOpen(false)}>Virat xtra large</Link></li>
      </ul>
      )}
        </li>
          <li className="relative group">
          <Link to="/Projects" className="block hover:after:content-[''] hover:after:block hover:after:w-full pb-2 hover:after:h-0.5 hover:after:bg-[#1a5a9a] hover:after:mt-1">Projects</Link>
          </li>
          <li className="relative group">
            <Link to="/Safty&services" className="block pb-4 hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-0.5 hover:after:bg-[#1a5a9a] hover:after:mt-1">Safety & Services</Link>
          </li>
          <li>
            <button
              onClick={openMenu}
              className="inline-flex items-center justify-center md:h-8 h-8 md:px-3 px-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#060A4C] hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              aria-label="Enquire Now"
              title="Enquire Now"
            >
              Enquire Now
            </button>
            {isMenuOpen && <EnquiryForm closeModal={closeMenu} />}
          </li>
       
       
       
        </ul>
      )}
    </nav>
  );
}

export default Navbar;

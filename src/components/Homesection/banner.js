import React, { useState, useEffect } from 'react';
import Ban1 from '../Images/homeimages/about.jpeg';
import Ban2 from '../Images/homeimages/safty.jpg';
import Ban4 from '../Images/homeimages/4.jpg';
import Ban5 from '../Images/projects/p2.jpeg';

const Banner = () => {
  const images = [ Ban1, Ban2, Ban4, Ban5];

  const textContent = [
    {
      title: 'Excellence in Elevation',
      description: 'Providing top-notch elevator solutions with safety and quality at the forefront.',
    },
    {
      title: 'Elevating Standards',
      description: 'Prioritizing your safety and convenience with state-of-the-art elevators.',
    },
    {
      title: 'Your Trusted Elevator Partner',
      description: 'Providing reliable and tailored elevator solutions for all your needs.',
    },
    {
      title: 'Innovation Meets Reliability',
      description: 'Leading with advanced systems and expert technicians for a smooth ride.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative md:h-[700px] h-[400px] w-full overflow-hidden" onClick={handleClick}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins', fontWeight: '700' }}>
              {textContent[index].title}
            </h1>
            <p className="text-white text-sm md:text-lg max-w-2xl" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>
              {textContent[index].description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;

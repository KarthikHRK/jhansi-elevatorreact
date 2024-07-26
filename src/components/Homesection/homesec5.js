import React, { useEffect, useRef, useState } from "react";
import './index.css'
import Client2 from '../Images/Clients/2.png';
import Client3 from '../Images/Clients/3.png';
import Client4 from '../Images/Clients/4.png';
import Client5 from '../Images/Clients/5.png';
import Client6 from '../Images/Clients/6.png';
import Client7 from '../Images/Clients/7.png';
import Client8 from '../Images/Clients/8.png';
import Client9 from '../Images/Clients/9.png';
import Client10 from '../Images/Clients/10.png';

const clients = [
  { src: Client2, alt: "Client 2" },
  { src: Client3, alt: "Client 3" },
  { src: Client4, alt: "Client 4" },
  { src: Client5, alt: "Client 5" },
  { src: Client6, alt: "Client 6" },
  { src: Client7, alt: "Client 7" },
  { src: Client8, alt: "Client 8" },
  { src: Client9, alt: "Client 9" },
  { src: Client10, alt: "Client 10" }
];

const ResponsiveCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % clients.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const track = carouselRef.current;
    const itemWidth = track.children[0].offsetWidth;
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }, [currentIndex]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + clients.length) % clients.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
  };

  
  return (
    <div className="px-4 md:mb-20 mb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
      <h1 className="sm:text-3xl text-start text-2xl font-bold title-font md:mb-12 py-8 md:py-0 text-[#060A4C] underline">Our Clients</h1>
        
      </div>
      <div className="carousel-container">
        <button className="carousel-button prev" onClick={handlePrevClick}>‹</button>
        <button className="carousel-button next" onClick={handleNextClick}>›</button>
        <div className="carousel-track" ref={carouselRef}>
          {clients.map((client, index) => (
            <div className="carousel-item" key={index}>
              <div className="client-logo-container">
                <img src={client.src} alt={client.alt} className="client-logo" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveCarousel;

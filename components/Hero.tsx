import React from 'react';
import Image from 'next/image';
import SearchBar from './SearchBar';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Find your dream car</h1>
        <SearchBar />
      </div>
      <div className="hero-image">
        <Image 
          src="/images/porsche-911.png" 
          alt="Porsche 911" 
          width={600} 
          height={300} 
          layout="responsive" 
          priority
        />
      </div>
      <div className="location-info">
        <div className="map-pointer">
          <Image src="/images/map-pointer.svg" alt="Map pointer" width={20} height={20} />
        </div>
        <div className="location-text">
          <strong>View on the map</strong>
          <p>1201, 5th Cross Rd, HSR Layout 2nd Block, Bengaluru, Karnataka 560061</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
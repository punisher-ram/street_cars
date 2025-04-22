import React from 'react';
import Image from 'next/image';
import SearchFilter from './SearchFilter';

const Hero = () => {
  return (
    <section style={{
      position: 'relative',
      borderRadius: '20px',
      overflow: 'hidden',
      backgroundColor: '#1E1E1E',
      padding: '40px',
      marginBottom: '40px',
      backgroundImage: 'linear-gradient(to right, rgba(30,30,30,0.8), rgba(30,30,30,0.6))',
      height: '500px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
      }}>
        <Image 
          src="/images/hero-car.png" 
          alt="Luxury Car" 
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      
      <h1 style={{
        fontSize: '48px',
        marginBottom: '40px',
        fontWeight: 'bold'
      }}>
        Find your dream car
      </h1>
      
      <SearchFilter />
      
      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '15px',
        borderRadius: '10px',
        color: '#000',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        maxWidth: '250px'
      }}>
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        <div>
          <div style={{ fontWeight: 'bold' }}>View on the map</div>
          <div style={{ fontSize: '14px' }}>123, JP Nagar Main Road, 4th Block, Bengaluru, Karnataka 560041</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
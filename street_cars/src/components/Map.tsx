import React from 'react';
import Image from 'next/image';

const Map = () => {
  return (
    <div style={{
      position: 'relative',
      height: '400px',
      borderRadius: '15px',
      overflow: 'hidden'
    }}>
      <Image
        src="/images/map.png"
        alt="Location Map"
        layout="fill"
        objectFit="cover"
      />
      
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        backgroundColor: 'white',
        padding: '15px',
        borderRadius: '8px',
        color: '#000',
        maxWidth: '250px'
      }}>
        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Streetcars Premium</div>
        <div style={{ fontSize: '14px' }}>
          123, JP Nagar Main Road, 4th Block, Bengaluru, Karnataka 560041
        </div>
        <a 
          href="https://maps.google.com" 
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#E72A2A',
            fontSize: '14px',
            textDecoration: 'underline',
            display: 'block',
            marginTop: '5px'
          }}
        >
          View larger map
        </a>
      </div>
      
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#E72A2A',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
      }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      </div>
    </div>
  );
};

export default Map;
import React from 'react';
import Image from 'next/image';

const WhatWeOffer = () => {
  return (
    <section style={{
      marginBottom: '60px'
    }}>
      <h2 style={{
        fontSize: '32px',
        marginBottom: '30px',
        fontWeight: 'bold'
      }}>
        What we offer
      </h2>
      
      <div style={{
        display: 'flex',
        gap: '20px',
        marginBottom: '30px'
      }}>
        <div style={{ flex: 2 }}>
          <p style={{
            marginBottom: '20px',
            lineHeight: '1.6'
          }}>
            Discover the best pre-owned cars that are reliable and affordable. Find your perfect ride for the road ahead!
          </p>
          
          <div style={{ marginTop: '20px' }}>
            <div style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '15px',
              alignItems: 'flex-start'
            }}>
              <div style={{ fontWeight: 'bold', color: '#E72A2A' }}>01</div>
              <div>Thoroughly inspected and serviced for a hassle-free experience.</div>
            </div>
            
            <div style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '15px',
              alignItems: 'flex-start'
            }}>
              <div style={{ fontWeight: 'bold', color: '#E72A2A' }}>02</div>
              <div>Transparent pricing with verified ownership and documentation.</div>
            </div>
            
            <div style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '15px',
              alignItems: 'flex-start'
            }}>
              <div style={{ fontWeight: 'bold', color: '#E72A2A' }}>03</div>
              <div>A variety of models, fuel types, and budget friendly options</div>
            </div>
          </div>
        </div>
        
        <div style={{
          flex: 1,
          backgroundColor: '#3B5D9A',
          borderRadius: '15px',
          overflow: 'hidden',
          position: 'relative',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          minHeight: '250px'
        }}>
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '70%',
            zIndex: 0
          }}>
            <Image
              src="/images/luxury-car.png"
              alt="Luxury Car"
              layout="fill"
              objectFit="cover"
              objectPosition="center bottom"
            />
          </div>
          <div style={{
            position: 'relative',
            zIndex: 1
          }}>
            <h3 style={{ marginBottom: '5px', fontWeight: 'bold' }}>Luxury Cars</h3>
            <p style={{ fontSize: '14px' }}>Explore the world of luxury cars at our showroom</p>
          </div>
        </div>
        
        <div style={{
          flex: 1,
          backgroundColor: '#E72A2A',
          borderRadius: '15px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '250px'
        }}>
          <h3 style={{ 
            fontSize: '32px', 
            fontWeight: 'bold',
            marginBottom: '10px'
          }}>100+</h3>
          <p>Cars of different brands</p>
          <div style={{
            marginTop: '20px',
            width: '100%',
            position: 'relative',
            height: '120px'
          }}>
            <Image
              src="/images/sedan.png"
              alt="Sedan"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
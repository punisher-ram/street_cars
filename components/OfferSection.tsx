import React from 'react';
import Image from 'next/image';

const OfferSection: React.FC = () => {
  return (
    <section className="offer-section">
      <h2 className="section-title">What we offer</h2>
      
      <div className="offers-container">
        <div className="offers-text">
          <p className="offer-description">
            Discover the best pre-owned cars that are reliable and affordable. Find your perfect ride for the road ahead!
          </p>
          
          <div className="offer-points">
            <div className="offer-point">
              <span className="point-number">01</span>
              <p>Thoroughly inspected and serviced for a hassle-free experience.</p>
            </div>
            
            <div className="offer-point">
              <span className="point-number">02</span>
              <p>Transparent pricing with verified ownership and documentation.</p>
            </div>
            
            <div className="offer-point">
              <span className="point-number">03</span>
              <p>A variety of models, fuel types, and budget-friendly options</p>
            </div>
          </div>
        </div>
        
        <div className="offers-cards">
          <div className="luxury-card">
            <h3>Luxury Cars</h3>
            <p>Explore the world of luxury cars in our showroom</p>
            <Image 
              src="/images/luxury-car.png" 
              alt="Luxury Car" 
              width={300} 
              height={200} 
            />
          </div>
          
          <div className="listings-card">
            <h3>100+</h3>
            <p>Lots of different brands</p>
            <Image 
              src="/images/mercedes.png"
              alt="Mercedes" 
              width={300} 
              height={200} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
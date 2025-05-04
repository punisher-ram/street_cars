import React from 'react';
import Image from 'next/image';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'Find Your Perfect Car',
      description: 'Choose from a variety of well-maintained pre-owned cars with fair pricing and trusted deals.'
    },
    {
      title: 'Sell with Ease',
      description: 'Get the best price for your car with a quick evaluation and smooth payment processing.'
    },
    {
      title: 'Exchange Effortlessly',
      description: 'Exchange your old car for a better one with a hassle-free process and great valuation.'
    },
    {
      title: 'Easy Financing',
      description: 'Enjoy flexible loan options with competitive interest rates for a stress-free purchase.'
    }
  ];

  return (
    <section className="services-section">
      <h2 className="section-title">Services we offer</h2>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
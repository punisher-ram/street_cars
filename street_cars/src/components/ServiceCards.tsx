import React from 'react';

const ServiceCards = () => {
  const services = [
    {
      title: 'Find Your Perfect Car',
      description: 'Choose from a variety of well-maintained pre-owned cars with fair pricing and trusted details.'
    },
    {
      title: 'Sell with Ease',
      description: 'Get the best price for your car with a quick evaluation and smooth payment handling.'
    },
    {
      title: 'Exchange Effortlessly',
      description: 'Exchange your old car for a better one with a hassle-free process and great deals.'
    },
    {
      title: 'Easy Financing',
      description: 'Enjoy flexible loan options with competitive interest rates for a stress-free experience.'
    }
  ];

  return (
    <section style={{
      backgroundColor: '#1E1E1E',
      padding: '40px',
      borderRadius: '20px',
      marginBottom: '60px'
    }}>
      <h2 style={{
        fontSize: '32px',
        marginBottom: '30px',
        fontWeight: 'bold',
        textAlign: 'center'
      }}>
        Services we offer
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px'
      }}>
        {services.map((service, index) => (
          <div 
            key={index}
            style={{
              backgroundColor: '#2D2D2D',
              borderRadius: '15px',
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}
          >
            <h3 style={{ 
              fontSize: '20px', 
              fontWeight: 'bold' 
            }}>
              {service.title}
            </h3>
            <p style={{ 
              color: '#ccc',
              lineHeight: '1.5'
            }}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
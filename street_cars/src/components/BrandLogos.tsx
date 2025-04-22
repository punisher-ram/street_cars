import React from 'react';
import Image from 'next/image';

const BrandLogos = () => {
  const brands = [
    { name: 'Kia', logo: '/images/brands/kia.png' },
    { name: 'Porsche', logo: '/images/brands/porsche.png' },
    { name: 'Mercedes', logo: '/images/brands/mercedes.png' },
    { name: 'Audi', logo: '/images/brands/audi.png' },
    { name: 'Ferrari', logo: '/images/brands/ferrari.png' },
    { name: 'Volkswagen', logo: '/images/brands/vw.png' },
    { name: 'BMW', logo: '/images/brands/bmw.png' },
  ];

  return (
    <section style={{
      backgroundColor: '#000',
      padding: '20px',
      marginBottom: '40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      overflowX: 'auto',
      gap: '40px'
    }}>
      {brands.map((brand) => (
        <div key={brand.name} style={{ display: 'flex', justifyContent: 'center' }}>
          <Image
            src={brand.logo}
            alt={brand.name}
            width={60}
            height={60}
          />
        </div>
      ))}
    </section>
  );
};

export default BrandLogos;
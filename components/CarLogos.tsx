import React from 'react';
import Image from 'next/image';

const CarLogos: React.FC = () => {
  const brands = [
    { name: 'Kia', logo: '/images/kia-logo.png' },
    { name: 'Porsche', logo: '/images/porsche-logo.png' },
    { name: 'Mercedes', logo: '/images/mercedes-logo.png' },
    { name: 'Audi', logo: '/images/audi-logo.png' },
    { name: 'Ferrari', logo: '/images/ferrari-logo.png' },
    { name: 'Volkswagen', logo: '/images/vw-logo.png' },
    { name: 'BMW', logo: '/images/bmw-logo.png' }
  ];

  return (
    <div className="car-logos">
      {brands.map((brand, index) => (
        <div key={index} className="brand-logo">
          <Image src={brand.logo} alt={brand.name} width={80} height={80} />
        </div>
      ))}
    </div>
  );
};

export default CarLogos;
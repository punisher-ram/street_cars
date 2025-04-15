import React from 'react';
import Image from 'next/image';
import styles from '../styles/BrandLogos.module.css';

const BrandLogos = () => {
  const brands = [
    { name: 'Kia', logo: '/images/logos/kia-logo.png' },
    { name: 'Porsche', logo: '/images/logos/porsche-logo.png' },
    { name: 'Mercedes', logo: '/images/logos/mercedes-logo.png' },
    { name: 'Audi', logo: '/images/logos/audi-logo.png' },
    { name: 'Ferrari', logo: '/images/logos/ferrari-logo.png' },
    { name: 'Volkswagen', logo: '/images/logos/vw-logo.png' },
    { name: 'BMW', logo: '/images/logos/bmw-logo.png' },
  ];

  return (
    <div className={styles.brandLogosSection}>
      <div className={styles.logosContainer}>
        {brands.map((brand) => (
          <div key={brand.name} className={styles.logoItem}>
            <Image
              src={brand.logo}
              alt={`${brand.name} logo`}
              width={80}
              height={80}
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandLogos;
import React from 'react';
import Image from 'next/image';
import styles from '../styles/CarListing.module.css';

const CarListing = () => {
  const cars = [
    {
      id: 1,
      name: 'Porsche Panamera Turbo',
      price: '$120,000',
      mileage: '10,000 km',
      transmission: 'Automatic',
      image: '/images/cars/porsche-panamera.jpg'
    },
    {
      id: 2,
      name: 'Lamborghini Huracan',
      price: '$250,000',
      mileage: '5,000 km',
      transmission: 'Automatic',
      image: '/images/cars/lamborghini-huracan.jpg'
    },
    {
      id: 3,
      name: 'Ford Mustang',
      price: '$65,000',
      mileage: '8,000 km',
      transmission: 'Manual',
      image: '/images/cars/ford-mustang.jpg'
    },
    {
      id: 4,
      name: 'Audi R8',
      price: '$180,000',
      mileage: '20,000 km',
      transmission: 'Automatic',
      image: '/images/cars/audi-r8.jpg'
    },
  ];

  return (
    <section className={styles.listingSection}>
      <h2 className={styles.sectionTitle}>Find Your Perfect Ride</h2>
      
      <div className={styles.filterButtons}>
        <button className={`${styles.filterButton} ${styles.active}`}>Hot Picks</button>
        <button className={styles.filterButton}>New Arrivals</button>
        <button className={styles.filterButton}>Budget Friendly</button>
        <span className={styles.viewAll}>View all &rarr;</span>
      </div>
      
      <div className={styles.carGrid}>
        {cars.map((car) => (
          <div key={car.id} className={styles.carCard}>
            <div className={styles.carImage}>
              <Image
                src={car.image}
                alt={car.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.carDetails}>
              <h3>{car.name}</h3>
              <div className={styles.carSpecs}>
                <div className={styles.spec}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M4 9h16M4 14h16M4 19h16"/>
                  </svg>
                  <span>Price</span>
                </div>
                <div className={styles.spec}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                  <span>{car.mileage}</span>
                </div>
                <div className={styles.spec}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <line x1="12" y1="8" x2="12" y2="16"/>
                    <line x1="8" y1="12" x2="16" y2="12"/>
                  </svg>
                  <span>{car.transmission}</span>
                </div>
              </div>
              <button className={styles.viewMore}>View More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarListing;
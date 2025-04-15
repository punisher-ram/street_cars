import React from 'react';
import Image from 'next/image';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Find your dream car</h1>
        
        <div className={styles.searchFilters}>
          <div className={styles.filterGroup}>
            <div className={styles.filter}>
              <span>Brand</span>
              <select>
                <option value="">All Brands</option>
                <option value="porsche">Porsche</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
                <option value="bmw">BMW</option>
              </select>
            </div>
            
            <div className={styles.filter}>
              <span>Fuel Type</span>
              <select>
                <option value="">All Types</option>
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
                <option value="electric">Electric</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
            
            <div className={styles.filter}>
              <span>Transmission Type</span>
              <select>
                <option value="">All Types</option>
                <option value="automatic">Automatic</option>
                <option value="manual">Manual</option>
              </select>
            </div>
            
            <div className={styles.filter}>
              <span>Price</span>
              <select>
                <option value="">Any Price</option>
                <option value="0-50000">$0 - $50,000</option>
                <option value="50000-100000">$50,000 - $100,000</option>
                <option value="100000-200000">$100,000 - $200,000</option>
                <option value="200000+">$200,000+</option>
              </select>
            </div>
            
            <button className={styles.searchButton}>Search</button>
          </div>
        </div>
      </div>
      
      <div className={styles.carImageContainer}>
        <Image
          src="/images/cars/porsche-911-silver.jpg"
          alt="Porsche 911"
          layout="fill"
          objectFit="contain"
          className={styles.carImage}
        />
      </div>
      
      <div className={styles.locationBox}>
        <div className={styles.viewOnMap}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>View on the map</span>
        </div>
        <p className={styles.address}>
          1201, 27 Fort St, Kala Ghoda, Fort, Mumbai, Maharashtra 400001
        </p>
      </div>
    </section>
  );
};

export default Hero;
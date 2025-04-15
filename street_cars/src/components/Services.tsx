import React from 'react';
import styles from '../styles/Services.module.css';

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>Services we offer</h2>
      
      <div className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <h3>Find Your Perfect Car</h3>
          <p>Choose from a variety of well-maintained pre-owned cars with fair pricing and trusted deals.</p>
        </div>
        
        <div className={styles.serviceCard}>
          <h3>Sell with Ease</h3>
          <p>Get the best price for your car with a quick evaluation and smooth payment processing.</p>
        </div>
        
        <div className={styles.serviceCard}>
          <h3>Exchange Effortlessly</h3>
          <p>Exchange your old car for a better one with a hassle-free process and great deals.</p>
        </div>
        
        <div className={styles.serviceCard}>
          <h3>Easy Financing</h3>
          <p>Enjoy flexible loan options with competitive interest rates for a stress-free purchase.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
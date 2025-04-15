import React from 'react';
import Image from 'next/image';
import styles from '../styles/WhatWeOffer.module.css';

const WhatWeOffer = () => {
  return (
    <section className={styles.offerSection}>
      <h2 className={styles.sectionTitle}>What we offer</h2>
      
      <div className={styles.offerContent}>
        <div className={styles.offerText}>
          <p>
            Discover the best pre-owned cars that are reliable and affordable. Find your perfect ride for the road ahead!
          </p>
          
          <div className={styles.offerPoints}>
            <div className={styles.offerPoint}>
              <span className={styles.pointNumber}>01</span>
              <p>Thoroughly inspected and serviced for a hassle-free experience.</p>
            </div>
            
            <div className={styles.offerPoint}>
              <span className={styles.pointNumber}>02</span>
              <p>Transparent pricing with verified ownership and documentation.</p>
            </div>
            
            <div className={styles.offerPoint}>
              <span className={styles.pointNumber}>03</span>
              <p>A variety of models, fuel types, and budget-friendly options</p>
            </div>
          </div>
        </div>
        
        <div className={styles.offerCards}>
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src="/images/backgrounds/luxury-car.jpg"
                alt="Luxury Cars"
                width={300}
                height={200}
                objectFit="cover"
              />
            </div>
            <div className={styles.cardContent}>
              <h3>Luxury Cars</h3>
              <p>Explore the world of luxury cars in our showroom</p>
            </div>
          </div>
          
          <div className={`${styles.card} ${styles.redCard}`}>
            <div className={styles.redCardContent}>
              <h3>100+</h3>
              <p>Cars of different brands</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
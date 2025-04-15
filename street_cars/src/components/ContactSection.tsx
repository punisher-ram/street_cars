import React from 'react';
import Image from 'next/image';
import styles from '../styles/ContactSection.module.css';

const ContactSection = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContent}>
        <div className={styles.contactText}>
          <h2 className={styles.sectionTitle}>Start your journey with us today</h2>
          
          <p>
            Visit our showroom to experience our wide selection of vehicles and top-notch customer service. Prefer to shop online? Browse our inventory, schedule a test drive, or get pre-approved for financing right from the comfort of your home.
          </p>
          
          <div className={styles.openHours}>
            <h3>Open hours</h3>
            <div className={styles.hours}>
              <span>WEEKDAYS:</span>
              <span>9:00 AM - 8:00 PM</span>
            </div>
            <div className={styles.hours}>
              <span>WEEKENDS:</span>
              <span>10:00 AM - 6:30 PM</span>
            </div>
          </div>
          
          <button className={styles.contactButton}>Contact us</button>
        </div>
        
        <div className={styles.mapContainer}>
          <div className={styles.map}>
            <Image
              src="/images/backgrounds/map.jpg"
              alt="Location Map"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.mapInfo}>
            <h4>Streetcars Premium</h4>
            <div className={styles.mapDetails}>
              <p>
                1201, 27 Fort St, Kala Ghoda, Fort, Mumbai, Maharashtra 400001
              </p>
              <div className={styles.mapLinks}>
                <a href="javascript:void(0)">View larger map</a>
                <a href="javascript:void(0)">Directions</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
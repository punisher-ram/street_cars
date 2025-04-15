import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <div className={styles.logoContainer}>
            <Image 
              src="/images/logos/streetcars-logo.png" 
              alt="StreetCars Premium" 
              width={180} 
              height={40} 
              layout="fixed"
            />
          </div>
        </Link>
      </div>
      
      <div className={styles.navLinks}>
        <Link href="/" className={styles.active}>Home</Link>
        <Link href="/about">About us</Link>
        <Link href="/inventory">Inventory</Link>
        <Link href="/services">Services</Link>
      </div>
      
      <div className={styles.addListing}>
        <button className={styles.button}>Add listing</button>
      </div>
    </nav>
  );
};

export default Navbar;
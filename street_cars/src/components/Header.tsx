import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      backgroundColor: 'rgba(30, 30, 30, 0.7)',
      borderRadius: '20px',
      margin: '10px 0'
    }}>
      <div className="logo">
        <Link href="/">
          <Image 
            src="/images/logo.png" 
            alt="STREETCARS Premium" 
            width={150} 
            height={40} 
          />
        </Link>
      </div>
      
      <nav style={{
        display: 'flex',
        gap: '20px'
      }}>
        <Link href="/" style={{ color: '#fff', fontWeight: 500 }}>Home</Link>
        <Link href="/about" style={{ color: '#fff', fontWeight: 500 }}>About us</Link>
        <Link href="/inventory" style={{ color: '#fff', fontWeight: 500 }}>Inventory</Link>
        <Link href="/services" style={{ color: '#fff', fontWeight: 500 }}>Services</Link>
      </nav>
      
      <Link href="/add-listing">
        <button style={{
          backgroundColor: '#fff',
          color: '#000',
          padding: '8px 16px',
          borderRadius: '8px',
          border: 'none',
          fontWeight: 500
        }}>
          Add listing
        </button>
      </Link>
    </header>
  );
};

export default Header;
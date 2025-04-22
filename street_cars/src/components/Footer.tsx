import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer style={{
      padding: '40px 0 20px'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px'
      }}>
        <div>
          <h3 style={{ 
            fontSize: '18px', 
            marginBottom: '10px',
            color: '#fff'
          }}>
            Open hours
          </h3>
          <div style={{ color: '#999', marginBottom: '5px', fontSize: '14px' }}>
            WEEKDAYS
          </div>
          <div style={{ marginBottom: '10px', fontSize: '15px' }}>
            9:00 AM - 9:00 PM
          </div>
          <div style={{ color: '#999', marginBottom: '5px', fontSize: '14px' }}>
            WEEKENDS
          </div>
          <div style={{ fontSize: '15px' }}>
            10:00 AM - 6:00 PM
          </div>
        </div>
        
        <div style={{
          display: 'flex',
          gap: '15px'
        }}>
          <a href="tel:+919900112345" style={{
            backgroundColor: '#E72A2A',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{
            backgroundColor: '#222',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{
            backgroundColor: '#222',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
        </div>
      </div>
      
      <div style={{
        borderTop: '1px solid #333',
        paddingTop: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '14px',
        color: '#999'
      }}>
        <div>
          Copyright © All Rights Reserved
        </div>
        <div>
          <Image 
            src="/images/logo.png" 
            alt="STREETCARS Premium" 
            width={120} 
            height={30} 
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import BrandLogos from '../components/BrandLogos';
import WhatWeOffer from '../components/WhatWeOffer';
import CarListingSection from '../components/CarListingSection';
import ServiceCards from '../components/ServiceCards';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    }}>
      <Header />
      <Hero />
      <BrandLogos />
      <WhatWeOffer />
      <CarListingSection />
      <ServiceCards />
      
      <section style={{
        marginBottom: '60px',
        display: 'flex',
        gap: '30px',
        alignItems: 'center'
      }}>
        <div style={{ flex: 1 }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            marginBottom: '20px'
          }}>
            Start your journey with us today
          </h2>
          
          <p style={{
            lineHeight: '1.6',
            marginBottom: '30px'
          }}>
            Visit our showroom to experience our wide selection of vehicles and top-notch customer service. Prefer to shop online? Browse our inventory, schedule a test drive, or get pre-approved for financing right from the comfort of your home.
          </p>
          
          <Link href="/contact">
            <button style={{
              backgroundColor: '#E72A2A',
              color: '#fff',
              padding: '12px 20px',
              borderRadius: '8px',
              border: 'none',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              Contact us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </Link>
        </div>
        
        <div style={{ flex: 1 }}>
          <Map />
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
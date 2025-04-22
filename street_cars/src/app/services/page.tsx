import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  return (
    <main style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    }}>
      <Header />
      
      <section style={{
        marginTop: '40px',
        marginBottom: '60px'
      }}>
        <h1 style={{
          fontSize: '48px',
          marginBottom: '30px',
          fontWeight: 'bold'
        }}>
          Our Services
        </h1>
        
        <div style={{
          marginBottom: '60px'
        }}>
          <div style={{
            position: 'relative',
            height: '400px',
            borderRadius: '15px',
            overflow: 'hidden',
            marginBottom: '40px'
          }}>
            <Image
              src="/images/services-hero.jpg"
              alt="Our Services"
              layout="fill"
              objectFit="cover"
            />
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '40px'
            }}>
              <h2 style={{
                fontSize: '36px',
                fontWeight: 'bold',
                marginBottom: '20px'
              }}>
                Exceptional Automotive Services
              </h2>
              <p
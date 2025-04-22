import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function About() {
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
          About us
        </h1>
        
        <div style={{
          display: 'flex',
          gap: '40px',
          marginBottom: '60px'
        }}>
          <div style={{ flex: 1 }}>
            <h2 style={{
              fontSize: '28px',
              marginBottom: '20px',
              fontWeight: 'bold'
            }}>
              Our Story
            </h2>
            
            <p style={{
              lineHeight: '1.8',
              marginBottom: '20px'
            }}>
              STREETCARS Premium was founded in 2015 with a simple mission: to provide high-quality pre-owned luxury and performance vehicles at transparent prices. What started as a small dealership with just 10 cars has grown into one of the region's most trusted automotive retailers.
            </p>
            
            <p style={{
              lineHeight: '1.8',
              marginBottom: '20px'
            }}>
              Our founder, an automotive enthusiast with over 15 years of experience in the industry, noticed a gap in the market for dealerships that truly put customers first. That customer-centric approach remains at the heart of everything we do today.
            </p>
          </div>
          
          <div style={{ 
            flex: 1,
            position: 'relative',
            height: '400px',
            borderRadius: '15px',
            overflow: 'hidden'
          }}>
            <Image
              src="/images/about-showroom.jpg"
              alt="Our Showroom"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        
        <div style={{
          backgroundColor: '#1A1A1A',
          padding: '40px',
          borderRadius: '15px',
          marginBottom: '60px'
        }}>
          <h2 style={{
            fontSize: '28px',
            marginBottom: '30px',
            fontWeight: 'bold',
            textAlign: 'center'
          }}>
            Why Choose Us
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                backgroundColor: '#E72A2A',
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 style={{ 
                fontSize: '20px', 
                marginBottom: '10px',
                fontWeight: 'bold'
              }}>
                Quality Assurance
              </h3>
              <p style={{ color: '#ccc' }}>
                Every vehicle undergoes a comprehensive 150-point inspection before being listed.
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                backgroundColor: '#E72A2A',
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <h3 style={{ 
                fontSize: '20px', 
                marginBottom: '10px',
                fontWeight: 'bold'
              }}>
                Extended Warranty
              </h3>
              <p style={{ color: '#ccc' }}>
                We offer optional extended warranties for added peace of mind.
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                backgroundColor: '#E72A2A',
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 style={{ 
                fontSize: '20px', 
                marginBottom: '10px',
                fontWeight: 'bold'
              }}>
                Expert Team
              </h3>
              <p style={{ color: '#ccc' }}>
                Our team of automotive experts provides knowledgeable, non-pressured guidance.
              </p>
            </div>
          </div>
        </div>
        
        <div style={{
          marginBottom: '60px'
        }}>
          <h2 style={{
            fontSize: '28px',
            marginBottom: '30px',
            fontWeight: 'bold'
          }}>
            Our Team
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px'
          }}>
            {[1, 2, 3, 4].map((member) => (
              <div 
                key={member}
                style={{
                  backgroundColor: '#1A1A1A',
                  borderRadius: '15px',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'relative',
                  height: '220px'
                }}>
                  <Image
                    src={`/images/team/member${member}.jpg`}
                    alt={`Team Member ${member}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                
                <div style={{ padding: '20px' }}>
                  <h3 style={{ 
                    fontSize: '18px', 
                    marginBottom: '5px',
                    fontWeight: 'bold'
                  }}>
                    Team Member {member}
                  </h3>
                  <p style={{ 
                    color: '#E72A2A',
                    fontSize: '14px',
                    marginBottom: '10px'
                  }}>
                    {['CEO', 'Sales Manager', 'Service Advisor', 'Finance Manager'][member-1]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
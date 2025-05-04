import React from 'react';
import Image from 'next/image';

const ContactSection: React.FC = () => {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2 className="section-title">Start your journey with us today</h2>
        
        <p className="contact-description">
          Visit our showroom to experience our wide selection of vehicles and top-notch customer service. Prefer to shop online? Browse our inventory, schedule a test drive, or get pre-approved for financing right from the comfort of your home.
        </p>
        
        <div className="open-hours">
          <h3>Open hours</h3>
          <div className="hours">
            <div className="weekday">
              <p>WEEKDAYS</p>
              <p>9:00 AM - 9:00 PM</p>
            </div>
            <div className="weekend">
              <p>WEEKENDS</p>
              <p>10:00 AM - 6:30 PM</p>
            </div>
          </div>
        </div>
        
        <div className="contact-buttons">
          <button className="contact-btn">Contact us</button>
          <div className="social-icons">
            <a href="#" className="social-icon phone">
              <Image src="/images/phone-icon.svg" alt="Phone" width={24} height={24} />
              <span>+91 99001 12345</span>
            </a>
            <a href="#" className="social-icon instagram">
              <Image src="/images/instagram-icon.svg" alt="Instagram" width={24} height={24} />
            </a>
            <a href="#" className="social-icon facebook">
              <Image src="/images/facebook-icon.svg" alt="Facebook" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="map-container">
        <Image 
          src="/images/location-map.png" 
          alt="Location Map" 
          width={500} 
          height={400} 
          layout="responsive"
        />
      </div>
    </section>
  );
};

export default ContactSection;
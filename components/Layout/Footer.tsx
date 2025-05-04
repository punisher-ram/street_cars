import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="contact-us">
        <h2>Contact us</h2>
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Name" className="form-input" />
            <input type="text" placeholder="Phone number" className="form-input" />
            <textarea placeholder="Message" className="form-textarea"></textarea>
            <button type="submit" className="send-btn">Send</button>
          </form>
        </div>
      </div>
      <div className="footer-logo">
        <Image src="/images/streetcars-logo.png" alt="StreetCars Premium" width={120} height={30} />
        <p>Book your test drive now!</p>
        <p>+91 99001 12345</p>
        <p>1201, 5th Cross Rd, HSR Layout 2nd Block, Bengaluru, Karnataka 560061</p>
        <p>Copyright © All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
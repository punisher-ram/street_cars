import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link href="/">
          <Image src="/images/streetcars-logo.png" alt="StreetCars Premium" width={150} height={40} />
        </Link>
      </div>
      <nav className="navigation">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About us</Link></li>
          <li><Link href="/inventory">Inventory</Link></li>
          <li><Link href="/services">Services</Link></li>
        </ul>
      </nav>
      <div className="add-listing">
        <button className="add-listing-btn">Add listing</button>
      </div>
    </header>
  );
};

export default Header;
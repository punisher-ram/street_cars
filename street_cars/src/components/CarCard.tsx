import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CarCardProps {
  id: string;
  name: string;
  price: number;
  mileage: number;
  transmission: string;
  imageUrl: string;
}

const CarCard = ({ id, name, price, mileage, transmission, imageUrl }: CarCardProps) => {
  return (
    <div style={{
      backgroundColor: '#1A1A1A',
      borderRadius: '15px',
      overflow: 'hidden',
      width: '100%',
      maxWidth: '320px'
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '180px'
      }}>
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      
      <div style={{ padding: '15px' }}>
        <h3 style={{ 
          fontSize: '18px', 
          marginBottom: '10px',
          fontWeight: 'bold'
        }}>
          {name}
        </h3>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '15px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#999">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span style={{ color: '#999', fontSize: '14px' }}>Price</span>
          </div>
          
          <div style={{ fontWeight: 'bold' }}>
            ${price.toLocaleString()}
          </div>
        </div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '15px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#999">
              <path d="M19 4H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-2 16H7v-2h10v2zm0-4H7v-2h10v2zm0-4H7V8h10v4z"></path>
            </svg>
            <span style={{ color: '#999', fontSize: '14px' }}>Mileage</span>
          </div>
          
          <div style={{ fontWeight: 'bold' }}>
            {mileage.toLocaleString()} km
          </div>
        </div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '20px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#999">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            <span style={{ color: '#999', fontSize: '14px' }}>Transmission</span>
          </div>
          
          <div style={{ fontWeight: 'bold' }}>
            {transmission}
          </div>
        </div>
        
        <Link href={`/inventory/${id}`}>
          <button style={{
            backgroundColor: '#E72A2A',
            color: '#fff',
            width: '100%',
            padding: '10px',
            borderRadius: '8px',
            border: 'none',
            fontWeight: 'bold',
            textAlign: 'center'
          }}>
            Know More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
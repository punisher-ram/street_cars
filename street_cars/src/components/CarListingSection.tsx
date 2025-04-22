import React from 'react';
import CarCard from './CarCard';
import Link from 'next/link';

// Sample car data - this would come from Airtable in the real app
const sampleCars = [
  {
    id: '1',
    name: 'Porsche Panamera Turbo',
    price: 135000,
    mileage: 15000,
    transmission: 'Automatic',
    imageUrl: '/images/cars/porsche.jpg'
  },
  {
    id: '2',
    name: 'Lamborghini Huracan',
    price: 230000,
    mileage: 10000,
    transmission: 'Automatic',
    imageUrl: '/images/cars/lamborghini.jpg'
  },
  {
    id: '3',
    name: 'Ford Mustang',
    price: 75000,
    mileage: 25000,
    transmission: 'Manual',
    imageUrl: '/images/cars/mustang.jpg'
  },
  {
    id: '4',
    name: 'Audi R8',
    price: 180000,
    mileage: 20000,
    transmission: 'Automatic',
    imageUrl: '/images/cars/audi.jpg'
  }
];

const CarListingSection = () => {
  return (
    <section style={{
      marginBottom: '60px'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px'
      }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: 'bold'
        }}>
          Find Your Perfect Ride
        </h2>
        
        <Link href="/inventory">
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            backgroundColor: '#E72A2A',
            color: '#fff',
            padding: '8px 16px',
            borderRadius: '8px',
            border: 'none',
            fontWeight: 'bold'
          }}>
            View all
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </Link>
      </div>
      
      <div style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '30px',
        overflow: 'auto'
      }}>
        <button style={{
          padding: '8px 16px',
          borderRadius: '20px',
          backgroundColor: '#fff',
          color: '#000',
          border: 'none',
          fontSize: '14px',
          fontWeight: 'bold'
        }}>
          Hot Picks
        </button>
        
        <button style={{
          padding: '8px 16px',
          borderRadius: '20px',
          backgroundColor: 'transparent',
          color: '#fff',
          border: '1px solid #444',
          fontSize: '14px'
        }}>
          New Arrivals
        </button>
        
        <button style={{
          padding: '8px 16px',
          borderRadius: '20px',
          backgroundColor: 'transparent',
          color: '#fff',
          border: '1px solid #444',
          fontSize: '14px'
        }}>
          Budget Friendly
        </button>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '20px'
      }}>
        {sampleCars.map((car) => (
          <CarCard
            key={car.id}
            id={car.id}
            name={car.name}
            price={car.price}
            mileage={car.mileage}
            transmission={car.transmission}
            imageUrl={car.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default CarListingSection;
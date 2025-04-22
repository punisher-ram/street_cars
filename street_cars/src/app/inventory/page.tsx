import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchFilter from '../../components/SearchFilter';
import CarCard from '../../components/CarCard';

// This would come from Airtable in the real app
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
  },
  {
    id: '5',
    name: 'Mercedes-Benz S-Class',
    price: 95000,
    mileage: 18000,
    transmission: 'Automatic',
    imageUrl: '/images/cars/mercedes.jpg'
  },
  {
    id: '6',
    name: 'BMW M4 Competition',
    price: 85000,
    mileage: 22000,
    transmission: 'Automatic',
    imageUrl: '/images/cars/bmw.jpg'
  },
  {
    id: '7',
    name: 'Tesla Model S Plaid',
    price: 110000,
    mileage: 12000,
    transmission: 'Automatic',
    imageUrl: '/images/cars/tesla.jpg'
  },
  {
    id: '8',
    name: 'Ferrari 488 GTB',
    price: 275000,
    mileage: 8000,
    transmission: 'Automatic',
    imageUrl: '/images/cars/ferrari.jpg'
  }
];

export default function Inventory() {
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
          Our Inventory
        </h1>
        
        <div style={{
          backgroundColor: '#1A1A1A',
          padding: '30px',
          borderRadius: '15px',
          marginBottom: '40px'
        }}>
          <h2 style={{
            fontSize: '24px',
            marginBottom: '20px',
            fontWeight: 'bold'
          }}>
            Filter by
          </h2>
          
          <SearchFilter />
        </div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <div>
            Showing <span style={{ fontWeight: 'bold' }}>8</span> results
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span>Sort by:</span>
            <select style={{
              padding: '8px',
              backgroundColor: '#1A1A1A',
              border: '1px solid #333',
              color: '#fff',
              borderRadius: '5px'
            }}>
              <option>Price: High to Low</option>
              <option>Price: Low to High</option>
              <option>Newest First</option>
              <option>Oldest First</option>
            </select>
          </div>
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
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '40px'
        }}>
          <div style={{
            display: 'flex',
            gap: '10px'
          }}>
            <button style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#1A1A1A',
              border: 'none',
              borderRadius: '5px',
              color: '#fff'
            }}>
              &lt;
            </button>
            
            <button style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#E72A2A',
              border: 'none',
              borderRadius: '5px',
              color: '#fff',
              fontWeight: 'bold'
            }}>
              1
            </button>
            
            <button style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#1A1A1A',
              border: 'none',
              borderRadius: '5px',
              color: '#fff'
            }}>
              2
            </button>
            
            <button style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#1A1A1A',
              border: 'none',
              borderRadius: '5px',
              color: '#fff'
            }}>
              3
            </button>
            
            <button style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#1A1A1A',
              border: 'none',
              borderRadius: '5px',
              color: '#fff'
            }}>
              &gt;
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
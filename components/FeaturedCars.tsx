import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { fetchCars } from '../utils/airtable';
import { Car } from '../types';

const FeaturedCars: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('Hot Picks');
  
  useEffect(() => {
    const loadCars = async () => {
      try {
        const fetchedCars = await fetchCars();
        setCars(fetchedCars.slice(0, 4)); // Display only 4 featured cars
        setLoading(false);
      } catch (error) {
        console.error('Error loading cars:', error);
        setLoading(false);
      }
    };
    
    loadCars();
  }, []);
  
  const filters = ['Hot Picks', 'New Arrivals', 'Budget Friendly'];
  
  return (
    <section className="featured-cars">
      <h2 className="section-title">Find Your Perfect Ride</h2>
      
      <div className="filters">
        {filters.map((filter) => (
          <button 
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
        <Link href="/inventory">
          <a className="view-all">View All</a>
        </Link>
      </div>
      
      {loading ? (
        <div className="loading">Loading cars...</div>
      ) : (
        <div className="car-grid">
          {cars.map((car) => (
            <div key={car.id} className="car-card">
              <div className="car-image">
                <Image 
                  src={car.fields.images?.[0]?.url || '/images/car-placeholder.png'} 
                  alt={`${car.fields.make} ${car.fields.model}`} 
                  width={300} 
                  height={200} 
                  layout="responsive"
                />
              </div>
              
              <h3 className="car-title">{car.fields.make} {car.fields.model}</h3>
              
              <div className="car-details">
                <div className="detail">
                  <span className="detail-label">Price</span>
                  <span className="detail-value">₹{(car.fields.price / 100000).toFixed(2)} Lakh</span>
                </div>
                
                <div className="detail">
                  <span className="detail-label">Mileage</span>
                  <span className="detail-value">{car.fields.mileage} km</span>
                </div>
                
                <div className="detail">
                  <span className="detail-label">Transmission</span>
                  <span className="detail-value">{car.fields.transmission}</span>
                </div>
              </div>
              
              <Link href={`/inventory/${car.id}`}>
                <a className="view-more-btn">View More</a>
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedCars;
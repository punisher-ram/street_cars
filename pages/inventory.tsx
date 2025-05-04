import { useState, useEffect } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../components/Layout/Layout';
import { fetchFilteredCars } from '../utils/airtable';
import { Car } from '../types';
import styles from '../styles/Inventory.module.css';

interface InventoryProps {
  initialCars: Car[];
  filters: {
    brand: string;
    fuelType: string;
    transmission: string;
    price: string;
  };
}

const Inventory: NextPage<InventoryProps> = ({ initialCars, filters }) => {
  const router = useRouter();
  const [cars, setCars] = useState<Car[]>(initialCars);
  const [loading, setLoading] = useState(false);
  const [currentFilters, setCurrentFilters] = useState(filters);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCurrentFilters(prev => ({ ...prev, [name]: value }));
  };

  const applyFilters = () => {
    setLoading(true);
    
    // Create query string from filters
    const queryParams = new URLSearchParams();
    Object.entries(currentFilters).forEach(([key, value]) => {
      if (value) queryParams.append(key, value);
    });
    
    router.push(`/inventory?${queryParams.toString()}`);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Our Inventory | StreetCars Premium</title>
          <meta name="description" content="Browse our premium pre-owned cars inventory" />
        </Head>

        <div className={styles.hero}>
          <h1 className={styles.title}>Our Inventory</h1>
          <p className={styles.description}>
            Browse our selection of premium pre-owned vehicles
          </p>
        </div>

        <div className={styles.searchBar}>
          <div className={styles.filterGroup}>
            <label>Brand</label>
            <select 
              name="brand" 
              value={currentFilters.brand} 
              onChange={handleFilterChange}
            >
              <option value="">All Brands</option>
              <option value="Porsche">Porsche</option>
              <option value="Mercedes">Mercedes</option>
              <option value="BMW">BMW</option>
              <option value="Audi">Audi</option>
              <option value="Ferrari">Ferrari</option>
              <option value="Lamborghini">Lamborghini</option>
              <option value="Volkswagen">Volkswagen</option>
              <option value="Kia">Kia</option>
              <option value="Ford">Ford</option>
            </select>
          </div>
          
          <div className={styles.filterGroup}>
            <label>Fuel Type</label>
            <select 
              name="fuelType" 
              value={currentFilters.fuelType} 
              onChange={handleFilterChange}
            >
              <option value="">All Types</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
          
          <div className={styles.filterGroup}>
            <label>Transmission Type</label>
            <select 
              name="transmission" 
              value={currentFilters.transmission} 
              onChange={handleFilterChange}
            >
              <option value="">All Types</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
            </select>
          </div>
          
          <div className={styles.filterGroup}>
            <label>Price</label>
            <select 
              name="price" 
              value={currentFilters.price} 
              onChange={handleFilterChange}
            >
              <option value="">Any Price</option>
              <option value="5000000">Under ₹50 Lakh</option>
              <option value="10000000">Under ₹1 Crore</option>
              <option value="20000000">Under ₹2 Crore</option>
              <option value="50000000">Under ₹5 Crore</option>
            </select>
          </div>
          
          <button 
            className={styles.searchBtn} 
            onClick={applyFilters}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Apply Filters'}
          </button>
        </div>

        {loading ? (
          <div className={styles.loading}>Loading cars...</div>
        ) : cars.length === 0 ? (
          <div className={styles.noCars}>
            <p>No cars found matching your criteria. Please try different filters.</p>
          </div>
        ) : (
          <div className={styles.carGrid}>
            {cars.map((car) => (
              <div key={car.id} className={styles.carCard}>
                <div className={styles.carImage}>
                  <Image 
                    src={car.fields.images?.[0]?.url || '/images/car-placeholder.png'} 
                    alt={`${car.fields.make} ${car.fields.model}`} 
                    width={300} 
                    height={200} 
                    layout="responsive"
                  />
                </div>
                
                <h3 className={styles.carTitle}>{car.fields.make} {car.fields.model}</h3>
                
                <div className={styles.carDetails}>
                  <div className={styles.detail}>
                    <span className={styles.detailLabel}>Price</span>
                    <span className={styles.detailValue}>
                      ₹{(car.fields.price / 100000).toFixed(2)} Lakh
                    </span>
                  </div>
                  
                  <div className={styles.detail}>
                    <span className={styles.detailLabel}>Mileage</span>
                    <span className={styles.detailValue}>{car.fields.mileage} km</span>
                  </div>
                  
                  <div className={styles.detail}>
                    <span className={styles.detailLabel}>Transmission</span>
                    <span className={styles.detailValue}>{car.fields.transmission}</span>
                  </div>
                </div>
                
                <Link href={`/inventory/${car.id}`}>
                  <a className={styles.viewMoreBtn}>View More</a>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { brand, fuelType, transmission, price } = context.query;
  
  const filters = {
    brand: brand as string || '',
    fuelType: fuelType as string || '',
    transmission: transmission as string || '',
    price: price as string || ''
  };
  
  try {
    const cars = await fetchFilteredCars(filters);
    
    return {
      props: {
        initialCars: cars,
        filters
      }
    };
  } catch (error) {
    console.error('Error fetching cars:', error);
    return {
      props: {
        initialCars: [],
        filters
      }
    };
  }
};

export default Inventory;
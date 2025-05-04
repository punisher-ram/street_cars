import React, { useState } from 'react';
import { useRouter } from 'next/router';

const SearchBar: React.FC = () => {
  const router = useRouter();
  const [filters, setFilters] = useState({
    brand: '',
    fuelType: '',
    transmission: '',
    price: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create query string from filters
    const queryParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) queryParams.append(key, value);
    });
    
    router.push(`/inventory?${queryParams.toString()}`);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="filter-group">
        <label>Brand</label>
        <select name="brand" onChange={handleChange} value={filters.brand}>
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
      
      <div className="filter-group">
        <label>Fuel Type</label>
        <select name="fuelType" onChange={handleChange} value={filters.fuelType}>
          <option value="">All Types</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>
      
      <div className="filter-group">
        <label>Transmission Type</label>
        <select name="transmission" onChange={handleChange} value={filters.transmission}>
          <option value="">All Types</option>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>
      </div>
      
      <div className="filter-group">
        <label>Price</label>
        <select name="price" onChange={handleChange} value={filters.price}>
          <option value="">Any Price</option>
          <option value="5000000">Under ₹50 Lakh</option>
          <option value="10000000">Under ₹1 Crore</option>
          <option value="20000000">Under ₹2 Crore</option>
          <option value="50000000">Under ₹5 Crore</option>
        </select>
      </div>
      
      <button type="submit" className="search-btn">Search</button>
    </form>
  );
};

export default SearchBar;
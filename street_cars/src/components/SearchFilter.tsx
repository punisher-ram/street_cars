import React from 'react';

const SearchFilter = () => {
  return (
    <div style={{
      display: 'flex',
      gap: '15px',
      alignItems: 'center',
      marginBottom: '20px'
    }}>
      <div style={{
        position: 'relative',
        flex: 1
      }}>
        <select style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#fff',
          border: 'none',
          borderRadius: '8px',
          appearance: 'none',
          color: '#000',
          paddingRight: '30px'
        }}>
          <option value="">Brand</option>
          <option value="porsche">Porsche</option>
          <option value="bmw">BMW</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <div style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none'
        }}>▼</div>
      </div>
      
      <div style={{
        position: 'relative',
        flex: 1
      }}>
        <select style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#fff',
          border: 'none',
          borderRadius: '8px',
          appearance: 'none',
          color: '#000',
          paddingRight: '30px'
        }}>
          <option value="">Fuel Type</option>
          <option value="petrol">Petrol</option>
          <option value="diesel">Diesel</option>
          <option value="electric">Electric</option>
          <option value="hybrid">Hybrid</option>
        </select>
        <div style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none'
        }}>▼</div>
      </div>
      
      <div style={{
        position: 'relative',
        flex: 1
      }}>
        <select style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#fff',
          border: 'none',
          borderRadius: '8px',
          appearance: 'none',
          color: '#000',
          paddingRight: '30px'
        }}>
          <option value="">Transmission Type</option>
          <option value="automatic">Automatic</option>
          <option value="manual">Manual</option>
        </select>
        <div style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none'
        }}>▼</div>
      </div>
      
      <div style={{
        position: 'relative',
        flex: 1
      }}>
        <select style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#fff',
          border: 'none',
          borderRadius: '8px',
          appearance: 'none',
          color: '#000',
          paddingRight: '30px'
        }}>
          <option value="">Price</option>
          <option value="0-50000">$0 - $50,000</option>
          <option value="50000-100000">$50,000 - $100,000</option>
          <option value="100000-150000">$100,000 - $150,000</option>
          <option value="150000+">$150,000+</option>
        </select>
        <div style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none'
        }}>▼</div>
      </div>
      
      <button style={{
        backgroundColor: '#E72A2A',
        color: '#fff',
        padding: '12px 20px',
        borderRadius: '8px',
        border: 'none',
        fontWeight: 'bold'
      }}>
        Search
      </button>
    </div>
  );
};

export default SearchFilter;
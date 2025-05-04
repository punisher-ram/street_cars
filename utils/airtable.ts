import Airtable from 'airtable';
import { Car } from '../types';

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  'appEThjmzt3m5UFtd'
);

export const fetchCars = async (): Promise<Car[]> => {
  const records = await base('Cars').select().all();
  return records.map(record => ({
    id: record.id,
    fields: record.fields as Car['fields']
  }));
};

export const fetchCarById = async (id: string): Promise<Car | null> => {
  try {
    const record = await base('Cars').find(id);
    return {
      id: record.id,
      fields: record.fields as Car['fields']
    };
  } catch (error) {
    console.error('Error fetching car by ID:', error);
    return null;
  }
};

export const fetchFilteredCars = async (filters: any): Promise<Car[]> => {
  let filterFormula = '';
  
  if (filters.brand) {
    filterFormula += `AND({make} = '${filters.brand}')`;
  }
  
  if (filters.fuelType) {
    const fuelFilter = `AND({fuelType} = '${filters.fuelType}')`;
    filterFormula = filterFormula ? `AND(${filterFormula}, ${fuelFilter})` : fuelFilter;
  }
  
  if (filters.transmission) {
    const transFilter = `AND({transmission} = '${filters.transmission}')`;
    filterFormula = filterFormula ? `AND(${filterFormula}, ${transFilter})` : transFilter;
  }
  
  if (filters.price) {
    const priceFilter = `AND({price} <= ${filters.price})`;
    filterFormula = filterFormula ? `AND(${filterFormula}, ${priceFilter})` : priceFilter;
  }
  
  const records = await base('Cars').select({
    filterByFormula: filterFormula || 'NOT({id} = "")'
  }).all();
  
  return records.map(record => ({
    id: record.id,
    fields: record.fields as Car['fields']
  }));
};
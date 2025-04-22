import axios from 'axios';

// Airtable API info - make sure to create an .env.local file with these variables
const AIRTABLE_API_KEY = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = process.env.NEXT_PUBLIC_AIRTABLE_TABLE_NAME;

// Types for car data
export interface Car {
  id: string;
  fields: {
    Name: string;
    Brand: string;
    Model: string;
    Year: number;
    Price: number;
    Mileage: number;
    FuelType: string;
    Transmission: string;
    Images: Array<{ url: string }>;
    Description: string;
    Features: string[];
  };
}

// Function to get all cars
export async function getAllCars(): Promise<Car[]> {
  try {
    const response = await axios.get(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
      {
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        },
      }
    );
    return response.data.records;
  } catch (error) {
    console.error('Error fetching cars from Airtable:', error);
    return [];
  }
}

// Function to get a single car by ID
export async function getCarById(id: string): Promise<Car | null> {
  try {
    const response = await axios.get(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}/${id}`,
      {
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching car with ID ${id}:`, error);
    return null;
  }
}
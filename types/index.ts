export interface Car {
    id: string;
    fields: {
      make: string;
      model: string;
      year: number;
      price: number;
      fuelType: string;
      transmission: string;
      mileage: number;
      images: Array<{ url: string }>;
    }
  }
  
  export interface ServiceType {
    title: string;
    description: string;
    icon?: string;
  }
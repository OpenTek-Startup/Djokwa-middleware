import { ChangeEvent } from 'react';

export interface ClassInterface {
  image: string; // Start date of the academic year
  level: string; // End date of the academic year
  name?: string; // Optional name for the academic year (e.g., 2023-2024)*
  location: string; // physical location of the class
  teacher?: string; // Optional name the class of theacher
  cycle: string; // Primary, secondary, nusery, or etc
  phone?: string; // Optional name for the academic year (e.g., 2023-2024)
  email?: string; // Optional name for the
  section: string; // Anglosaxon, francophone, bilingual
}

export interface Class {
  classData: ClassInterface; //
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  Submit: () => void;
}

'use client';

import { useEffect, useState } from 'react';
import { Car } from '@/generated/prisma';
import FiltersCars from '../FiltersCars';
import ListCars from '../ListCars';
import { FiltersAndListCarsProps } from './FiltersAndListCars.types';

export default function FiltersAndListCars(props: FiltersAndListCarsProps) {
  const { cars } = props;
  const [filteredCars, setFilteredCars] = useState<Car[]>();
  const [filters, setFilters] = useState({
    type: '',
    transmission: '',
    engine: '',
    people: '',
  });

  useEffect(() => {
    let filtered = cars;
    if (filters.type) {
      filtered = filtered.filter(car =>
        car.type.toLowerCase().includes(filters.type.toLowerCase()),
      );
    }
    if (filters.transmission) {
      filtered = filtered.filter(car =>
        car.transmission
          .toLowerCase()
          .includes(filters.transmission.toLowerCase()),
      );
    }
    if (filters.engine) {
      filtered = filtered.filter(car =>
        car.engine.toLowerCase().includes(filters.engine.toLowerCase()),
      );
    }
    if (filters.people) {
      filtered = filtered.filter(car =>
        car.people.toLowerCase().includes(filters.people.toLowerCase()),
      );
    }
    setFilteredCars(filtered);
  }, [filters, cars]);

  const handleFilterChanges = (filterName: string, filterValue: string) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: filterValue,
    }));
  };
  const clearFilters = () => {
    setFilters({
      type: '',
      transmission: '',
      engine: '',
      people: '',
    });
  };
  return (
    <div>
      <FiltersCars
        setFilters={handleFilterChanges}
        filters={filters}
        clearFilters={clearFilters}
      />
      <ListCars cars={filteredCars} />
    </div>
  );
}

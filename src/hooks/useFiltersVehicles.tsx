import { useState, useEffect } from 'react';
import {Vehicle} from "../interfaces/Vehicle.ts";
import {Filters} from "../interfaces/Filters.ts";

const useFilteredVehicles = (vehicles: Vehicle[] = [], initialFilters: Filters = {}) => {
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>(vehicles);

  useEffect(() => {
    let result = vehicles;
    let updateAllowed = false

    if (vehicles.length>0) {
      updateAllowed = true
    }
    if (filters.marcas && filters.marcas.length>0) {
      updateAllowed = true
      if (!filters.marcas.includes("todos"))
        result = result.filter(vehicle => filters.marcas?.includes(vehicle.marca.toLowerCase() as string));
    }
    if (filters.cores && filters.cores.length>0){
      updateAllowed = true
      if (!filters.cores.includes("todos"))
        result = result.filter(vehicle => filters.cores?.includes(vehicle.cor.toLowerCase() as string));
    }
    if (updateAllowed){
      setFilteredVehicles(result)
    }
  }, [vehicles, filters]);

  return {
    filteredVehicles,
    setFilters
  };
};

export default useFilteredVehicles;

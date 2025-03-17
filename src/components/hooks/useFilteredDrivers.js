import { useMemo } from "react";

const useFilteredDrivers = (drivers, searchTerm) => {
  return useMemo(() => {
    const lowerSearch = searchTerm.toLowerCase();
    return drivers.filter((driver) => {
      const fullName = `${driver.firstName} ${driver.surname}`.toLowerCase();
      const vehicleReg = driver.vehicleRegistration?.toLowerCase() || "";
      return fullName.includes(lowerSearch) || vehicleReg.includes(lowerSearch);
    });
    
  }, [drivers, searchTerm]);
};

export default useFilteredDrivers;
  
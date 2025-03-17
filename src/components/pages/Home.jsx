import React, { useMemo, useState, useCallback } from "react";
import driverData from "../data/drivers.json";
import DriverRow from "../driverRow";
import "../styles/driverWireframe.css";

const daysOfWeek = [
  { date: "2021-02-01", label: "Mon" },
  { date: "2021-02-02", label: "Tue" },
  { date: "2021-02-03", label: "Wed" },
  { date: "2021-02-04", label: "Thu" },
  { date: "2021-02-05", label: "Fri" },
  { date: "2021-02-06", label: "Sat" },
  { date: "2021-02-07", label: "Sun" },
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const driversArray = useMemo(() => driverData.data || [], []);

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
  
  const filteredDrivers = useFilteredDrivers(driversArray, searchTerm);
  const handleSearchChange = useCallback((e) => {
    const newSearchTerm = e.target.value;
    if (newSearchTerm !== searchTerm) {
      setSearchTerm(newSearchTerm);
    }
  }, [searchTerm]);

  return (
    <div className="driver-wireframe">
      <h1>Driver Activity (1/2/2021 – 7/2/2021)</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name or registration"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <table className="driver-table">
        <thead>
          <tr>
            <th>Driver Name</th>
            <th>Vehicle Reg</th>
            <th>Drive (min)</th>
            <th>Rest (min)</th>
            <th>Work (min)</th>
            <th>Available (min)</th>
            <th>Total (min)</th>
            {daysOfWeek.map((day) => (
              <th key={day.date}>{day.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredDrivers.map((driver, index) => (
            <DriverRow key={driver.id} driver={driver} daysOfWeek={daysOfWeek} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
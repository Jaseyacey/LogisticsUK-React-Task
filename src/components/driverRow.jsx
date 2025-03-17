import React from "react";
import useDriverActivity from "./hooks/useDriverActivity";

const DriverRow = ({ driver, daysOfWeek }) => {
  const { totals, totalMinutes, hasActivityOnDay } = useDriverActivity(
    driver,
    "2021-02-01",
    "2021-02-07"
  );

  return (
    <tr>
      <td>
        {driver.firstName} {driver.surname}
      </td>
      <td>{driver.vehicleRegistration}</td>
      <td>{totals.drive}</td>
      <td>{totals.rest}</td>
      <td>{totals.work}</td>
      <td>{totals.available}</td>
      <td>{totalMinutes}</td>
      {daysOfWeek.map((day) => (
        <td
          key={day.date}
          style={{
            backgroundColor: hasActivityOnDay(day.date)
              ? "green"
              : "transparent",
          }}
        />
      ))}
    </tr>
  );
};

export default DriverRow;

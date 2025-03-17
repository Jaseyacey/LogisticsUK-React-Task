import { useMemo } from "react";

const useDriverActivity = (driver, startDate, endDate) => {
  const totals = useMemo(() => {
    const activityTotal = { drive: 0, rest: 0, work: 0, available: 0 };
    driver.traces?.forEach((trace) => {
      if (trace.date >= startDate && trace.date <= endDate) {
        trace.activity.forEach((act) => {
          if (activityTotal[act.type] !== undefined) {
            activityTotal[act.type] += act.duration;
          }
        });
      }
    });
    return activityTotal;
  }, [driver, startDate, endDate]);

  const totalMinutes = useMemo(() => {
    return totals.drive + totals.rest + totals.work + totals.available;
  }, [totals]);

  const hasActivityOnDay = (date) => {
    const matchingTrace = driver.traces.find((t) => t.date === date);
    return matchingTrace && matchingTrace.activity.length > 0;
  };

  return { totals, totalMinutes, hasActivityOnDay };
};

export default useDriverActivity;

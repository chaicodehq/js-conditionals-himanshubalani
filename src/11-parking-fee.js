/**
 * 🅿️ City Central Parking
 *
 * City Central Parking garage is the busiest in downtown. They need an
 * automated system to calculate parking fees. Different vehicle types
 * have different rates, and there's a daily maximum so customers
 * aren't overcharged.
 *
 * Rates (first hour / each additional hour):
 *   - "car":        $5 first hour, then $3/hour
 *   - "motorcycle": $3 first hour, then $2/hour
 *   - "bus":        $10 first hour, then $7/hour
 *
 * Daily Maximum (fee can never exceed this):
 *   - "car":        $30
 *   - "motorcycle": $18
 *   - "bus":        $60
 *
 * Rules:
 *   - Partial hours are rounded UP (e.g., 1.5 hours → 2 hours)
 *   - The fee should never exceed the daily maximum
 *   - If hours is 0 or negative, return -1
 *   - If vehicleType is not "car", "motorcycle", or "bus", return -1
 *
 * Examples:
 *   - car, 1 hour     → $5
 *   - car, 3 hours    → $5 + $3 + $3 = $11
 *   - car, 0.5 hours  → rounds up to 1 hour → $5
 *   - car, 24 hours   → $5 + 23×$3 = $74 → capped at $30
 *
 * @param {number} hours - Number of hours parked
 * @param {string} vehicleType - "car", "motorcycle", or "bus"
 * @returns {number} Parking fee or -1 for invalid input
 */
export function calculateParkingFee(hours, vehicleType) {

  const validTypesMap = new Set(['car', 'motorcycle', 'bus']);
  let isVeh = validTypesMap.has(vehicleType);
  const dailyMaxMap = new Set([30,18, 60]);
  const baseFeeMap = new Set([5, 3, 10]);
  const addHourMap = new Set([3, 2, 7]);

  let vehArr = [...validTypesMap];
  let basefee = [...baseFeeMap];
  let addHour = [...addHourMap];
  let dailyMax = [...dailyMaxMap];

  if (hours <= 0 ) return -1;
  if (!isVeh) return -1;

  hours = Math.ceil(hours);
  
  let fee;

  if (vehicleType === "car"){
    fee = basefee[vehArr.indexOf("car")] + ((hours-1) * addHour[vehArr.indexOf("car")]);

    if (fee > dailyMax[vehArr.indexOf("car")]) {
      fee = dailyMax[vehArr.indexOf("car")];
    }
    return fee;
  } else 
  if (vehicleType === "motorcycle"){
    fee = basefee[vehArr.indexOf("motorcycle")] + ((hours-1) * addHour[vehArr.indexOf("motorcycle")]);

    if (fee > dailyMax[vehArr.indexOf("motorcycle")]) {
      fee = dailyMax[vehArr.indexOf("motorcycle")];
    }
    return fee;
  } else

  if (vehicleType === "bus"){
    fee = basefee[vehArr.indexOf("bus")] + ((hours-1) * addHour[vehArr.indexOf("bus")]);

    if (fee > dailyMax[vehArr.indexOf("bus")]) {
      fee = dailyMax[vehArr.indexOf("bus")];
    }
    return fee;
  }

}
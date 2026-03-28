/**
* ☕ Bean & Brew Cafe
*
* Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
* need a system that calculates the total price of a coffee order.
* Here's their menu:
*
* Base price by size:
*   - "small"  → $3.00
*   - "medium" → $4.00
*   - "large"  → $5.00
*
* Add-on for coffee type:
*   - "regular"    → +$0.00
*   - "latte"      → +$1.00
*   - "cappuccino" → +$1.50
*   - "mocha"      → +$2.00
*
* Optional extras:
*   - whippedCream → +$0.50 (if true)
*   - extraShot    → +$0.75 (if true)
*
* Rules:
*   - If size is not "small", "medium", or "large", return -1
*   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
*   - Return the total price rounded to 2 decimal places
*
* @param {string} size - "small", "medium", or "large"
* @param {string} type - "regular", "latte", "cappuccino", or "mocha"
* @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
* @returns {number} Total price or -1 for invalid input
*/
export function calculateCoffeePrice(size, type, extras = {}) {
  let isSize = ["small", "medium", "large"].includes(size);
  let isType = ["regular", "latte", "cappuccino", "mocha"].includes(type);
  let price;
  
  if (isSize === false || isType === false) {
    console.log(-1, isSize, isType); return -1
  }
  
  if (size == "small") {price = 3.00};
  if (size == "medium") {price = 4.00};
  if (size == "large") {price = 5.00};
  
  if (type == "regular") {price += 0.00};
  if (type == "latte" )  {price += 1.00};
  if (type == "cappuccino") {price += 1.50};
  if (type == "mocha")   {price += 2.00};

  if (extras.whippedCream === true) { price += 0.50};
  if (extras.extraShot === true) {price += 0.75};
  

  return price;
}

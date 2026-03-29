/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {

  let tipPercentage;
  let tipAmount;
  let totalAmount;

  let isInt = (serviceRating % 1 == 0) ;

  if (billAmount <= 0) return null
  if (!isInt) return null;
  if (!/[1-5]/.test(serviceRating)) return null;
  

  let tipPerMap = [0.05, 0.10, 0.15, 0.20, 0.25];
  let tipPercentageX = tipPerMap[serviceRating - 1];
  let tipAmountX = billAmount * tipPercentageX;
  let totalAmountX = billAmount + tipAmountX;

  return {tipPercentage: tipPercentageX * 100, tipAmount: tipAmountX, totalAmount: totalAmountX };
}

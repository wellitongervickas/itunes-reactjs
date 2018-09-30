/** 
 * @function getPlayerPercentage
 * 
 * This function will return a 
 * percentage of song played 0 to 100
 * 
 * @param { Number } current
 * @param { Number | null } max
 * @return { Number }
 * @public
*/

export function getPlayerPercentage(current, max = 30) {

  const currentTime = Math.round(current.toFixed(1));
  return Math.round(currentTime * 100 / max);
};
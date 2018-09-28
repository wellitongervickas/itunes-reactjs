/** 
 * @function getPlayerPercentage
 * 
 * @public
*/

export function getPlayerPercentage(current, max = 30) {

  let currentTime = Math.round(current.toFixed(1));
  return Math.round(currentTime * 100 / max);
};
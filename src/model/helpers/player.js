/** 
 * @function getPlayerPercentage
 * 
 * @public
*/

export function getPlayerPercentage(current, max) {

  let currentTime = Math.round(current.toFixed(1));
  let maxTime = Math.round(max.toFixed(1));
  let percentage = Math.round(currentTime*maxTime/100 * 10 );

  return percentage;
};
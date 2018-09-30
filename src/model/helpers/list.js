/**
 * @function convertToArray
 * 
 * This function will transform a object
 * in a array from object properties
 * 
 * @param { object } object
 * @param { boolean | null } keys
 * @return { array }
 * @public
 *
*/

export function convertToArray(object, keys = false) {
  if (object) {
    if (keys === false) {
      return Object.values(object);
    } 
    
    return Object.keys(object);
  }
};
/**
 * @function convertToArray
 *
 * @public
 *
*/

export function convertToArray(object, keys = false) {
  if (object) {
    if (keys === false) {
      return Object.values(object);
    } else {
      return Object.keys(object);
    }
  }
};
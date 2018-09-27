/** 
 * @function getThumbBig 
 * 
 * @public
*/

export function getThumbBig(thumbUrl) {

  let newSize = '1920x800cc.jpg';
  let newImage = thumbUrl.split('/');
  
  newImage.pop();
  newImage.push(newSize);
  newImage = newImage.join('/');

  return newImage; 
  
};
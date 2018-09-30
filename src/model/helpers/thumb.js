/** 
 * @function getThumbBig 
 * 
 * When this function receive a picture url
 * of album/song, will make new url to get 
 * a new thumbnail more bigger
 * 
 * @param { string } thumbUrl
 * @return { string }
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
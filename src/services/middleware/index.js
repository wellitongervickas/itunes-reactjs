import Axios from 'axios';

const middleware = (() => {

  /**
   * @function requestAxios
   *
   * @public
   *
  */

  const requestAxios = () => {

    const request = Axios.create();
    return request;
  }

  return {
    requestAxios,
  }
})();

export default middleware;

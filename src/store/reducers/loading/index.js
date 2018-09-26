const INITIAL_STATE = {
  loadingStatus: false
};

export default function loading(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_LOADING_STATUS':
      return {...state, loadingStatus: action.payload };

    default:
      return {...state };
  }
}

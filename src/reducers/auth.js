// reducer to tell the store when the user is logged in or logged out

export default (state = {}, action) => {
  switch(action.type){
    case 'LOGIN':
      return {
        uid: action.uid
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};

import authReducer from '../../reducers/auth';

describe('reducers/auth', () => {

  test('should set uid for login', () => {
    const action = {
      type: 'LOGIN',
      uid: 'goDenver303'
    };
    const state = authReducer({}, action);
    expect(state.id).toBe(action.id);
  });

  test('should clear uid for logout', () => {
    const action = {
      type: 'LOGOUT'
    };
    const state = authReducer({uid: 'lolk'}, action);
    expect(state).toEqual({});
  });

});

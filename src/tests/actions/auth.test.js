import {login, logout} from '../../actions/auth';

describe('actions/auth', () => {

  test('should generate login action object', () => {
    const uid = 'goBronco';
    const action = login(uid);
    expect(action).toEqual({
      type: 'LOGIN',
      uid
    });
  });

  test('should generate logout action object', () => {
    const action = logout();
    expect(action).toEqual({
      type: 'LOGOUT'
    });
  });

});

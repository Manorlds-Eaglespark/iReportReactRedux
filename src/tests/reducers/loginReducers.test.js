import loginReducer from '../../reducers/auth/loginReducer';


describe('reducer initial state', () => {
  it('should handle LOGIN_USER_FAILED', () => {
    expect(
      loginReducer(
        {
          isUserLoggedIn: false,
          logged_in: false,
        },
        {
          type: 'LOGIN_USER_FAILED',
          payload: {
            error: 'Enter a correct Password',
            status: 401,
          },
        },
      ),
    ).toEqual({
      isUserLoggedIn: false,
      logged_in: false,
      errors: {
        error: 'Enter a correct Password',
        status: 401,
      },
    });
  });

  it('should handle LOGIN_USER_SUCCESS', () => {
    expect(
      loginReducer(
        {
          isUserLoggedIn: false,
          logged_in: false,
        },
        {
          type: 'LOGIN_USER_SUCCESS',
        },
      ),
    ).toEqual({
      isUserLoggedIn: true,
      logged_in: true,
    });
  });
});

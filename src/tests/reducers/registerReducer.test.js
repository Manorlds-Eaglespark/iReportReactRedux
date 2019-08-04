import registerReducer from '../../reducers/auth/registerReducer';


describe('reducer initial state', () => {
  it('should handle REGISTER_USER_FAIL', () => {
    expect(
      registerReducer(
        { registered: '' },
        {
          type: 'REGISTER_USER_FAIL',
          payload: {
            error: 'Enter a correct Password',
            status: 401,
          },
        },
      ),
    ).toEqual({
      registered: '',
      errors: {
        error: 'Enter a correct Password',
        status: 401,
      },
    });
  });

  it('should handle REGISTER_USER_SUCCESS', () => {
    expect(
      registerReducer(
        { registered: '' },
        {
          type: 'REGISTER_USER_SUCCESS',
          payload: 'Successfully registered',
        },
      ),
    ).toEqual({
      registered: 'Successfully registered',
    });
  });
});

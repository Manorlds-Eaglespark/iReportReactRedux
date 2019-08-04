import viewAllRedFlagsReducer from '../../reducers/redflags/viewAllRedFlagsReducer';


describe('reducer initial state', () => {
  it('should handle VIEW_REDFLAGS_FAIL', () => {
    expect(
      viewAllRedFlagsReducer(
        { redflags: [] },
        {
          type: 'VIEW_REDFLAGS_FAIL',
          payload: {
            error: 'Enter a correct Password',
            status: 401,
          },
        },
      ),
    ).toEqual({
      redflags: [],
      errors: {
        error: 'Enter a correct Password',
        status: 401,
      },
    });
  });

  it('should handle VIEW_REDFLAGS_SUCCESS', () => {
    expect(
      viewAllRedFlagsReducer(
        { redflags: [] },
        {
          type: 'VIEW_REDFLAGS_SUCCESS',
          payload: [
            {
              comment: 'Thugs attacked me',
              created_by: 3,
              created_on: 'Mon, 25 Feb 2019 12:30:18 GMT',
              id: 1,
              images: '{jpeg}',
              location: '{"Kampala "}',
              status: 'New',
              type: 'red_flag',
              videos: '{mp4}',
            },
          ],
        },
      ),
    ).toEqual({
      redflags: [
        {
          comment: 'Thugs attacked me',
          created_by: 3,
          created_on: 'Mon, 25 Feb 2019 12:30:18 GMT',
          id: 1,
          images: '{jpeg}',
          location: '{"Kampala "}',
          status: 'New',
          type: 'red_flag',
          videos: '{mp4}',
        },
      ],
    });
  });
});

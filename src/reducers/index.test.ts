import {
  INIT,
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE,
} from '../constants';
import reducer, { initialState } from './';

describe('Weather reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(
        undefined,
        { type: INIT },
      ),
    ).toEqual(initialState);
  });

  it('should handle GET_WEATHER_REQUEST', () => {
    expect(
      reducer(initialState, {
        type: GET_WEATHER_REQUEST,
        payload: 'Madrid',
      }),
    ).toEqual({
      data: null,
      error: false,
      loading: true,
    });
  });

  it('should handle GET_WEATHER_SUCCESS', () => {
    const payload = {
      city: 'Madrid',
      list: [],
    };
    expect(
      reducer(
        { ...initialState, loading: true },
        { type: GET_WEATHER_SUCCESS, payload },
      ),
    ).toEqual({
      data: payload,
      error: false,
      loading: false,
    });
  });

  it('should handle GET_WEATHER_FAILURE', () => {
    expect(
      reducer(
        { ...initialState, loading: true },
        { type: GET_WEATHER_FAILURE },
      ),
    ).toEqual({
      data: null,
      error: true,
      loading: false,
    });
  });
});

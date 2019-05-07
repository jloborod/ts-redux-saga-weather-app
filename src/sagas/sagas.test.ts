import { put, call } from 'redux-saga/effects';

import { weatherSaga } from './';
import { getWeatherByCityName } from '../services/weather';

import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE,
} from '../constants';

jest.mock('../services/weather');

describe('Weather Saga', () => {
  it('should get weather for a given city and dispatch success', () => {
    const response = {
      city: 'Madrid',
    };
    const generator = weatherSaga({
      type: GET_WEATHER_REQUEST,
      payload: 'Madrid',
    });

    expect(generator.next().value)
      .toEqual(call(getWeatherByCityName, 'Madrid'));
    expect(generator.next(response).value)
      .toEqual(put({
        type: GET_WEATHER_SUCCESS,
        payload: response,
      }));
    expect(generator.next().done).toBe(true);
  });

  it('should dispatch failure if there is any error', () => {
    const error = {
      cod: 404,
      message: 'city not found'
    };
    const generator = weatherSaga({
      type: GET_WEATHER_REQUEST,
      payload: 'Unknown city',
    });

    expect(generator.next().value)
      .toEqual(call(getWeatherByCityName, 'Unknown city'));
    expect(generator.throw({
      response: {
        data: error,
      },
    }).value)
      .toEqual(put({
        type: GET_WEATHER_FAILURE,
        payload: error.message,
      }));
    expect(generator.next().done).toBe(true);
  });
});

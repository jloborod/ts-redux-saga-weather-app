import axios from 'axios';

import weatherService from './';
import factory from './factory';

import mock from './mock-data';

jest.mock('axios');
jest.mock('./factory');

describe('Weather service', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('get weather given an existing city', () => {
    axios.mockResolvedValueOnce({
      data: mock.london,
    });

    expect.assertions(2);
    return weatherService.getWeatherByCityName('Madrid')
      .then(() => {
        expect(axios).toHaveBeenCalledTimes(1);
        expect(factory.transformPayload).toHaveBeenCalledWith(mock.london);
      });
  });

  it('get an error if something goes wrong', () => {
    const notFoundError = {
      cod: '404',
      message: 'city not found',
    };

    axios.mockRejectedValueOnce({
      data: notFoundError,
    });

    expect.assertions(2);
    return weatherService.getWeatherByCityName('Unknown city')
      .catch((e) => {
        expect(axios).toHaveBeenCalledTimes(1);
        expect(e).toEqual({
          data: notFoundError,
        });
      });
  });
});
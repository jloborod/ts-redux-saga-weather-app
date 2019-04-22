import axios from 'axios';

import { transformPayload } from './factory';

const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = process.env.REACT_APP_API_KEY;

export const getWeatherByCityName = (city: string): Promise<any> =>
  axios({
    method: 'get',
    baseURL: API_URL,
    url: 'forecast',
    params: {
      q: city,
      units: 'metric',
      cnt: 8,
      appId: API_KEY,
    },
  })
    .then(({ data }) => data)
    .then(transformPayload);

export default {
  getWeatherByCityName,
};

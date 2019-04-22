import moment from 'moment';

import {
  WeatherPayload,
  Weather,
} from './interfaces';

const ICON_URL = 'https://openweathermap.org/img/w/';

// Open Weather API uses unix timestamp format
// JS does not, therefore, it is needed to use
// unix and utc functions from momentjs
// https://openweathermap.desk.com/customer/portal/questions/16821261-date-field-in-api-response?t=535697
export const transformPayload = (payload: WeatherPayload): Weather => ({
  city: `${payload.city.name} ${payload.city.country}`,
  list: payload.list
    // .slice(0, 4) // We get only 4 items from list
    .map(item => ({
      day: moment.unix(item.dt).utc().format('dddd'),
      time: moment.unix(item.dt).utc().format('h:mmA'),
      temp: `${Math.round(item.main.temp)}`,
      icon: `${ICON_URL}${item.weather[0].icon}`
    })),
});

export default {
  transformPayload,
};

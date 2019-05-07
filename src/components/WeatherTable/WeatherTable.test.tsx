import React from 'react';
import { shallow } from 'enzyme';

import WeatherTable from './';

describe('<WeatherTable />', () => {
  it('renders without crashing', () => {
    const ICON_URL = 'https://openweathermap.org/img/w/';
    const data = {
      city: 'Madrid ES',
      list: [
        {
          day: 'Tuesday',
          time: '3:00PM',
          temp: '13',
          icon: `${ICON_URL}03d.png`,
          dt: 1556031600,
        },
        {
          day: 'Tuesday',
          time: '6:00PM',
          temp: '10',
          icon: `${ICON_URL}03d.png`,
          dt: 1556042400,
        },
        {
          day: 'Tuesday',
          time: '9:00PM',
          temp: '7',
          icon: `${ICON_URL}04n.png`,
          dt: 1556053200,
        },
        {
          day: 'Wednesday',
          time: '12:00AM',
          temp: '6',
          icon: `${ICON_URL}04n.png`,
          dt: 1556064000,
        },
      ],
    };
    const wrapper = shallow(<WeatherTable data={data} />);

    expect(wrapper).toMatchSnapshot();
  });
});

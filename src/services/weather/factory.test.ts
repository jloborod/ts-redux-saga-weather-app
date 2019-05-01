import factory from './factory';
import mock from './mock-data';

describe('Weather factory', () => {
  it('creates weather', () => {
    const ICON_URL = 'https://openweathermap.org/img/w/';
    const payload = mock.madrid;

    const weather = factory.transformPayload(payload);

    expect(weather).toEqual({
      city: 'Madrid ES',
      list: [
        {
          day: 'Tuesday',
          time: '3:00PM',
          temp: '13',
          icon: `${ICON_URL}03d`,
        },
        {
          day: 'Tuesday',
          time: '6:00PM',
          temp: '10',
          icon: `${ICON_URL}03d`,
        },
        {
          day: 'Tuesday',
          time: '9:00PM',
          temp: '7',
          icon: `${ICON_URL}04n`,
        },
        {
          day: 'Wednesday',
          time: '12:00AM',
          temp: '6',
          icon: `${ICON_URL}04n`,
        },
      ],
    });
  });
});

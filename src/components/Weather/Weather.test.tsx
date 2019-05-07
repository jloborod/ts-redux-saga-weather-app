import React from 'react';
import { shallow } from 'enzyme';

import { Weather } from './';

describe('<Weather />', () => {
  it('renders <Loading /> when loading prop is true', () => {
    const wrapper = shallow(
      <Weather
        data={null}
        error={null}
        loading={true}
      />
    );
    const Loading = wrapper.find('Loading');

    expect(Loading).toHaveLength(1);
  });
  it('renders <Error /> when there is an error', () => {
    const error = 'city not found.';
    const wrapper = shallow(
      <Weather
        data={null}
        error={error}
        loading={false}
      />
    );
    const Error = wrapper.find('Error');

    expect(Error).toHaveLength(1);
    expect(Error.props().error).toBe(error);
  });
  it('renders <WeatherTable /> when there is data', () => {
    const data = {
      city: 'London',
      list: [],
    };
    const wrapper = shallow(
      <Weather
        data={data}
        error={null}
        loading={false}
      />
    );
    const WeatherTable = wrapper.find('WeatherTable');

    expect(WeatherTable).toHaveLength(1);
    expect(WeatherTable.props().data).toEqual(data);
  });
});
import React from 'react';
import { shallow } from 'enzyme';

import { Weather } from './';

describe('<Weather />', () => {
  it('renders <Loading /> when loading prop is true', () => {
    const wrapper = shallow(
      <Weather
        data={null}
        error={false}
        loading={true}
      />
    );
    const Loading = wrapper.find('Loading');

    expect(Loading).toHaveLength(1);
  });
  it('renders <Error /> when error prop is true', () => {
    const wrapper = shallow(
      <Weather
        data={null}
        error={true}
        loading={false}
      />
    );
    const Error = wrapper.find('Error');

    expect(Error).toHaveLength(1);
    expect(Error.props().error).toBe('There was an error.');
  });
  it('renders <WeatherTable /> when there is data', () => {
    const data = {
      city: 'London',
      list: [],
    };
    const wrapper = shallow(
      <Weather
        data={data}
        error={false}
        loading={false}
      />
    );
    const WeatherTable = wrapper.find('WeatherTable');

    expect(WeatherTable).toHaveLength(1);
    expect(WeatherTable.props().data).toEqual(data);
  });
});
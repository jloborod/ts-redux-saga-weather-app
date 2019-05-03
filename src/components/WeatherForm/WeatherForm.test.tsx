import React from 'react';
import { shallow } from 'enzyme';

import WeatherForm from './WeatherForm';

describe('<WeatherForm />', () => {
  it('renders without crashing', () => {
    const city = 'Madrid';
    const onChange = jest.fn();
    const onSubmit = jest.fn();
    const wrapper = shallow(
      <WeatherForm
        city={city}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});

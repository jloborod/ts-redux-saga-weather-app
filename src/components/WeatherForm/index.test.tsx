import React from 'react';
import { mount } from 'enzyme';

import { WeatherFormContainer } from './';

describe('<WeatherFormContainer />', () => {
  const mockFunction = jest.fn();

  it('handles input change', () => {
    const wrapper = mount(<WeatherFormContainer getWeather={mockFunction} />);

    expect(wrapper.find('input').props().value).toBe('');

    wrapper.find('input').simulate('change', {
      target: { value: 'London' },
    });

    wrapper.update();

    expect(wrapper.find('input').props().value).toEqual('London');
  });

  it('handles submit', () => {
    const wrapper = mount(
      <WeatherFormContainer getWeather={mockFunction} />
    );
    let prevented = false;

    wrapper.find('input').simulate('change', {
      target: { value: 'Madrid' },
    });
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {
        prevented = true;
      }
    });

    expect(prevented).toBe(true);
    expect(wrapper.props().getWeather).toHaveBeenCalledTimes(1);
    expect(wrapper.props().getWeather).toHaveBeenCalledWith('Madrid');
  });
});

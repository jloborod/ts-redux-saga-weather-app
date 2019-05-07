import React from 'react';
import { shallow } from 'enzyme';

import Error from './';

describe('<Error />', () => {
  it('renders without crashing', () => {
    const error = 'Something went wrong';
    const wrapper = shallow(<Error error={error}/>);

    expect(wrapper).toMatchSnapshot();
  });
});

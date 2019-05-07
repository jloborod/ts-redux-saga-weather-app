import React from 'react';
import { shallow } from 'enzyme';

import Loading from '.';

describe('<Loading />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Loading />);

    expect(wrapper).toMatchSnapshot();
  });
});

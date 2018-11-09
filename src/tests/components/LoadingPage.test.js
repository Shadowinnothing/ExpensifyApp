import React from 'react';
import {shallow} from 'enzyme';

import LoadingPage from '../../components/LoadingPage';

describe('components/LoadingPage', () => {

  test('should correctly render the LoadingPage component', () => {
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
  });

});

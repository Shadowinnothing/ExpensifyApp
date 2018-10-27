import React from 'react';
import {shallow} from 'enzyme';

import uNotFoundPage from '../../components/NotFoundPage';

describe('components/NotFoundPage', () => {

  test('should correctly render NotFoundPage', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
  });

});

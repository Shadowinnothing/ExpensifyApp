import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';

import Header from '../../components/Header';

describe('components/Header.js', () => {

  test('should render Header correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    console.log(renderer.getRenderOutput());
  });

});

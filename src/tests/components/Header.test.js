import React from 'react';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import {shallow} from 'enzyme';

import {Header} from '../../components/Header';

describe('components/Header.js', () => {

  test('should render Header correctly', () => {
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    const wrapper = shallow(<Header startLogout={() => {} }/>);
    expect(wrapper).toMatchSnapshot();
    //expect(wrapper.find('h1').text()).toBe('Expensify'); // <- enzyme example, dope yo
  });

  test('should call startLogout on button click', () => {
    const startLogoutSpy = jest.fn(); // spy
    const wrapper = shallow(<Header startLogout={startLogoutSpy} />);
    wrapper.find('button').simulate('click');
    expect(startLogoutSpy).toHaveBeenCalled();
  });

});

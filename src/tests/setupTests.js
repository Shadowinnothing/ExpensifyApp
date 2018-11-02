// This file Sets Up Enzyme for react-16

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotenv';

DotEnv.config({path: '.env.test'});

Enzyme.configure({
  adapter: new Adapter()
});

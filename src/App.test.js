import React from 'react';
import App from './App';
import { shallow } from 'enzyme';


test('sample test', () => {
  expect(2 + 2).toBe(4)
})

test('renders without error', () => {
  const wrapper = shallow(<App/>);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
})

test('test state', () => {
  const wrapper = shallow(<App/>);
  wrapper.setState({sampleState2 : 4});
  const initialState = wrapper.state('sampleState2');
  expect(initialState).toBe(4);
})

/* global it, describe, expect, afterEach */
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Container } from '../container';

configure({ adapter: new Adapter() });

describe('Container', () => {
  let wrapper = null;
  afterEach(() => {
    wrapper = null;
  });
  it('exports', () => {
    expect(Container).toBeDefined();
  });
  it('renders entry text', () => {
    wrapper = shallow(<Container stage="entry" />);
    expect(wrapper.find('Entry').dive().find('h1').text()).toBe('Stolen phone?');
  });
  it('renders button for starting process', () => {
    wrapper = shallow(<Container stage="entry" />);
    expect(wrapper.find('Entry').dive().find('button').text()).toBe('Submit your case');
  });
});

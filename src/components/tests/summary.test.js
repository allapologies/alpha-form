/* global it, describe, expect, afterEach */
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Summary } from '../summary';

configure({ adapter: new Adapter() });

describe('Summary', () => {
  let wrapper = null;
  afterEach(() => {
    wrapper = null;
  });
  it('renders a table', () => {
    wrapper = shallow(<Summary />);
    expect(wrapper.find('table').exists()).toBe(true);
  });
  it('has button for finishing process', () => {
    wrapper = shallow(<Summary />);
    expect(wrapper.find('button').exists()).toBe(true);
  });
  it('renders table data with answers', () => {
    const questions = [
      {
        id: 'A05',
        text: 'How much did your product cost?',
        reply: '100',
        type: 'number',
        next: 'A06',
      },
      {
        id: 'A06',
        text: 'Are you insured elsewhere?',
        reply: true,
        type: 'boolean',
        next: 'B01',
      },
      {
        id: 'A07',
        text: 'Name of additional insurance?',
        reply: 'Allianz',
        type: 'string',
        next: null,
      },
    ];
    wrapper = shallow(<Summary questions={questions} />);
    expect(wrapper.contains(<tr><td>How much did your product cost?</td><td>100</td></tr>))
      .toBe(true);
    expect(wrapper.contains(<tr><td>Are you insured elsewhere?</td><td>Yes</td></tr>))
      .toBe(true);
    expect(wrapper.contains(<tr><td>Name of additional insurance?</td><td>Allianz</td></tr>))
      .toBe(true);
  });
});

import React from 'react'
import { shallow } from 'enzyme'

import Img from '../Img'

describe('<Img />', () => {
  let wrapper, url = 'http://adventures.for.me'
  
  beforeEach(() => {
    wrapper = shallow( <Img imageUrl={url} />)
  });

  it('with shallow enzyme', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.props().className).toBe('img');
    expect(wrapper.props().src).toBe(url);
    expect(wrapper.props().alt).toBe('Your gif, madame.');
  });

  it('with snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})

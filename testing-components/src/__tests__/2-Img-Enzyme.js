import React from 'react'
import { shallow } from 'enzyme'
// enzyme docs: https://github.com/airbnb/enzyme

import Img from '../Img'

describe('<Img />', () => {
  it('with shallow enzyme', () => {
    const url = 'http://adventures.for.me'
    const image = shallow( <Img imageUrl={url} />)

    expect(image.length).toBe(1);
    expect(image.props().className).toBe('img');
    expect(image.props().src).toBe(url);
    expect(image.props().alt).toBe('Your gif, madame.');
  });

  it('with snapshot', () => {
    const url = 'http://adventures.for.me'
    const image = shallow( <Img imageUrl={url} />)

    expect(image).toMatchSnapshot();
  });
})

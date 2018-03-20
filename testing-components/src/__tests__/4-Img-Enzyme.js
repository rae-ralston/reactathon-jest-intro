import React from 'react'
import { shallow } from 'enzyme'

import Img from '../Img'

describe('<Img />', () => {
  it('with enzyme', () => {
    const url = 'http://adventures.for.me'
    const image = shallow(
        <Img imageUrl={url}>
    );
    expect(image.props().imageUrl).to.equal(url);
    expect(image).toMatchSnapshot();
  });
})

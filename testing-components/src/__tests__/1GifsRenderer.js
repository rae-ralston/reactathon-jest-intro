import React from 'react'
import { shallow } from 'enzyme'

import Gifs from '../Gifs'
import renderer from 'react-test-renderer';

describe('<Gifs /> Renderer', () => {
  it('with snapshot & renderer', () => {
    const tree = renderer
      .create(<Gifs />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})

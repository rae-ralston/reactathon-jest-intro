import React from 'react'
import { shallow } from 'enzyme'

import App from '../App'
import renderer from 'react-test-renderer';

describe('<Gifs /> Renderer', () => {
  it('with snapshot & renderer', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})

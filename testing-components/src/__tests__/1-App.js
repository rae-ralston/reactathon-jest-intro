import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'

import App from '../App'

describe('<App /> Renderer', () => {
  it('with snapshot & renderer', () => {
    const tree = renderer
      .create(<App />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  });

  it('with enzyme shallow', () => {
    shallow(<App />)
  });
})

import React from 'react'
import { shallow } from 'enzyme'
// enzyme docs: https://github.com/airbnb/enzyme

import App from '../App'
import renderer from 'react-test-renderer'
// docs for renderer: https://reactjs.org/docs/test-renderer.html

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

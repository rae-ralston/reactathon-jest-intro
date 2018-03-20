import React from 'react'
import { shallow } from 'enzyme'

import Form from '../Form'

describe('<Form />', () => {
  let wrapper, mockFetch,
    url = 'http://adventures.for.me',
    myMock = jest.fn()
  
  beforeEach(() => {
    mockFetch = new myMock()
    wrapper = shallow( <Form handleSubmit={mockFetch} />)
  });

  it('with mocking', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('with no state', () => {
    expect(wrapper.instance().props.handleSubmit).toExist;
    expect(wrapper.state()).toEqual({ searchTerm: '' });

    wrapper.setState({ searchTerm: 'hello' })
    expect(wrapper.state()).toEqual({ searchTerm: "hello" });
  });
})

import React from 'react'
import { mount, shallow } from 'enzyme'

import Form from '../Form'

describe('<Form />', () => {
  it('with mocking', () => {
    const mockFetch = jest.fn()
    const form = shallow( <Form handleSubmit={mockFetch} />)

    expect(form).toMatchSnapshot();
  });

  it('with no state', () => {
    const url = 'http://adventures.for.me'
    const mockFetch = jest.fn().mockReturnValueOnce(url)
    const form = mount( <Form handleSubmit={mockFetch} />)
    expect(form.instance().props.handleSubmit).toExist;

    expect(form.state()).toEqual({ searchTerm: '' });

    form.setState({ searchTerm: 'hello' })
    expect(form.state()).toEqual({ searchTerm: "hello" });
  });
})

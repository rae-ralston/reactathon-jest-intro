import React from 'react'
import { mount } from 'enzyme'

import Form from '../Form'

describe('<Form />', () => {
  it('with mocking', () => {
    const mockFetch = jest.fn()
    const form = mount(
        <Form handleSubmit={mockFetch} />
    );
    expect(form).toMatchSnapshot();
  });
})

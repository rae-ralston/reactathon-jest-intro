import React, { Component } from 'react'
import './extras/Form.css'

export default class Form extends Component {
  state = {
    searchTerm: '',
  }

  handleChange = event => this.setState({ searchTerm: event.target.value })

  render() {
    const { handleSubmit } = this.props
    const { searchTerm } = this.state

    return (
      <form className='form' onSubmit={event => handleSubmit(event, searchTerm)}>
        <input
          type="text"
          value={searchTerm}
          onChange={event => this.handleChange(event)}
          placeholder="Search for a Gif"
        />
        <button type="submit">search</button>
      </form>
    )
  }
}

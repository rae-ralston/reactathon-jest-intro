// require('dotenv').config()
import React, { Component } from 'react'

const giphyAPIKey = process.env.REACT_APP_GIPHY_API_KEY

class Gifs extends Component {
  state = {
    searchTerm: '',
    imageUrl: '',
  }

  handleChange = e => this.setState({ searchTerm: e.target.value })

  handleSubmit = e => {
    e.preventDefault()
    const url = `http://api.giphy.com/v1/gifs/translate?api_key=${giphyAPIKey}&s=${this.state.searchTerm}`

    fetch(url)
      .then(response => response.json())
      .then(payload => {
        let imageUrl = payload.data.images.original.url
        this.setState({ imageUrl })
      })
      .catch(e => console.error(e))
  }

  render() {
    const { imageUrl, searchTerm } = this.state
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            value={searchTerm}
            onChange={e => this.handleChange(e)}
            placeholder="Search for a Gif" />
          <button type="submit">search</button>
        </form>
        {
          imageUrl.length ?
            <img src={imageUrl} alt="Gif"></img> :
            <div></div>
        }
      </div>
    )
  }
}

export default Gifs

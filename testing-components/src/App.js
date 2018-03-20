import React, { Component } from 'react'
import Img from './Img'
import Form from './Form'
import './extras/App.css'
import fetchGif from './extras/utils'

const giphyAPIKey = process.env.REACT_APP_GIPHY_API_KEY

class App extends Component {
  state = {
    imageUrl: '',
  }

  handleSubmit = (event, searchTerm) => {
    const url = `http://api.giphy.com/v1/gifs/translate?api_key=${giphyAPIKey}&s=${searchTerm}`
    event.preventDefault()
    fetchGif(url)
      .then(imageUrl => this.setState({ imageUrl }))
  }

  render() {
    const { imageUrl } = this.state

    return (
      <div className="App">
        <Form handleSubmit={this.handleSubmit} />
        <Img imageUrl={imageUrl} />
      </div>
    )
  }
}

export default App

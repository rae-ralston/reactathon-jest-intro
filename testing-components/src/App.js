import React, { Component } from 'react'
import Img from './Img'
import Form from './Form'
import './styles/App.css'

const giphyAPIKey = process.env.REACT_APP_GIPHY_API_KEY

class App extends Component {
  state = {
    imageUrl: '',
  }

  handleSubmit = (event, searchTerm) => {
    const url = `http://api.giphy.com/v1/gifs/translate?api_key=${giphyAPIKey}&s=${searchTerm}`
    event.preventDefault()

    fetch(url)
      .then(response => response.json())
      .then(payload => {
        let imageUrl = payload.data.images.original.url
        this.setState({ imageUrl })
      })
      .catch(err => console.error(err))
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

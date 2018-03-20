import React from 'react'
import './styles/Img.css'

const Img = ({ imageUrl }) => (
  imageUrl.length ?
    <img className='img' src={imageUrl} alt="Your gif, madame."></img> :
    <div></div>
)

export default Img

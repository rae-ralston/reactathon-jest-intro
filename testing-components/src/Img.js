import React from 'react'
import './extras/Img.css'

const Img = ({ imageUrl }) => (
  imageUrl.length ?
  <img className='img' src={imageUrl} alt="Your gif, madame."></img> :
  <div></div>
)

// Older Syntax Example
// const Img = (props) => {
//   const { imageUrl } = props
//   if (imageUrl.length) {
//     return <img className='img' src={imageUrl} alt="Your gif, madame."></img>
//   } else {
//     return <div></div>
//   }
// }


export default Img

import React from 'react'
import './Banner.css'
import photo from '../../assets/photo_2024-01-30_14-56-09.jpg'

function Banner() {
  return (
    <div className='banner container'>
      <img src={photo} alt="" />
    </div>
  )
}

export default Banner
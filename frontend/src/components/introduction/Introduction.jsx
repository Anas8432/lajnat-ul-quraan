import React from 'react'
import './Introduction.css'
import image1 from '../../assets/image1.jpg'

function Introduction() {
  return (
    <div className='introduction'>
      <img src={image1} alt="image1" />
      <h1>all introduction will be here</h1>
    </div>
  )
}

export default Introduction

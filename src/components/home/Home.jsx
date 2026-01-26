import React from 'react'
import './Home.css';
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'

function Home() {
  return (
    <div className='home-boxes'>
        <div className="introduction home-box">
          <img src={image1} alt="image1" />
        </div>
        <div className="admission home-box">
          <img src={image2} alt="imag2" />
        </div>
        <div className="gallery home-box">
          <img src={image3} alt="imag3" />
        </div>
        <div className="notices home-box">
          <img src={image4} alt="image4" />
        </div>

    </div>
  )
}

export default Home

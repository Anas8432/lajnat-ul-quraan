import React from 'react'
import './Home.css';
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div className='home-boxes'>
        <div className="home-introduction home-box">
          <Link to='/home-introduction'><img src={image1} alt="image1" /></Link>
        </div>
        <div className="home-admission home-box">
           <Link to='/home-admission'><img src={image2} alt="image2" /></Link>
        </div>
        <div className="home-notices home-box">
           <Link to='/home-notices'><img src={image3} alt="image3" /></Link>
        </div>
        <div className="home-gallery home-box">
          <Link to='/home-gallery'><img src={image4} alt="image4" /></Link>
        </div>

    </div>
  )
}

export default Home

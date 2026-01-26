import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
      <footer className='footer'>
        <div className='footer-h1'>
          <h1>lajnat-ul-quraan</h1>
        </div>
        <hr />
        <div className='footer-copyright'>
          <p>&copy; Copyright 2026</p>
        </div>
        <hr />
        <div className="footer-icons">
          <i class="fa-solid fa-phone"></i>
          <i class="fa-brands fa-whatsapp"></i>
          <i class="fa-brands fa-telegram"></i>
          <i class="fa-brands fa-google-play"></i>
          <i class="fa-solid fa-location-dot"></i>
        </div>
      </footer>
    </div>
  )
}

export default Footer

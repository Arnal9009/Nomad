import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-ul">
          <ul>
            <li>about us</li>
            <li>Company</li>
            <li>Guids</li>
            <li>Tours</li>
            <li>Places</li>
          </ul>
          <ul>
            <li>contacts</li>
            <li>WhatsApp:</li>
            <li>+996 222 77-74-26</li>
            <li>Phone Number:</li>
            <li>+996 707 70-74-24</li>
          </ul>
        </div>
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 40.3333C32.1252 40.3333 40.3333 32.1252 40.3333 22C40.3333 11.8748 32.1252 3.66666 22 3.66666C11.8747 3.66666 3.66663 11.8748 3.66663 22C3.66663 32.1252 11.8747 40.3333 22 40.3333Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M15.5283 24.31L22 17.8567L28.4717 24.31" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <div>
          <span>follow us</span>
          <a href="https://instagram.com/nomad_tours_?utm_medium=copy_link" target="_blank">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5 40.3333H27.5C36.6666 40.3333 40.3333 36.6667 40.3333 27.5V16.5C40.3333 7.33332 36.6666 3.66666 27.5 3.66666H16.5C7.33329 3.66666 3.66663 7.33332 3.66663 16.5V27.5C3.66663 36.6667 7.33329 40.3333 16.5 40.3333Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22 28.4167C25.5439 28.4167 28.4167 25.5438 28.4167 22C28.4167 18.4562 25.5439 15.5833 22 15.5833C18.4562 15.5833 15.5834 18.4562 15.5834 22C15.5834 25.5438 18.4562 28.4167 22 28.4167Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M32.3328 12.8333H32.354" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
import React from 'react'

export default function Header() {
  return (
    <div className='header'>
      <div className='header--left'>
        <img src='images/header-logo.png' alt='' className='header--img' />
        <h3 className='header--h3'>Meme Generator</h3>
      </div>
      <p className='header--p'>Built with love 🤍</p>
    </div>
  )
}

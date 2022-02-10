import React from 'react'
import Footer from '../Footer/Footer'
import Photos from '../Photos/Photos'
import Header from '../Header/Header'
import './Galley.scss'

const Galley = () => {
  return (
    <div className='container'>
      <Header/>
      <Photos/>
      <Footer/>
    </div>
  )
}

export default Galley
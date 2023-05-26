import React from 'react'
import './header.css'
import changer from '.././../assets/changer.png'
// eslint-disable-next-line no-unused-vars
import HeaderSocial from './HeaderSocial'
import CTA from './CTA'
export default function Header() {
  return (
    <div className='info'>
      <h5>Hello I'm</h5>
      <h1>Amabo Joshua</h1>
      <h5 className='text-light'>Software Engineer </h5>
      <CTA />
      <div className='my_image'>
        <headerSocial />
        <img src={changer} alt="myphoto" width={900} height={400} />
      </div>
      <a href='#contact' className='scroll__down'>Scroll down</a>
    </div>
  )
}
import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Designer</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>User Interface</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>User Experience</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>User Interface</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>User friendly and interactiveplatforms</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>chart templates and infographics with figma</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>UX building training</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>UI dev training</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX FIELD */}
         <article className="service">
          <div className="service__head">
            <h3>Web development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Frontend Web develpoment</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Backend Web development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Design of beautiful and functional websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Web dev with react and MERN</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Full stack developper</p>
            </li>
         
          </ul>
        </article>
            {/* WEB DEVELOPMENT ENDS*/}
         <article className="service">
          <div className="service__head">
            <h3>Graphic Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Top Notch Flyers for Businesses and occasions</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>E-book cover design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Business Card Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Deigning of Birthday and vaious events posters</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Content creation</p>
            </li>
          
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
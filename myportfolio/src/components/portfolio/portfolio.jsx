import React from 'react'
import './portfolio.css'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from  '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'
import img9 from '../../assets/img9.jpg'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img1} alt="Glassmorphic Bank card" />
          </div>
          <h3>Cyber Security and Cryptosystems</h3>
          <a href="https://githup.com" className='btn'>Github</a>
          <a href="https://github.com/amabojoshua1" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img2} alt="img2" />
          </div>
          <h3>Charts Templates and Infographics in Figma</h3>
          <a href="https://githup.com" className='btn'>Github</a>
          <a href="https://github.com/amabojoshua1" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img3} alt="img3" />
          </div>
          <h3>Cloud Computing and Maintainance</h3>
          <a href="https://githup.com" className='btn'>Github</a>
          <a href="https://github.com/amabojoshua1" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img4} alt="img4" />
          </div>
          <h3>Data Communication The Basics</h3>
          <a href="https://githup.com" className='btn'>Github</a>
          <a href="https://github.com/amabojoshua1" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img5} alt="A cat pet website" />
          </div>
          <h3>Introduction to Python for Data Science</h3>
          <a href="https://github.com/amabojoshua1" className='btn'>Github</a>
          <a href="https://github.com/amabojoshua1" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img6} alt="img6" />
          </div>
          <h3>Keeping Track via Internet of Things</h3>
          <a href="https://githup.com" className='btn'>Github</a>
          <a href="https://github.com/amabojoshua1" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
         </article>

          <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img7} alt="imag7" />
          </div>
          <h3>Figma Dashboard UI kit for design of web apps</h3>
          <a href="https://github.com/amabojoshua1r" className='btn'>Github</a>
          <a href="https://github.com/amabojoshua1" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img8} alt="image8" />
          </div>
          <h3>Full Stack Dev, the "web world"</h3>
          <a href="https://github.com/amabojoshua1" className='btn'>Github</a>
          <a href="https://github.com/amabojoshua1" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img9} alt="img9" />
          </div>
          <h3>Data Science Visualization</h3>
          <a href="https://github.com/amabojoshua1" className='btn'>Github</a>
          <a href="https://github.com/amabojoshua1" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
         </article>
        
      </div>

       
    </section>
  )
}

export default Portfolio
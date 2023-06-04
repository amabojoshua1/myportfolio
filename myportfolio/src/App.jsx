import './App.css';
import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/navbar'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/portfolio'
import Testimonial from './components/testimonial/testimonial'
import Contact from './components/contact/contact';
import Footer from './components/footer/footer'

function App() {
  return (
    <>
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;

// import React from "react";

// export const App = () => {
//   return (
//     <div>
//       App
//     </div>
//   )
// }

// export default App; //Always export the component as default
